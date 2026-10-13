import "./TechCarousel.css";
import { technologies } from "./../../lib/config";

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