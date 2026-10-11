import profileImg from "./assets/profileImg.jpg";
import Navbar from "./components/UI/Navbar";
import "./App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <>
      <Navbar />

      <section id="profile">
        <div className="profileImg">
          <img src={profileImg} alt="Kaique Siqueira" />
        </div>

        <div className="profileDetails">
          {/* Basic info */}
          <div className="profileinfo">
            <p>
              <b>Hello, I'm</b>
            </p>

            <h1>
              <span className="highlight">Kaique Siqueira</span>
            </h1>

            <h2>
              <b>Full-Stack Developer</b>
            </h2>
          </div>

          {/* Social media links */}
          <div className="profilesocial">
            <a
              href="https://github.com/Kaique-Sique"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kaique Siqueira's GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/kaique-siqueira-99b0b7391/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kaique Siqueira's LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;