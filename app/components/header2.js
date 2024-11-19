// import React from 'react';

// import Logo from '@/app/components/logo'

// interface HeaderProps {
//   onMenuClick: () => void;
// }

// const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',  // Stack logo and button vertically
//       alignItems: 'flex-start',  // Align items to the left
//       padding: '1em',
//       backgroundColor: '#0072ce',
//       color: 'white',
//       position: 'sticky',
//       top: 0,
//       zIndex: 1000,
//       width: '100%',
//     }}>

//       <Logo/>

//       {/* Menu Button under logo */}
//       <button onClick={onMenuClick} style={{
//         backgroundColor: 'transparent',
//         border: 'none',
//         color: 'white',
//         fontSize: '1.5em',
//         cursor: 'pointer',
//         marginTop: '0.5em'  // Add space between logo and button
//       }} className="buttonEffect" >
//         ☰
//       </button>

//       <style jsx>{`
//         .hoverEffect,buttonEffect {
//           color: white;
//           text-decoration: none;
//           transition: color 0.1s ease;
//         }
//         .hoverEffect:hover {
//           color: gold !important;
//           transform: scale(1.2);
//           box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.3);
//         }
//         .buttonEffect:hover {
//           color: gold !important;
//         }
//       `}</style>

//     </div>
//   );
// };

// export default Header;


import { 
  // FiShoppingCart, FiUser, FiHeart, 
  FiSun, FiMoon } from 'react-icons/fi';

const Header = ({ onMenuClick, onToggleDarkMode, isDarkMode }) => {
  return (
    <header style={styles.header}>
      <button onClick={onMenuClick} style={styles.menuButton}>☰</button>
      
      <a href='..' style={{textDecoration:  'none'}} >
        <h1 style={styles.logo}>Smart Buy</h1>
      </a>

      <div style={styles.searchBar}>
        <input type="text" placeholder="Search products..." style={styles.searchInput} />
      </div>

      <div style={styles.icons}>
        {/* <a href="" style={styles.iconLink}>Login</a> */}
        {/* <FiShoppingCart style={styles.icon} />
        <FiHeart style={styles.icon} />
        <FiUser style={styles.icon} /> */}
        <button onClick={onToggleDarkMode} style={styles.darkModeToggle}>
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Glassmorphic effect
    backdropFilter: 'blur(10px)',
    padding: '1em 2em',
    zIndex: 1000,
    borderBottom: '1px solid #ddd',
  },
  menuButton: {
    background: 'transparent',
    border: 'none',
    fontSize: '1.5em',
    cursor: 'pointer',
    color: '#007bff',
  },
  logo: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: '#007bff',
  },
  searchBar: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '8px',
    marginLeft: '2em',
    padding: '0.5em 1em',
  },
  searchInput: {
    width: '100%',
    border: 'none',
    background: 'transparent',
    outline: 'none',
    color: '#333',
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
    gap: '1em',
    color: '#007bff',
  },
  icon: {
    fontSize: '1.25em',
    cursor: 'pointer',
  },
  iconLink: {
    color: '#007bff',
    fontWeight: 'bold',
    fontSize: '1em',
    textDecoration: 'none',
  },
  darkModeToggle: {
    background: 'transparent',
    border: 'none',
    fontSize: '1.25em',
    cursor: 'pointer',
  },
};

export default Header;