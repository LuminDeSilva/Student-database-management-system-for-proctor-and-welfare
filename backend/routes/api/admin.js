const express=require("express")
const router=express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const Admin=require('../../models/Admin');

router.get('/test',(req,res)=>res.send('Admin route is testing'));

const { secretKey, adminEmail } = require("../../config/keys");

router.get("/", (req, res) => {
    Admin.find()
        .then(admins => res.json(admins))
        .catch(err => res.status(404).json({ noAdminsFound: "No admins found" }));
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log("Admin login request:", email);
    console.log("Admin login request:", password);

    Admin.findOne({ email })
    .then(admin => {
        if (!admin) {
            console.log("Admin not found");
            return res.status(404).json({ error: "Admin not found" });
        }

        if (admin.password !== password) {
            console.log("Password incorrect");
            return res.status(400).json({ error: "Password incorrect" });
        } else {
            console.log("Admin logged in successfully");
            console.log("Admin password:", admin.password);
            console.log("Admin password:", password);
            console.log("Password matches");
            res.status(200).json({ success: true });
        }
    })
    .catch(err => {
        console.error('Error finding admin:', err);
        return res.status(500).json({ error: "Internal server error" });
    });

    
});
  

router.post("/submitcomplaint", async (req, res) => {
    const { registrationNumber, complain, reason } = req.body;
  
    try {
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'luminde9958@gmail.com',
          pass: 'password' 
        }
      });
  
      const mailOptions = {
        from: 'luminde9958@gmail.com',
        to: adminEmail, 
        subject: `New Complaint Submitted by ${registrationNumber}`,
        text: `Registration Number: ${registrationNumber}\nComplaint: ${complain}\nReason: ${reason}`
      };
  
      await transporter.sendMail(mailOptions);
  
      res.status(200).json({ message: 'Complaint submitted successfully' });
    } catch (error) {
      console.error('Error submitting complaint:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;