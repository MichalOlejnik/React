
import React from 'react';
import '../../App.css';

import ContactForm from './ContactForm';


export default function Contact() {
    
  return (
    
    <div className='contact'>
        <h3>W razie jakichkolwiek pytań prosimy o kontakotowanie się z nami, 
            za pośrednictwem poniższego formularza</h3>
            <ContactForm/>
        <h3>Lub telefonicznie, na numer +48 111 111 111</h3>
    </div>);
}
