import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const DEFAULT_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

// Lowercase and strip trailing slashes ("/" stays "/")
const normalize = (s) => s.toLowerCase().replace(/\/+$/, "") || "/";

const readLocation = () =>
  typeof window === "undefined"
    ? ""
    : window.location.pathname + window.location.hash;

export function Navbar({
  links = DEFAULT_NAV_LINKS,
  logoText = "Kaique",
  logoHref = "/",
  activeHref,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);
  // Stored in state so every navigation event triggers a re-render
  const [location, setLocation] = useState(readLocation);

  // Keep location in sync with back/forward buttons and hash changes
  useEffect(() => {
    const update = () => {
      setSelectedLink(null);
      setLocation(readLocation());
    };

    window.addEventListener("popstate", update);
    window.addEventListener("hashchange", update);
    return () => {
      window.removeEventListener("popstate", update);
      window.removeEventListener("hashchange", update);
    };
  }, []);

  // Determines which link is active based on the current URL
  const getActiveFromUrl = () => {
    if (!location) return "";

    const [rawPath, rawHash = ""] = location.split("#");
    const path = normalize(rawPath);
    const hash = rawHash.toLowerCase().replace(/\/+$/, "");

    // 1. Hash match first (e.g. /#projects matches "/#projects")
    if (hash) {
      const hashMatch = links.find((l) => normalize(l.href) === `/#${hash}`);
      if (hashMatch) return hashMatch.href;
    }

    // 2. Exact path match (e.g. "/" or "/about")
    const directMatch = links.find((l) => normalize(l.href) === path);
    return directMatch ? directMatch.href : "";
  };

  // Active tab priority: user click > explicit prop > URL detection
  const activeTab = selectedLink ?? activeHref ?? getActiveFromUrl();

  const isLinkActive = (link) =>
    !!activeTab && normalize(activeTab) === normalize(link.href);

  const handleLinkClick = (link) => {
    setSelectedLink(link.href);
    setIsMenuOpen(false);
  };

  return (
    <header className="header-nav">
      <nav className="navbar">
        <a href={logoHref} className="nav-logo">
          {logoText}
        </a>

        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {links.map((link) => {
            const active = isLinkActive(link);
            return (
              <a
                key={link.label}
                href={link.href}
                className={active ? "active" : ""}
                onClick={() => handleLinkClick(link)}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "close menu" : "open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;