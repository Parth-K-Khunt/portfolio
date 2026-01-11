import React from 'react';

const Footer = () => {
  const footerStyle = {
    padding: '40px 8%',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    textAlign: 'center',
    color: '#555',
    fontSize: '0.8rem',
    marginTop: '50px'
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2026 Parth Khunt. All rights reserved.</p>
    </footer>
  );
};

export default Footer;