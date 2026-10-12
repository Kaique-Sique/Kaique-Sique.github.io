import "./TechCarousel.css";

const technologies = [
  { name: "HTML5", icon: "html5", color: "E34F26" },
  { name: "CSS3", icon: "css3", color: "1572B6" },
  { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
  { name: "React", icon: "react", color: "61DAFB" },
  { name: "Node.js", icon: "nodedotjs", color: "339933" },
  { name: "Git", icon: "git", color: "F05032" },
  { name: "GitHub", icon: "github", color: "8B949E" },
];

function TechCarousel() {
  return (
    <section className="tech-section">
      <h2>Technologies</h2>

      <div className="carousel">
        <div className="carousel-track">
          {/* The list is rendered twice for the infinite loop effect.
              The second copy is hidden from screen readers. */}
          {[0, 1].map((copy) =>
            technologies.map((tech) => (
              <div
                className="tech"
                key={`${copy}-${tech.name}`}
                aria-hidden={copy === 1 ? "true" : undefined}
              >
                <img
                  src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`}
                  alt={copy === 1 ? "" : tech.name}
                />
                <span>{tech.name}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default TechCarousel;