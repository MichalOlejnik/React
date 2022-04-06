//Na potrzeby tego zadania został stworzony nowy adres email
//z którego wysyłane będą zapytania klientów
//e-mail działa, można to przetestować, poprzez wprowadzenie własnego adresu e-mail
//w 43 linijce poniższego kodu

//w razie problemów zapisać package.json i uruchomić ponownie
//do działania potrzeba uruchomić równocześnie, w dwóch oknach, npm start oraz node server.js


const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "OlejnikSmuszkiewicz@gmail.com",
      pass: "project-react22",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "olejnik1999@wp.pl",
      subject: "Kontakt ze strony CaRent",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });