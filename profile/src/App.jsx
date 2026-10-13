import profileImg from "./assets/profileImg.jpg";
import aboutImg from "./assets/aboutImg.jpeg";
import AstroRegional from "./assets/projects/AstroRegional.jpeg";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import { socialMediaLinks } from "./lib/config";
import "./App.css";
import Highlights from "./components/highlights/Highlights";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TechCarousel from "./components/technologies/TechCarousel";

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

      <TechCarousel />

      <section id="about">
        <div className="aboutImg">
          <img src={aboutImg} alt="Kaique Siqueira" />
        </div>

        <div className="descriptionImg">
          <h2>
            <b>About Me</b>
          </h2>

          <p>
            Full-stack developer who builds scalable web applications, designs
            data layers and APIs, and develops software for FRC robots. My work
            combines modern web technologies with real-time robotics systems
            used during competitions.
          </p>

          <p>
            I am currently studying a high school program specializing in
            Electrical and Electronics Engineering at SENAI-SP and am a member
            of the FRC Megazord 7563 team, contributing to software development
            for competition robots. Through robotics competitions, I have gained
            experience developing solutions for high-performance systems and had
            the opportunity to compete at the FIRST Championship in Houston.
          </p>

          <p>
            I am passionate about software development, backend engineering,
            full-stack technologies, and robotics, as well as creating solutions
            that integrate hardware and software to solve real-world problems.
          </p>
        </div>
      </section>
      <Highlights />
      <Footer />
    </>
  );
}

export default App;
