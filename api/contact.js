import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS setup
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Replace '*' with your actual domain in production
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please fill all required fields.' });
  }

  try {
    // 1. Configure the SMTP server (Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'digitalbrightcode@gmail.com', // Your Gmail address
        pass: 'kzrg xxuc pbra jvfx'          // Your App Password
      }
    });

    // 2. Set up email data
    const mailOptions = {
      from: 'digitalbrightcode@gmail.com', // Sender address (must be your authenticated email)
      to: 'digitalbrightcode@gmail.com',   // List of receivers (you receive the inquiry)
      replyTo: email,                      // The user's email so you can reply directly
      subject: `New Contact Inquiry from: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; line-height: 1.6; background-color: #ffffff;">
          <div style="border-bottom: 1px solid #eee; padding-bottom: 15px; margin-bottom: 20px;">
            <h2 style="margin: 0; color: #222; font-size: 20px;">New Contact Form Submission</h2>
            <p style="margin: 5px 0 0; color: #666; font-size: 14px;">You have received a new inquiry from the BrightCode website.</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; width: 120px; color: #666; font-weight: bold;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; color: #222;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; color: #666; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5;">
                <a href="mailto:${email}" style="color: #0056b3; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; color: #666; font-weight: bold;">Company:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; color: #222;">${phone || 'Not provided'}</td>
            </tr>
          </table>

          <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px; color: #222; font-size: 16px;">Message Details:</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 3px solid #ddd; color: #444; white-space: pre-wrap; font-size: 14px;">${message}</div>
          </div>

          <div style="border-top: 1px solid #eee; padding-top: 15px; margin-top: 30px; font-size: 12px; color: #999;">
            <p style="margin: 0;">This email was sent automatically from your website's contact form. Simply reply to this email to respond to the sender.</p>
          </div>
        </div>
      `
    };

    // 3. Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ status: 'success', message: 'Inquiry sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ status: 'error', message: 'Failed to send inquiry.' });
  }
}
