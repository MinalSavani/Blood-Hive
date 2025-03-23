const nodemailer = require("nodemailer");

const sendContactEmail = async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    console.log("📨 Sending email to:", email);
    console.log("Email User:", process.env.EMAIL_USER);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // ✅ Styled HTML email content
    const emailHtmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #fff3f3;
                text-align: center;
                padding: 20px;
            }
            .container {
                background-color: #ff4d4d;
                color: white;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
                color: #fff;
            }
            p {
                font-size: 16px;
                line-height: 1.5;
            }
            .footer {
                margin-top: 20px;
                font-size: 14px;
                color: #fff;
            }
            .btn {
                background-color: #fff;
                color: #ff4d4d;
                padding: 10px 20px;
                text-decoration: none;
                font-weight: bold;
                border-radius: 5px;
                display: inline-block;
                margin-top: 15px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Thank You for Reaching Out! ❤️</h1>
            <p>Dear <strong>${firstName} ${lastName}</strong>,</p>
            <p>We have received your message and will get back to you as soon as possible.</p>
            <p>Our team is here to help, and we appreciate you taking the time to connect with us.</p>

            <a href="https://www.bloodhive.com" class="btn">Visit Blood Hive</a>

            <p class="footer">Best Regards,<br>🩸 <strong>Blood Hive Team</strong> 🩸</p>
        </div>
    </body>
    </html>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Contacting Us! ❤️",
      html: emailHtmlContent, // ✅ Send HTML instead of plain text
    };

    console.log("Mail Options:", mailOptions);
    console.log("Attempting to send mail");

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully!", info);

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("🚨 Email error:", error);
    if (error.response) {
      console.error("error response:", error.response);
    }
    return res.status(500).json({
      error: "Email service not working.",
      details: error.message,
    });
  }
};

module.exports = { sendContactEmail };
