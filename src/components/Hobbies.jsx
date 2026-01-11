import React from 'react';

const Hobbies = () => {
  return (
    <section id="hobbies" style={{ paddingBottom: '0' }}>
      <h2>Interests</h2>
      <div className="skills-grid" style={{ borderTop: 'none' }}>
        <div className="skill-card" style={{ borderBottom: 'none' }}>
          <h3>Photography</h3>
          <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>Observing details & composition.</p>
        </div>
        <div className="skill-card" style={{ borderBottom: 'none' }}>
          <h3> Music</h3>
          <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>Creative rhythm & flow.</p>
        </div>
        <div className="skill-card" style={{ borderBottom: 'none' }}>
          <h3> Movies</h3>
          <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>Storytelling & visual inspiration.</p>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;