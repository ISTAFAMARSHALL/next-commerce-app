// import SideBarToggle from '@/app/components/sidebar-toggle-button'


// export default function Header () {

//     return (
    
//         <header>

//             <a href='..'>
//                 <h1>SmartBuy</h1>
//             </a>

//             <SideBarToggle prop={"Open"} >Menu</SideBarToggle>
            
//         </header>
//     )
// } 

import React from 'react';

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
      {/* Logo/Brand Title */}
      <a href='..' style={{ color: 'white', textDecoration: 'none' }}>
        <h1 style={{ fontSize: '1.5em', margin: 0 }}>Smart Buy</h1>
      </a>

      {/* Menu Button under logo */}
      <button onClick={onMenuClick} style={{
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white',
        fontSize: '1.5em',
        cursor: 'pointer',
        marginTop: '0.5em'  // Add space between logo and button
      }}>
        ☰
      </button>
    </div>
  );
};

export default Header;
