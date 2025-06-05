import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    fetch("https://formspree.io/f/xeokjaay", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json"
      }
    })
    .then((response) => {
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert("Oops! Something went wrong.");
      }
    })
    .catch(() => {
      alert("There was a problem submitting the form.");
    });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>Interested in working together or have a question? Feel free to reach out!</p>

      {isSubmitted ? (
        <p className="thank-you">✅ Thank you! I’ll get back to you soon.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Your Email:
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            Your Message:
            <textarea
              name="message"
              placeholder="Write your message here..."
              required
            ></textarea>
          </label>

          <button type="submit">Send</button>
        </form>
      )}
    </section>
  );
}

export default Contact;
