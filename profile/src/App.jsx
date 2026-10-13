import {HashRouter, Route, Routes, Link} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Projects from "./pages/projects/Projects.jsx";
import Skills from "./pages/skills/Skills.jsx";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
