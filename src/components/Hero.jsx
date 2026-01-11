import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-typing">
          React • ASP.NET Core MVC • Flutter <span className="cursor"></span>
        </span>
        
        <h1 className="hero-title">
          HI, I'M PARTH KHUNT.
        </h1>
        
        <h2 style={{ fontSize: '1.5rem', marginTop: '10px', textTransform: 'none', letterSpacing: 'normal' }}>
          I build modern web & app experiences.
        </h2>

        <p style={{ maxWidth: '500px', marginTop: '20px' }}>
          A developer who loves building clean UI, scalable logic, and learning by doing.
          Open to internships & junior developer roles.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn">View Work</a>
          <a href="#contact" className="btn-outline">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;