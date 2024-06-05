'use client'
import { Resend } from 'resend';

const resend = new Resend(re_jbJpyTdb_Gfms6jcftD9wGEoxEFJWayx2);

export async function sendEmail({ name, company, email, textArea }) {
  const emailContent = `
    <div>
      <h1>Nuevo mensaje de ${name}</h1>
      <p>Empresa: ${company}</p>
      <p>Email: ${email}</p>
      <p>Mensaje: ${textArea}</p>
    </div>
  `;

  return await resend.emails.send({
    from: 'CNDLA <aspolchi@gmail.com>',
    to: ['aspolchi@gmail.com'],
    subject: 'Nuevo mail para cndla',
    html: emailContent,
  });
}
