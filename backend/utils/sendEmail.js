const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (to, subject, htmlContent) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER, 
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"Blood Hive" <${process.env.SMTP_USER}>`,
            to: to,
            subject: subject,
            html: htmlContent,  // ✅ Sending HTML email
        };

        await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully!");
    } catch (error) {
        console.error("❌ Email sending failed:", error);
    }
};

module.exports = { sendEmail };
