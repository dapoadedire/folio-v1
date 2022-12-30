import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        "service_z6s5h4f",
        "template_cgb56wq",
        form.current,
        "Mq5w6naUb3HofLTYE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("success");
        },
        (error) => {
          console.log(error.text);
          setStatus("failure");
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} id="contact">
      <label htmlFor="name">Name:</label>
      <input type="text" name="user_name" placeholder="John Doe" />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        placeholder="example@gmail.com"
        name="user_email"
        required
      />
      <label htmlFor="messsage">Message:</label>
      <textarea
        id="message"
        name="message"
        placeholder="Hello, I would like to hire you for a project."
        required
      />
      <div className="message">
        {status === "success" && (
          <div className="success-message">
            Thank you for reaching out! I will get back to you as soon as
            possible.
          </div>
        )}
        {status === "failure" && (
          <div className="failure-message">
            There was an error sending the email. Please try again later.
          </div>
        )}
        {status === "loading" && (
          <div className="loading-indicator">Sending email...</div>
        )}
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

const ContactForm = () => {
  return (
    <section className="contact-form">
      <h2>Contact Me</h2>
      <p>
        I am seeking opportunities to contribute my skills and knowledge through
        an internship or collaboration on projects. I am open to full-time or
        part-time positions and am eager to learn and grow in my field. If you
        have an available internship or project that aligns with my interests
        and skills, I would love the opportunity to be considered. Please don&apost
        hesitate to reach out to me to discuss further
      </p>
      <ContactMe />
    </section>
  );
};

export default ContactForm;
