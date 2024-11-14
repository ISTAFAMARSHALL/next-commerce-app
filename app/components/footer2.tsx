import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      padding: '2em',
      backgroundColor: '#0072ce',
      color: 'white',
      textAlign: 'center',
      position: 'sticky',
      bottom: 0,
      width: '100%',
    }}>
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} Smart Buy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;