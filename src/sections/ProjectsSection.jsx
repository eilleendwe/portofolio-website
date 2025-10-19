import React from "react";
import projectImage1 from "../assets/regina-salon.png";
import projectImage2 from "../assets/ollies.png";
import projectImage3 from "../assets/clothify.png";

const ProjectsSection = () => {
  const projects = [
    {
      id: "project-01",
      title: "Regina Salon",
      description:
        "Web-based salon booking platform with real-time scheduling, role-based access, and an intuitive CRM dashboard for a seamless booking experience.",
      image: projectImage1,
      href: "https://github.com/raymondeuginio/Regina-Salon",
    },
    {
      id: "project-02",
      title: "TapEats",
      description:
        "QR-based digital ordering system for a Ollie's Café, enabling customers to place self-service orders by scanning table QR codes with their phones, while admins manage menus, transactions, and sales analytics through a role-based dashboard.",
      image: projectImage2,
      href: "https://github.com/Kelompok8-SoftwareDevelopment/Ollies",
    },
    {
      id: "project-03",
      title: "Clothify",
      description:
        "Flutter-based mobile marketplace app featuring a curated product catalog, user authentication, and secure checkout, complemented by a clean and branded UI for a smooth shopping experience.",
      image: projectImage3,
      href: "https://github.com/Kelompok-2-Mobile-Programming-TI-B-23/Marketplace",
    },
  ];
  return (
    <section id="projects" className="section projects">
      <div className="section-heading">
        <h2>Projects</h2>
        <div className="divider" />
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="project-image"
            />
            <p>{project.description}</p>
            <a href={project.href} target="_blank" className="project-link">
              Discover More →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
