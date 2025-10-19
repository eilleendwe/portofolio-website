import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      id: "project-01",
      title: "Regina Salon",
      description:
        "Web-based salon booking platform with real-time scheduling, role-based access, and an intuitive CRM dashboard for a seamless booking experience.",
      href: "https://github.com/raymondeuginio/Regina-Salon",
    },
    {
      id: "project-02",
      title: "TapEats",
      description:
        "QR-based digital ordering system for a Café, enabling customers to place self-service orders by scanning table QR codes, while admins manage menus, transactions, and sales analytics through a role-based dashboard.",
      href: "https://github.com/Kelompok8-SoftwareDevelopment/Ollies",
    },
    {
      id: "project-03",
      title: "Clohithfy",
      description:
        "Flutter-based mobile marketplace app featuring a curated product catalog, user authentication, and secure checkout, complemented by a clean and branded UI for a smooth shopping experience.",
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
