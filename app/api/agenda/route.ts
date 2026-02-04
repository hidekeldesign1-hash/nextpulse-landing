import { NextResponse } from "next/server";

type AgendaBody = {
  nombre: string;
  whatsapp: string;
  tipo_negocio: string;
  mejorar: string;
  presupuesto: string;
  fecha_hora: string;
};

export async function POST(request: Request) {
  const url = process.env.GOOGLE_SHEETS_WEBAPP_URL;
  if (!url) {
    return NextResponse.json(
      { error: "No está configurada la URL de Google Sheets (GOOGLE_SHEETS_WEBAPP_URL)." },
      { status: 500 }
    );
  }

  let body: AgendaBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
  }

  const { nombre, whatsapp, tipo_negocio, mejorar, presupuesto, fecha_hora } = body;
  if (!nombre || !whatsapp || !tipo_negocio || !mejorar || !presupuesto || !fecha_hora) {
    return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await res.text();
    let data: { ok?: boolean; error?: string } = {};
    try {
      data = JSON.parse(text);
    } catch {
      // respuesta no JSON
    }
    if (!res.ok) {
      return NextResponse.json(
        { error: data.error || `Google Sheets respondió con error: ${res.status}. ${text.slice(0, 200)}` },
        { status: 502 }
      );
    }
    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error enviando a Google Sheets:", err);
    return NextResponse.json(
      { error: "No se pudo conectar con el servidor. Revisa la URL de Google Sheets." },
      { status: 502 }
    );
  }
}
