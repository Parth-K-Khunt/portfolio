import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills & Arsenal</h2>
      <div className="skills-grid">
        
        {/* Technologies Column */}
        <div className="skill-card">
          <h3>Technologies</h3>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>ASP.NET Core MVC</li>
            <li>Flutter (APK Build)</li>
            <li>SQL Database</li>
          </ul>
        </div>

        {/* Tools Column */}
        <div className="skill-card">
          <h3>Tools</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Android Studio</li>
            <li>Visual Studio 2022</li>
          </ul>
        </div>

        {/* Soft Skills Column */}
        <div className="skill-card">
          <h3>Soft Skills</h3>
          <ul>
            <li>Team Collaboration</li>
            <li>Leadership</li>
            <li>Research & Development</li>
            <li>Problem Solving</li>
            <li>Clear Communication</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;