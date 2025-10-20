import React from "react";
import image from "../assets/eilleen-potrait.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="section hero">
      <div className="hero-content">
        <p className="intro">Hi, I&apos;m</p>
        <h1 className="hero-title">Eilleen</h1>
        <div className="hero-tagline">
          <p>Design. Code. Innovate.</p>
          <p>Just a curious developer building things that matter.</p>
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
        <img src={image} alt="Eilleen" loading="lazy" />
      </div>
    </section>
  );
};

export default HeroSection;
