import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const DEFAULT_NAV_LINKS = [
  { label: "About", href: "/" },
  { label: "Projects", href: "/projects/" },
  { label: "Skills", href: "/skills/" },
  { label: "Contact", href: "/contact/" },
];

export function Navbar({
  links = DEFAULT_NAV_LINKS,
  logoText = "Kaique",
  logoHref = "/",
  activeHref,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  // Determines which link is active based on current browser URL
  const getActiveFromUrl = () => {
    if (typeof window === "undefined") return "";

    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    const cleanPath = path.replace(/\/+$/, "") || "/";

    // 1. Direct path match (e.g., /about/ matches /about/)
    const directMatch = links.find((link) => {
      const linkHref = link.href.toLowerCase().replace(/\/+$/, "") || "/";
      return cleanPath === linkHref;
    });
    if (directMatch) return directMatch.href;

    // 2. Specific folder in path (only when not on root "/")
    if (cleanPath !== "/") {
      const folderMatch = links.find((link) => {
        const folder = link.href.toLowerCase().replace(/^\/|\/$/g, "");
        return folder && cleanPath.split("/").includes(folder);
      });
      if (folderMatch) return folderMatch.href;
    }

    // 3. Hash match (e.g., #projects, #skills)
    if (hash && hash !== "#" && hash !== "#/") {
      const cleanHash = hash.replace(/^#\/?/, "");
      const hashMatch = links.find((link) => {
        const label = link.label.toLowerCase();
        const folder = link.href.toLowerCase().replace(/^\/|\/$/g, "");
        return cleanHash === label || (folder && cleanHash === folder);
      });
      if (hashMatch) return hashMatch.href;
    }

    // If none matches or if path is just "/" with no matching link: do not underline any link
    return "";
  };

  // Derive active tab: user click > explicit prop > URL detection
  const activeTab = selectedLink ?? activeHref ?? getActiveFromUrl();

  // Reset selected link when navigating via browser back/forward buttons
  useEffect(() => {
    const handleLocationChange = () => {
      setSelectedLink(null);
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  // When a link is clicked, update active tab immediately
  const handleLinkClick = (link) => {
    setSelectedLink(link.href);
    setIsMenuOpen(false);
  };

  const isLinkActive = (link) => {
    if (!activeTab) return false;
    const current = activeTab.toLowerCase().replace(/\/+$/, "") || "/";
    const target = link.href.toLowerCase().replace(/\/+$/, "") || "/";
    const label = link.label.toLowerCase();

    return current === target || current === label;
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
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
