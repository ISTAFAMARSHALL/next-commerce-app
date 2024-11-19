// import React from 'react';

// import Logo from '@/app/components/logo'

// interface SidebarProps {
//   onClose: () => void;
// }

// const SideBar: React.FC<SidebarProps> = ({ onClose }) => {
//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       height: '100%',
//       paddingTop: '3.5em',  // Adjusted to align with header title
//       paddingLeft: '1em',
//       backgroundColor: '#0072ce',
//       color: 'white',
//       width: '250px',
//       position: 'relative',
//       alignItems: 'flex-start'
//     }}>

//       {/* Logo/Brand Title */}
//       <Logo/>

//       {/* Close Button */}
//       <button onClick={onClose} style={{
//         alignSelf: 'flex-end',
//         backgroundColor: 'transparent',
//         border: 'none',
//         color: 'white',
//         fontSize: '1.5em',
//         cursor: 'pointer'
//       }} className="buttonEffect" >
//         ✕
//       </button>

//       {/* Sidebar Content (Categories/Links Placeholder) */}
//       <nav style={{ marginTop: '1em', width: '100%' }}>
        
//         <ul style={{
//           listStyleType: 'none',
//           padding: 0,
//           display: 'flex',
//           flexDirection: 'column',
//           gap: '1em',
//           alignItems: 'flex-start'
//         }} >
//           <li><a className="hoverEffect" href="/products/laptop-computers">Laptops & Computers</a></li>
//           <li><a className="hoverEffect" href="/products/televisions">Televisions</a></li>
//           <li><a className="hoverEffect" href="/products/projectors">Projectors</a></li>
//           <li><a className="hoverEffect" href="/products/gaming-consoles">Video Game Consoles</a></li>
//           <li><a className="hoverEffect" href="/products/vr-headsets">Virtual Reality</a></li>
//           <li><a className="hoverEffect" href="/products/appliances">Major Appliances</a></li>
//           <li><a className="hoverEffect" href="/products/apple">Apple</a></li>
//           <li><a className="hoverEffect" href="/products/cell-phones">Cell Phones</a></li>
//           <li><a className="hoverEffect" href="/products/headphones">Headphones</a></li>
//           <li><a className="hoverEffect" href="/products/pc-gaming">PC Gaming</a></li>
//           <li><a className="hoverEffect" href="/products/tablets-e-readers">Tablets & E-Readers</a></li>
//           <li><a className="hoverEffect" href="/products/home-audio">Home Audio</a></li>
//           <li><a className="hoverEffect" href="/products/cameras-camcorders">Cameras, Camcorders</a></li>
//           <li><a className="hoverEffect" href="/products/drones">Drones</a></li>
//           <li><a className="hoverEffect" href="/products/wearable-tech">Wearable Technology</a></li>
//           <li><a className="hoverEffect" href="/products/smarthome-security-wifi">Smart Home, Security & Wi-Fi</a></li>
//           <li><a className="hoverEffect" href="/products/printers-computeraccessories">Printers & Computer Accessories</a></li>
//         </ul>
//       </nav>
//       <style jsx>{`
//           .hoverEffect, buttonEffect {
//             color: white;
//             text-decoration: none;
//             transition: color 0.1s ease;
//           }
//           .hoverEffect:hover {
//             color: gold !important;
//             transform: scale(1.2);
//             box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.3);
//           }
//           .buttonEffect:hover {
//             color: gold !important;
//           }
//         `}</style>
//     </div>
//   );
// };

// export default SideBar;

import React from 'react';
import { FiTv, FiSmartphone, FiHeadphones, FiMonitor , FiPrinter , FiSpeaker } from 'react-icons/fi';
import { RiProjector2Line } from "react-icons/ri";
import { GiConsoleController , GiDeliveryDrone } from "react-icons/gi";
import { PiVirtualRealityBold } from "react-icons/pi";
import { SiPcgamingwiki } from "react-icons/si";
import { FaTabletScreenButton } from "react-icons/fa6";
import { IoCameraSharp } from "react-icons/io5";
import { BsSmartwatch } from "react-icons/bs";
import { LiaHomeSolid } from "react-icons/lia";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { CiSpeaker } from "react-icons/ci";


