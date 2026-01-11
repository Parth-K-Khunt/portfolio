import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "iLovePDF Clone",
      category: "Web App",
      desc: "A web-based PDF utility platform inspired by iLovePDF. Built to explore file handling, document processing, and scalable backend architecture.",
      tech: "ASP.NET Core MVC · HTML · CSS · JS · Bootstrap "
    },
    {
      title: "Employee Management System",
      category: "Enterprise",
      desc: "A role-based employee management system for handling employee records, authentication, and CRUD operations in an organized workflow.",
      tech: "ASP.NET Core MVC · SQL · Bootstrap"
    },
    {
      title: "Flutter APK Builder",
      category: "Mobile App",
      desc: "Built and deployed Android APKs using Flutter with offline-first support, focusing on build optimization and real-device testing.",
      tech: "Flutter · Dart · Android"
    }
  ];

  return (
    <section id="projects">
      <h2>Selected Work</h2>
      
      {/* The Grid Container - Border collapsed style */}
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <span className="project-tag">{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="project-tech">{project.tech}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;