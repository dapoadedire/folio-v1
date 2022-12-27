import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_z6s5h4f", "template_cgb56wq", form.current, "Mq5w6naUb3HofLTYE")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} id="contact">
      <label htmlFor='name'>Name</label>
      <input type="text" name="user_name" 
      placeholder="John Doe"
      />
      <label htmlFor='email'>Email:</label>
      <input id="email"
        type="email"
        placeholder="johndoe@worldwideweb.com" name="user_email" />
      <label htmlFor='messsage'>Message:</label>
      <textarea 
        id="message"
        name="message"
        placeholder="Hello, I would like to hire you for a project." />
      <button type="submit">
        Send 
      </button>
    </form>
  );
};




const ContactForm = () => {
  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <p>
        I am currently looking for a full-time position as a Frontend Developer.
        If you have a position available, please reach out to me.
      </p>
      <ContactUs />
    </div>
  );
};

export default ContactForm;

