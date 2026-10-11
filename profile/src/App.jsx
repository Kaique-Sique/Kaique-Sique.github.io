import profileImg from "./assets/profileImg.jpg";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import { socialMediaLinks } from "./lib/config";  
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
          </div>
        </div>
      </section>
  
      <Footer />
    </>
  );
}

export default App;