import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { socialMediaLinks } from "../../lib/config";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {year} Kaique Siqueira. All rights reserved.</p>

      <div className="footer-social">
        <a
          href={socialMediaLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kaique Siqueira's GitHub"
        >
          <FaGithub />
        </a>

        <a
          href={socialMediaLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kaique Siqueira's LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href={socialMediaLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kaique Siqueira's Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
