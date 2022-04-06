//npm install express cors nodemailer
//https://w3collective.com/react-contact-form/

import '../../App.css';
import React, { useState } from "react";


const ContactForm = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
    };
    return (
      <form onSubmit={handleSubmit}>
        <div className="CnStyle">
        <div>
          <label htmlFor="name">Imię:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Adres e-mail:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Wiadomość:</label>
          <textarea id="message" required />
        </div>
        <button type="submit" id="send">{status}</button>
        </div>
      </form>
    );
  };
  export default ContactForm;