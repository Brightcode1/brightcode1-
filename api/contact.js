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
      subject: `New Inquiry from: ${name}`,
      html: `
        <h2>New Contact Form Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr>
        <h3>Message:</h3>
        <p>${message}</p>
        <hr>
        <p><small>Note: You can reply directly to this email to answer the customer.</small></p>
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