const SideBar = ({ onClose, isSidebarVisible }) => {
  if (!isSidebarVisible) return null;

  return (
    <aside style={styles.sidebar}>
      <button onClick={onClose} style={styles.closeButton}>✕</button>

      <h2 style={styles.heading}>Shop by Department</h2>

      <ul style={styles.categoryList}>
        <a style={styles.categoryItem} href="/products/laptop-computers" ><FiMonitor />Laptops & Computers</a>
        <a style={styles.categoryItem} href="/products/televisions" ><FiTv />Televisions</a>
        <a style={styles.categoryItem} href="/products/projectors" ><RiProjector2Line /> Projectors</a>
        <a style={styles.categoryItem} href="/products/gaming-consoles" ><GiConsoleController /> Video Game Consoles</a>
        <a style={styles.categoryItem} href="/products/Virtual Reality" ><PiVirtualRealityBold /> Virtual Reaaty</a>
        <a style={styles.categoryItem} href="/products/appliances" ><CgSmartHomeRefrigerator /> Major Appaances</a>
        <a style={styles.categoryItem} href="/products/cell-phones" ><FiSmartphone /> Cell Phones</a>
        <a style={styles.categoryItem} href="/products/headphones" ><FiHeadphones /> Headphones</a>
        <a style={styles.categoryItem} href="/products/pc-gaming" ><SiPcgamingwiki /> PC Gaming</a>
        <a style={styles.categoryItem} href="/products/tablets-e-readers" ><FaTabletScreenButton /> Tablets & E-Readers</a>
        <a style={styles.categoryItem} href="/products/home-audio" ><FiSpeaker /> Home Audio</a>
        <a style={styles.categoryItem} href="/products/cameras-camcorders" ><IoCameraSharp /> Cameras, Camcorders</a>
        <a style={styles.categoryItem} href="/products/drones" ><GiDeliveryDrone /> Drones</a>
        <a style={styles.categoryItem} href="/products/wearable-tech" ><BsSmartwatch /> Wearable Technology</a>
        <a style={styles.categoryItem} href="/products/smarthome-security-wifi" ><LiaHomeSolid /> Smart Home, Security & Wi-Fi</a>
        <a style={styles.categoryItem} href="/products/printers-computeraccessories" ><FiPrinter /> Printers & Computer Accessories</a>

        {/* Add more categories here with icons */}
        {/* <li><a href="/products/laptop-computers">Laptops & Computers</a></li>
        <li><a href="/products/televisions">Televisions</a></li>
        <li><a href="/products/projectors">Projectors</a></li>
        <li><a href="/products/gaming-consoles">Video Game Consoles</a></li>
        <li><a href="/products/vr-headsets">Virtual Reality</a></li>
        <li><a href="/products/appliances">Major Appliances</a></li>
        <li><a href="/products/apple">Apple</a></li>
        <li><a href="/products/cell-phones">Cell Phones</a></li>
        <li><a href="/products/headphones">Headphones</a></li>
        <li><a href="/products/pc-gaming">PC Gaming</a></li>
        <li><a href="/products/tablets-e-readers">Tablets & E-Readers</a></li>
        <li><a href="/products/home-audio">Home Audio</a></li>
        <li><a href="/products/cameras-camcorders">Cameras, Camcorders</a></li>
        <li><a href="/products/drones">Drones</a></li>
        <li><a href="/products/wearable-tech">Wearable Technology</a></li>
        <li><a href="/products/smarthome-security-wifi">Smart Home, Security & Wi-Fi</a></li>
        <li><a className="hoverEffect" href="/products/printers-computeraccessories">Printers & Computer Accessories</a></li> */}
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '250px',
    backgroundColor: '#0072ce',
    color: 'white',
    padding: '1em',
    boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.3)',
    zIndex: 1001,
    transition: 'transform 0.3s ease',
  },
  closeButton: {
    background: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '1.5em',
    alignSelf: 'flex-end',
    cursor: 'pointer',
  },
  heading: {
    marginTop: '1em',
    fontSize: '1.25em',
    color: '#fff',
  },
  categoryList: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '1em',
  },
  categoryItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5em',
    fontSize: '1.2em',
    padding: '0.5em 0',
    cursor: 'pointer',
    transition: 'color 0.2s, transform 0.2s',
    textDecoration: 'none'
  },
  categoryItemHover: {
    color: 'gold',
    transform: 'scale(1.05)',
  },
};

export default SideBar;