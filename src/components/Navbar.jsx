// import React from 'react';

// const Navbar = () => {
//   const navStyle = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100%',
//     padding: '25px 8%',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     zIndex: 100,
//     background: 'rgba(5, 5, 5, 0.85)', 
//     backdropFilter: 'blur(8px)',
//     borderBottom: '1px solid rgba(255,255,255,0.05)'
//   };

//   const linkStyle = {
//     marginLeft: '30px',
//     color: '#888',
//     textDecoration: 'none',
//     fontSize: '0.9rem',
//     fontWeight: '500',
//     transition: 'color 0.3s'
//   };

//   return (
//     <nav style={navStyle}>
//       <div style={{ fontWeight: '600', fontSize: '1.2rem', color: '#f2f2f2' }}>
//         Parth Khunt 
//       </div>
//       <div className="nav-links">
//         <a href="#about" style={linkStyle} className="nav-item">About</a>
//         <a href="#projects" style={linkStyle} className="nav-item">Work</a>
//         <a href="#skills" style={linkStyle} className="nav-item">Skills</a>
//         <a href="#contact" style={linkStyle} className="nav-item">Contact</a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Styles for the main bar
  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '70px',
    padding: '0 8%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 100,
    background: 'rgba(5, 5, 5, 0.7)', 
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255,255,255,0.08)'
  };

  return (
    <>
      <nav style={navStyle}>
        {/* LOGO */}
        <div style={{ fontWeight: '700', fontSize: '1.3rem', letterSpacing: '-1px', color: '#fff' }}>
          Parth Khunt 
        </div>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <div className="desktop-menu">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Work</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        {/* MOBILE HAMBURGER ICON (Visible only on Mobile) */}
        <div className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? (
            // X Icon (Close)
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // Hamburger Icon (Open)
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#projects" onClick={toggleMenu}>Work</a>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
      </div>

      {/* INLINE STYLES FOR RESPONSIVENESS */}
      <style>{`
        .desktop-menu { display: flex; gap: 40px; }
        .nav-link { color: #888; text-decoration: none; font-size: 0.9rem; transition: color 0.3s; }
        .nav-link:hover { color: #fff; }
        .mobile-toggle { display: none; cursor: pointer; }

        /* When screen is less than 768px (Mobile) */
        @media (max-width: 768px) {
          .desktop-menu { display: none; } /* Hide desktop links */
          .mobile-toggle { display: block; } /* Show hamburger */
        }
      `}</style>
    </>
  );
};

export default Navbar;