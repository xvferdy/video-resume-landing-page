import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="title">
        <h3>Let's Talk</h3>
        <h2>We're here to help you!</h2>
      </div>
      <div className="container contact__container">
        <form>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="tel" name="phone" placeholder="Your Mobile Number" />
          <input
            type="text"
            name="profession"
            placeholder="Education / Profession"
          />
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            cols="30"
            rows="7"
            required
          />
          <button className="btn btn--primary">Let's Talk</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
