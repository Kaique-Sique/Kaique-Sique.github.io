import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Projects from "./pages/projects/Projects.jsx";
import Skils from "./pages/skils/Skils.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skils" element={<Skils />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
