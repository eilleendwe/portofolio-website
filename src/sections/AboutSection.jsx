import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="section about">
      <div className="section-heading">
        <h2>About me</h2>
        <div className="divider" />
      </div>
      <p className="section-lead">
        5th-semester Informatics Engineering student at Tarumanagara University
        with a strong interest in Software Engineering and Data Analysis.
        Quickly adapt to new environments, equipped with strong communication
        skills, and able to work effectively both independently and in a team.
        Passionate about learning emerging technologies and developing
        data-driven, impactful solutions that solve real-world problems.
      </p>
      <div className="about-grid">
        <div className="about-card">
          <h3>What I Do</h3>
          <p>
            I develop web and mobile applications with intuitive user
            experiences and reliable architecture. Experienced with Laravel,
            React and Flutter, I build clean, functional, and user-focused
            solutions.
          </p>
        </div>
        <div className="about-card">
          <h3>How I Work</h3>
          <p>
            I value clarity, collaboration, and continuous learning. Approaching
            every project with problem understanding, scalable planning, and
            clean coding — aiming to deliver impactful and maintainable results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
