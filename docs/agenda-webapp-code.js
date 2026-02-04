/**
 * Pega TODO este archivo en Google Apps Script (Extensiones → Apps Script en tu hoja "Agenda").
 * El script recibe los datos del formulario "Agendar llamada" y los escribe en la hoja.
 */
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
