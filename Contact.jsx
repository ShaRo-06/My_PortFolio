import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
      
      setStatus("Message sent successfully");
      form.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message");
    }

    setLoading(false);
  };

  return (
    <section className="contact-bg" id="contact">
      <div className="contact-container">
        <h1 className="contact-heading">Contact Me</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input type="hidden" name="time" value={new Date().toLocaleString()} />
          <div className="contact-input">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="contact-input-items"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Enter Email"
              className="contact-input-items"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Write Something"
              className="contact-text-area"
              required
            />
          </div>
          <button className="contact-btn" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status && <p style={{ marginTop: "15px", fontWeight: "500" }}>{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;