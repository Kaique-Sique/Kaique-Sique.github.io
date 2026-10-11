import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <p>&copy; All rights reserved to Kaique Siqueira</p>

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

      </footer>
    </>
  );
}

export default Footer;
