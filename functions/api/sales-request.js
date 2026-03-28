export async function onRequestPost(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const body = await context.request.json();
    const { nombre, email, telefono, empresa, mensaje, origen } = body;

    if (!nombre || !email || !mensaje) {
      return new Response(
        JSON.stringify({ success: false, error: 'Faltan campos obligatorios: nombre, email y mensaje.' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Email no válido.' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    const RESEND_API_KEY = context.env.RESEND_API_KEY;
    const RESEND_FROM = context.env.RESEND_FROM || 'SmartStay <noreply@smartstaycloud.com>';

    const fecha = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' });

    // Send notification to sales team
    const salesEmailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: ['sales@smartstaycloud.com'],
        reply_to: email,
        subject: `🆕 Nueva solicitud comercial — ${origen || 'Web SmartStay'}`,
        html: buildSalesNotificationEmail({ nombre, email, telefono, empresa, mensaje, origen, fecha }),
      }),
    });

    if (!salesEmailRes.ok) {
      const errText = await salesEmailRes.text();
      console.error('Resend error:', errText);
      return new Response(
        JSON.stringify({ success: false, error: 'Error al enviar el email.' }),
        { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Solicitud enviada correctamente.' }),
      { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  } catch (err) {
    console.error('Sales request error:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'Error interno del servidor.' }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

function buildSalesNotificationEmail({ nombre, email, telefono, empresa, mensaje, origen, fecha }) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#2563eb,#4f46e5);padding:32px 40px;">
            <h1 style="margin:0;color:#ffffff;font-size:22px;">🆕 Nueva Solicitud Comercial</h1>
            <p style="margin:8px 0 0;color:#bfdbfe;font-size:14px;">${fecha}</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">
                  <strong style="color:#6b7280;font-size:13px;text-transform:uppercase;">Origen</strong><br>
                  <span style="color:#1f2937;font-size:15px;">${escapeHtml(origen || 'Web SmartStay')}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">
                  <strong style="color:#6b7280;font-size:13px;text-transform:uppercase;">Nombre</strong><br>
                  <span style="color:#1f2937;font-size:15px;">${escapeHtml(nombre)}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">
                  <strong style="color:#6b7280;font-size:13px;text-transform:uppercase;">Email</strong><br>
                  <a href="mailto:${escapeHtml(email)}" style="color:#2563eb;font-size:15px;text-decoration:none;">${escapeHtml(email)}</a>
                </td>
              </tr>
              ${telefono ? `<tr>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">
                  <strong style="color:#6b7280;font-size:13px;text-transform:uppercase;">Teléfono</strong><br>
                  <span style="color:#1f2937;font-size:15px;">${escapeHtml(telefono)}</span>
                </td>
              </tr>` : ''}
              ${empresa ? `<tr>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">
                  <strong style="color:#6b7280;font-size:13px;text-transform:uppercase;">Empresa</strong><br>
                  <span style="color:#1f2937;font-size:15px;">${escapeHtml(empresa)}</span>
                </td>
              </tr>` : ''}
              <tr>
                <td style="padding:12px 0;">
                  <strong style="color:#6b7280;font-size:13px;text-transform:uppercase;">Mensaje</strong><br>
                  <div style="color:#1f2937;font-size:15px;margin-top:8px;padding:16px;background:#f9fafb;border-radius:8px;border:1px solid #e5e7eb;line-height:1.6;">
                    ${escapeHtml(mensaje).replace(/\n/g, '<br>')}
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:24px 40px;background:#f9fafb;border-top:1px solid #e5e7eb;">
            <p style="margin:0;color:#9ca3af;font-size:13px;text-align:center;">
              SmartStay Cloud — Solicitud comercial desde web.smartstaycloud.com
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
