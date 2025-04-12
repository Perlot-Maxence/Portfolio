import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, message, language } = req.body;

  try {
    const data = await resend.emails.send({
      from: process.env.SENDER_MAIL,
      to: process.env.RECEIVER_MAIL,
      subject: language === "fr" ? `Demande de contact  · ${email}` : `Contact request  · ${email}`,
      text: message,
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
