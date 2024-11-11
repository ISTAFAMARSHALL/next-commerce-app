import React from 'react';

import Logo from '@/app/components/logo'

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',  // Stack logo and button vertically
      alignItems: 'flex-start',  // Align items to the left
      padding: '1em',
      backgroundColor: '#0072ce',
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%',
    }}>

      <Logo/>

      {/* Menu Button under logo */}
      <button onClick={onMenuClick} style={{
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white',
        fontSize: '1.5em',
        cursor: 'pointer',
        marginTop: '0.5em'  // Add space between logo and button
      }} className="buttonEffect" >
        ☰
      </button>

      <style jsx>{`
        .hoverEffect,buttonEffect {
          color: white;
          text-decoration: none;
          transition: color 0.1s ease;
        }
        .hoverEffect:hover {
          color: gold !important;
          transform: scale(1.2);
          box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.3);
        }
        .buttonEffect:hover {
          color: gold !important;
        }
      `}</style>

    </div>
  );
};

export default Header;
