const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
        user: 'lusan9958@gmail.com',
        pass: 'password'
    }
});


router.post('/submit-complaint', async (req, res) => {
    const { registrationNumber, complain, reason } = req.body;

    const mailOptions = {
        from: 'lusan9958@gmail.com',
        to: 'luminde9958@example.com',
        subject: 'New Complaint Submitted',
        text: `Registration Number: ${registrationNumber}\nComplain: ${complain}\nReason: ${reason}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Complaint submitted and email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

module.exports = router;
