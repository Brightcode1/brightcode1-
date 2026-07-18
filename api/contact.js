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

  const { name, email, phone, company, message } = req.body;

  if (!name || !email || !phone || !message) {
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
      subject: `✨ New Inquiry: ${name} wants to connect!`,
      html: `
        <div style="font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 0; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); border: 1px solid #f0f0f0;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">New Project Inquiry</h1>
            <p style="color: #e0e7ff; font-size: 16px; margin: 10px 0 0 0; font-weight: 400;">Someone is interested in BrightCode services.</p>
          </div>
          
          <!-- Content Body -->
          <div style="padding: 40px 30px; background-color: #ffffff;">
            
            <h2 style="color: #1e293b; font-size: 18px; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Client Details</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 35px;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f8fafc; width: 35%; color: #64748b; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f8fafc; color: #0f172a; font-weight: 600; font-size: 16px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f8fafc; color: #64748b; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f8fafc;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 500; font-size: 16px;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f8fafc; color: #64748b; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Contact Number</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f8fafc; color: #0f172a; font-weight: 500; font-size: 16px;">
                  <a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #64748b; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Company</td>
                <td style="padding: 12px 0; color: #0f172a; font-weight: 500; font-size: 16px;">${company || '<span style="color: #cbd5e1; font-style: italic;">Not provided</span>'}</td>
              </tr>
            </table>

            <h2 style="color: #1e293b; font-size: 18px; margin-top: 0; margin-bottom: 15px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Message / Project Details</h2>
            <div style="background-color: #f8fafc; padding: 25px; border-radius: 12px; border-left: 4px solid #3b82f6;">
              <p style="color: #334155; line-height: 1.8; margin: 0; white-space: pre-wrap; font-size: 15px;">${message}</p>
            </div>
            
            <!-- Call to Action -->
            <div style="margin-top: 40px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);">Reply to ${name.split(' ')[0]}</a>
            </div>
            
          </div>

          <!-- Footer -->
          <div style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">
              This inquiry was submitted from the BrightCode website contact form.
            </p>
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
