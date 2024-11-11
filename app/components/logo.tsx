import React from 'react';

const Logo: React.FC = () => {
  return (
    <div style={{

    }}>
      {/* Logo/Brand Title */}
      <a href='..' style={{ color: 'white', textDecoration: 'none' }}>
        <h1 className="hoverEffect" style={{ fontSize: '1.5em', margin: 0 }}>Smart Buy</h1>
      </a>
      
      <style jsx>{`
        .hoverEffect {
          color: white;
          text-decoration: none;
          transition: color 0.1s ease;
        }
        .hoverEffect:hover {
          color: gold !important;
          // transform: scale(1.2);
          // box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.3);
        }
      `}</style>

    </div>
  );
};

export default Logo;
