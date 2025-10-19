import React from "react";

const SkillsSection = () => {
  const skills = [
    "Python",
    "React",
    "Laravel/PHP",
    "Flutter/Dart",
    "HTML/CSS",
    "JavaScript",
    "SQL",
    "Git",
    "Data Analysis",
    "Machine Learning",
  ];

  return (
    <section id="skills" className="section skills">
      <div className="section-heading">
        <h2>Skills</h2>
        <div className="divider" />
      </div>
      <div className="skill-tags">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
