import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import Navbar from "./../../components/UI/Navbar";
import Footer from "./../../components/UI/Footer";
import { socialMediaLinks } from "./../../lib/config";
import "./Contact.css";

const channels = [
  {
    key: "linkedin",
    label: "LinkedIn",
    detail: "Professional contact",
    href: socialMediaLinks.linkedin,
    Icon: FaLinkedin,
  },
  {
    key: "github",
    label: "GitHub",
    detail: "Code and projects",
    href: socialMediaLinks.github,
    Icon: FaGithub,
  },
  {
    key: "instagram",
    label: "Instagram",
    detail: "Robotics and daily life",
    href: socialMediaLinks.instagram,
    Icon: FaInstagram,
  },
];

// Email opens the mail app; everything else opens a new tab
const isExternal = (key) => key !== "email";

function Contact() {
  const { email, whatsapp } = socialMediaLinks;
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // wa.me wants digits only, with country code and no "+"
  const whatsappNumber = whatsapp ? whatsapp.replace(/\D/g, "") : "";

  // No backend (GitHub Pages), so the form opens WhatsApp with the message ready to send
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!whatsappNumber) return;
    const text = encodeURIComponent(`Hi, I'm ${name}.\n\n${message}`);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const allChannels = [
    ...(email
      ? [
          {
            key: "email",
            label: "Email",
            detail: email,
            href: `mailto:${email}`,
            Icon: FaEnvelope,
          },
        ]
      : []),
    ...(whatsapp
      ? [
          {
            key: "whatsapp",
            label: "WhatsApp",
            detail: whatsapp,
            href: `https://wa.me/${whatsappNumber}`,
            Icon: FaWhatsapp,
          },
        ]
      : []),
    ...channels,
  ];

  return (
    <>
      <Navbar />

      <main id="contact">
        <div className="contact-intro">
          <h1>Contact</h1>
          <p>
            Have a project, an software question, or an opportunity to
            share? Reach out through any of the channels below and I'll get back
            to you.
          </p>
        </div>

        <div className="contact-content">
          <ul className="contact-channels">
            {allChannels.map(({ key, label, detail, href, Icon }) => (
              <li key={key}>
                <a
                  href={href}
                  className="contact-card"
                  target={isExternal(key) ? "_blank" : undefined}
                  rel={isExternal(key) ? "noopener noreferrer" : undefined}
                >
                  <span className="contact-card-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="contact-card-text">
                    <strong>{label}</strong>
                    <span>{detail}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                required
              />

              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

              <button type="submit" disabled={!whatsappNumber}>
                Send on WhatsApp
              </button>
            </form>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Contact;