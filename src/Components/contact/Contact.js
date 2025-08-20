import React, { useState } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState("Send");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_email: formData.email, // Send to the email entered in second field
      from_name: formData.fullName,
      message: formData.message,
    };
    setMessage("Sending...");
    emailjs
      .send(
        "service_cv1zieb",
        "template_tyhtc48",
        templateParams,
        "kCGQJJjPxSVavEl6c"
      )
      .then(() => {
        setMessage("sent successfully!");
        setTimeout(() => setMessage("Send"), 3000);
        setFormData({
          fullName: "",
          email: "",
          message: "",
        })
      })
      .catch((error) => {
        setMessage("Sending Failed");
        setTimeout(() => setMessage("Send"), 3000);
        console.log(error)
      });
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Omaryasir5712@gmail.com</h5>
            <a href="mailto:Omaryasir5712@gmail.com" target="_blank">
              Send Messege
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Omer Yasir Dafalla</h5>
            <a href="https://m.me/omar.yasir.dfaalla" target="_blank">
              Send a Messege
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+249118988953</h5>
            <a href="https://api.whatsapp.com/send?phone=249118988953">
              Send a Message
            </a>
          </article>
        </div>
        <form
          action=""
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your Full name"
            required
          />
          <input
            type="email"
            onChange={handleChange}
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
          />
          <textarea
            onChange={handleChange}
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            value={formData.message}
          ></textarea>
          <button type="submit" className="btn btn-praimry">
            {message}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
