const { sendEmail } = require("../utils/sendEmail");
const Donor = require("../models/donorModel");

const registerDonor = async (req, res) => {
    try {
        const { name, email, phone, bloodType, address, age, weight, role } = req.body;

        if (age < 18 || weight < 50) {
            return res.status(400).json({ error: "You are not eligible to donate blood." });
        }

        const newDonor = new Donor({ name, email, phone, bloodType, address, age, weight, role });
        await newDonor.save();

        
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
                <h1>Welcome to Blood Hive! ❤️</h1>
                <p>Dear <strong>${name}</strong>,</p>
                <p>Thank you for registering as a blood donor! Your generosity can **save lives** and make a real difference. </p>
                <p>We will reach out to you whenever there’s an urgent need for blood matching your type. Together, we can create a healthier and safer community.</p>
                
                <a href="https://www.bloodhive.com" class="btn">Visit Blood Hive</a>

                <p class="footer">Best Regards,<br>🩸 <strong>Blood Hive Team</strong> 🩸</p>
            </div>
        </body>
        </html>
        `;

     
        await sendEmail(email, "Welcome to Blood Hive ❤️", emailHtmlContent);

        res.status(201).json({ message: "Registration successful. Check your email!" });
    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { registerDonor };
