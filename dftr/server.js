const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // Public folder contains index.html, style.css, script.js, and video file
app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const { name, email } = req.body;

    // Konfigurasi Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Atau gunakan SMTP yang lain
        auth: {
            user: 'smptap8@gmail.com',
            pass: 'ghhlappcrwmpkfjr'
        }
    });

    const mailOptions = {
        from: 'smptap8@gmail.com',
        to: email,
        subject: 'Pendaftaran Giveaway Berhasil!',
        text: `Hai ${name},\n\nTerima kasih sudah mendaftar di giveaway kami. Semoga kamu menjadi pemenang!\n\nBest regards,\nTim Giveaway`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
