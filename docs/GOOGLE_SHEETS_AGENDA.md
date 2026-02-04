# Configurar Google Sheets para la encuesta "Agendar llamada"

Las respuestas del formulario "Agendar llamada" se envían a tu Google Sheet mediante un **Web App** de Google Apps Script. **No hace falta compartir tu correo**: todo se hace en tu cuenta de Google y luego pegas una URL en el proyecto.

Tu hoja: [Agenda - Google Sheets](https://docs.google.com/spreadsheets/d/15139Gz9m1dMfoUTVu1mHjPDcjgn0QIGiTV_TVIPDenw/edit?usp=sharing)

---

## 1. Encabezados en tu hoja "Agenda"

1. Abre tu hoja **Agenda** (el enlace de arriba).
2. En la **primera fila**, pon estos encabezados (uno por celda, de la **A1** a la **G1**):

   | A | B | C | D | E | F | G |
   |---|---|---|---|---|---|---|
   | Fecha | Nombre | WhatsApp | Tipo de negocio | Qué mejorar | Presupuesto | Día y horario |

   (El script escribe en el orden: Fecha automática, Nombre, WhatsApp, Tipo de negocio, Qué mejorar, Presupuesto, Día y horario.)

---

**Para copiar los encabezados:** en la fila 1 escribe en cada celda: **A1** = Fecha | **B1** = Nombre | **C1** = WhatsApp | **D1** = Tipo de negocio | **E1** = Qué mejorar | **F1** = Presupuesto | **G1** = Día y horario. Opcional: congela la fila 1 (Ver → Congelar → 1 fila).

---

## 2. Crear el script que recibe los datos

1. En esa misma hoja "Agenda", menú **Extensiones → Apps Script**.
2. Se abre el editor. Borra el código que venga y pega **todo** el código del archivo `docs/agenda-webapp-code.js` de este proyecto (o el bloque que ves abajo):

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var body = e.postData ? JSON.parse(e.postData.contents) : {};
    var nombre = body.nombre || "";
    var whatsapp = body.whatsapp || "";
    var tipo_negocio = body.tipo_negocio || "";
    var mejorar = body.mejorar || "";
    var presupuesto = body.presupuesto || "";
    var fecha_hora = body.fecha_hora || "";

    sheet.appendRow([
      new Date(),
      nombre,
      whatsapp,
      tipo_negocio,
      mejorar,
      presupuesto,
      fecha_hora
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. **Guarda** el proyecto (Ctrl+S o el icono de disco). Ponle nombre al proyecto si quieres, por ejemplo: **"Agenda Web App"**.

---

## 3. Desplegar como Web App

1. En Apps Script, menú **Implementar → Nueva implementación**.
2. Tipo: **Aplicación web**.
3. Configuración:
   - **Descripción**: por ejemplo "Agenda llamadas".
   - **Ejecutar como**: **Yo** (tu cuenta de Google).
   - **Quién tiene acceso**: **Cualquier persona** (así tu web puede enviar datos sin login).
4. Pulsa **Implementar**.
5. En **Autorizar el acceso**:
   - Elige tu cuenta de Google.
   - Si sale "Google no ha verificado esta app": **Avanzadas** → **Ir a [nombre del proyecto] (no seguro)** → **Permitir**.
6. Te dará una **URL de la aplicación web**, algo como:
   `https://script.google.com/macros/s/AKfycbz.../exec`
7. **Copia esa URL** completa; la usarás en el paso siguiente.

---

## 4. Poner la URL en tu proyecto

1. En la **raíz** del proyecto (donde está `package.json`), crea un archivo **`.env.local`** (si no existe).
2. Añade esta línea (sustituye la URL por la que te dio Google):

   ```
   GOOGLE_SHEETS_WEBAPP_URL=https://script.google.com/macros/s/XXXXXXXX/exec
   ```

3. **Reinicia** el servidor de desarrollo (`npm run dev`) para que lea la variable.
4. Si subes el sitio a **Vercel** (u otro hosting), añade la misma variable en **Settings → Environment Variables**: nombre `GOOGLE_SHEETS_WEBAPP_URL`, valor la URL del script.

---

## 5. Probar que funciona

1. En tu web, haz clic en **"Agendar llamada"**.
2. Rellena el formulario y envía.
3. Revisa la Google Sheet: debe aparecer una **nueva fila** con la fecha/hora de envío y los datos (nombre, WhatsApp, tipo de negocio, etc.).

Si no llega nada:
- Comprueba que la URL en `.env.local` es exactamente la de **Implementar → Implementaciones** (incluido `/exec` al final).
- En Apps Script, **Ver → Registros de ejecución** para ver si hubo errores.

---

## Resumen rápido

| Dónde | Qué hacer |
|-------|-----------|
| Google Sheet | Crear hoja, fila 1 = encabezados (Fecha, Nombre, WhatsApp, Tipo de negocio, Qué mejorar, Presupuesto, Día y horario). |
| Apps Script | Pegar el `doPost` que recibe JSON y hace `appendRow`. |
| Implementar | Nueva implementación → Aplicación web → "Cualquier persona" → Copiar URL. |
| Proyecto | `.env.local`: `GOOGLE_SHEETS_WEBAPP_URL=URL_copiada`. |
| Vercel | Añadir la misma variable en Environment Variables. |

Con esto, cada envío del formulario "Agendar llamada" quedará registrado en tu Google Sheet.
