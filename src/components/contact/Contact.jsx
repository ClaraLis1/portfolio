import React, { useState } from 'react';
// import axios from "axios"
import './contact.modules.css'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  /*const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, subject, message };
    axios.post('https://api.sendinblue.com/v3/contacts', data)
      .then(() => {
        alert('Tu mensaje ha sido enviado.');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch(() => {
        alert('Hubo un error al enviar el mensaje. Intente nuevamente.');
      });
  };*/

  return (
    <div className='contactContainer'>    
      <h2 className='contactTitle'>Contact <span className='titleMe'>me</span> </h2>
      <form 
      
      // onSubmit={handleSubmit} 
      className='formContainer' 
      // action="https://formsubmit.co/lisleclara1@gmail.com" method="POST"
      name="contact"
      action="/contact?success=true"
      method="POST" 
      data-netlify="true"
      >
        <input type="hidden" name='form-name' value='contact' />
        <label className='contactInput'>
          Name:
          <input type="text" name='nombre' value={name} onChange={(e) => setName(e.target.value)}  required/>
        </label>
        <label className='contactInput'>
          Mail:
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  required/>
        </label>
        <label className='contactInput'>
          Subject:
          <input type="text" name="asunto" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </label>
        <label className='contactInput'>
          Message:
          <textarea value={message} type="text" name='mensaje' onChange={(e) => setMessage(e.target.value)} />
        </label>
        <button className='contactButton' type="submit">Send</button>
      </form>
    </div>
  );
};



export default Contact