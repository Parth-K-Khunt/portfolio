import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="card" style={{ border: 'none', paddingLeft: 0 }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '20px', color: '#f2f2f2' }}>
          I’m a Computer Science student who enjoys turning ideas into real products.
        </p>
        <p style={{ marginBottom: '15px' }}>
          I focus on building web and app experiences that are clean, functional, and easy to use. 
          I currently work with <strong>React, ASP.NET Core MVC, and Flutter</strong>, and I’m always 
          experimenting with new tools through research and hands-on projects.
        </p>
        <p>
          I value teamwork, clear communication, and continuous learning. Outside of development, 
          I enjoy photography, music, and movies — they help me observe details, think creatively, 
          and stay inspired.
        </p>
      </div>
    </section>
  );
};

export default About;