import { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { highlights } from "../../lib/config.ts";
import "./Highlights.css";

const AUTOPLAY_MS = 7000;

function Highlights() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = highlights.length;

  const next = useCallback(() => setCurrent((i) => (i + 1) % total), [total]);
  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + total) % total),
    [total]
  );

  useEffect(() => {
    if (paused || total < 2) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, next, total]);

  return (
    <section id="highlights">
      <h2 className="highlights-title">Highlights</h2>

      <div
        className="highlights-carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        aria-roledescription="carousel"
        aria-label="highlights"
      >
        <div className="highlights-viewport">
          <div
            className="highlights-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {highlights.map((item, index) => (
              <article
                key={item.id}
                className="highlights-slide"
                aria-hidden={index !== current}
                aria-roledescription="slide"
                aria-label={`${index + 1} de ${total}`}
              >
                <div className="highlights-card">
                  <div className="highlights-img">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="highlights-description">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <div className="highlights-buttons">
                      <a
                        href={item.projectLink}
                        className="highlights-btn highlights-btn--primary"
                        tabIndex={index === current ? 0 : -1}
                      >
                        Read More
                      </a>
                      <a
                        href={item.projectsLink}
                        className="highlights-btn highlights-btn--secondary"
                        tabIndex={index === current ? 0 : -1}
                      >
                        See All Projects
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {total > 1 && (
          <>
            <button
              className="highlights-arrow highlights-arrow--prev"
              onClick={prev}
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>
            <button
              className="highlights-arrow highlights-arrow--next"
              onClick={next}
              aria-label="Next"
            >
              <FaChevronRight />
            </button>

            <div className="highlights-dots">
              {highlights.map((item, index) => (
                <button
                  key={item.id}
                  className={`highlights-dot ${index === current ? "active" : ""}`}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to next slide ${index + 1}`}
                  aria-current={index === current}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Highlights;