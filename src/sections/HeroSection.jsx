import React from "react";
import image from "../assets/hero-photo.png";

const HeroSection = () => {
  return (
    <section id="home" className="section hero">
      <div className="hero-content">
        <p className="intro">Hi, I&apos;m</p>

        <code>
          <span className="typing">
            <h1 className="hero-title">Eilleen</h1>
          </span>
        </code>
        <div className="hero-tagline">
          <p>Just a curious developer building things that matter.</p>
          <p>Design. Code. Innovate.</p>
        </div>
        <div className="hero-actions">
          <a className="primary-cta" href="#projects">
            Explore Projects
          </a>
          <a className="secondary-cta" href="#contact">
            Let&apos;s Connect
          </a>
        </div>
      </div>
      <div className="hero-portrait">
        <div className="glow" aria-hidden="true" />
        <img src={image} alt="Eilleen" className="hero-photo" loading="lazy" />
        <div className="coder-code" aria-hidden="true">
          <code>
            <span className="typing">console.log('Hello World');</span>
            <span className="cursor">▌</span>
          </code>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
