require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// Gérer les données du formulaire
app.use(express.urlencoded({ extended: true }));


// Transporteur Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail'
,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});
// Route pour afficher un message après l'envoi

app.post('/contact', (req, res) => {
    const { email, message, name } = req.body;

// verification des champs
    if(!email || !message || !name){
       
        return res.status(400).send('L\'email et le message sont obligatoires');
    }

    // validation et vérification de l'email

    const emailRegex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!emailRegex.test(email)){
         return res.status(400).send('L\'email n\'est pas valide')
    }

    const mailOptions = {
        from: 'manu23nde@gmail.com',  // addresse qui envoie le mail
        to: 'manu2004nde@gmail.com',  // addresse qui reçois le mail
        subject: 'Message depuis le formulaire de contact',
        text: `Message de ${email}: \n\n${message}`
    };

    // envoi de l'email  et gestion des erreur
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Erreur lors de l\'envoi du mail:', error);
            return res.status(500).send('une erreur est survenue lors de l\'envoi du message.');
        }
        console.log('Message envoyé :', info.response);
        res.sendFile(__dirname + '/public/merci.html');
    });

    console.log(`Email reçu: ${email}`);
    console.log(`Message reçu: ${message}`);
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port : ${PORT}`);
});