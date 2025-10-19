import React from "react";

const ContanctSection = () => {
  return (
    <section id="contact" className="section contact">
      <div className="section-heading">
        <h2>Contact</h2>
        <div className="divider" />
      </div>
      <div className="contact-content">
        <p>
          Currently open to work and collaborations — always ready for new
          challenges. Contact me at{" "}
          <a href="mailto:eilleenyeoh03@gmail.com" className="contact-link">
            eilleenyeoh03@gmail.com
          </a>{" "}
          or connect on my{" "}
          <a
            href="https://www.linkedin.com/in/eilleen-eilleen/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
          .
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Let's create something extraordinary."
            />
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContanctSection;
