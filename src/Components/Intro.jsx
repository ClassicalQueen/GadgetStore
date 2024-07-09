import React from "react";
import "./Index.css";

function Intro() {
  return (
    <section className="Intro">
      <div className="Intro-text">
        <a href="#explore">
          <button className="cta">Explore Our Collection of Gadgets</button>
        </a>
        <h1>
          The Future of <span className="highlight">Technology Today</span>
        </h1>
        <p>
          Stay ahead with the latest in tech innovation. Whether you’re looking
          for cutting-edge smartphones, powerful accessories, or the newest
          gadgets, we have it all.
        </p>
        <button className="shop-now">
          <svg
            className="cart"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>{" "}
          Shop Now
        </button>
      </div>
      <div className="Intro-image">
        <img src="/src/assets/headphones.png" alt="Headphones" />
      </div>
    </section>
  );
}

export default Intro;