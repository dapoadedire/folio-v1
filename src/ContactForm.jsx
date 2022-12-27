import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xrgvzjwd");
  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }
  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <p>
        I am currently looking for a full-time position as a Frontend Developer.
        If you have a position available, please reach out to me.
      </p>
      <form onSubmit={handleSubmit} id="contact">
        <label htmlFor="name">First Name:</label>
        <input
          id="first-name"
          type="first-name"
          name="first-name"
          placeholder="John"
        />
        <ValidationError
          prefix="first-name"
          field="first-name"
          errors={state.errors}
        />
        <label htmlFor="email">Email Address:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="johndoe@worldwideweb.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Hello, I would like to hire you for a project."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <br />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
