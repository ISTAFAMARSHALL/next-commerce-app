import React from 'react';

import Logo from '@/app/components/logo'

interface SidebarProps {
  onClose: () => void;
}

const SideBar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      paddingTop: '3.5em',  // Adjusted to align with header title
      paddingLeft: '1em',
      backgroundColor: '#0072ce',
      color: 'white',
      width: '250px',
      position: 'relative',
      alignItems: 'flex-start'
    }}>

      {/* Logo/Brand Title */}
      <Logo/>

      {/* Close Button */}
      <button onClick={onClose} style={{
        alignSelf: 'flex-end',
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white',
        fontSize: '1.5em',
        cursor: 'pointer'
      }} className="buttonEffect" >
        ✕
      </button>

      {/* Sidebar Content (Categories/Links Placeholder) */}
      <nav style={{ marginTop: '1em', width: '100%' }}>
        
        <ul style={{
          listStyleType: 'none',
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '1em',
          alignItems: 'flex-start'
        }} >
          <li><a className="hoverEffect" href="/products/laptop-computers">Laptops & Computers</a></li>
          <li><a className="hoverEffect" href="/products/televisions">Televisions</a></li>
          <li><a className="hoverEffect" href="/products/projectors">Projectors</a></li>
          <li><a className="hoverEffect" href="/products/gaming-consoles">Video Game Consoles</a></li>
          <li><a className="hoverEffect" href="/products/vr-headsets">Virtual Reality</a></li>
          <li><a className="hoverEffect" href="/products/appliances">Major Appliances</a></li>
          <li><a className="hoverEffect" href="/products/apple">Apple</a></li>
          <li><a className="hoverEffect" href="/products/cell-phones">Cell Phones</a></li>
          <li><a className="hoverEffect" href="/products/headphones">Headphones</a></li>
          <li><a className="hoverEffect" href="/products/pc-gaming">PC Gaming</a></li>
          <li><a className="hoverEffect" href="/products/tablets-e-readers">Tablets & E-Readers</a></li>
          <li><a className="hoverEffect" href="/products/home-audio">Home Audio</a></li>
          <li><a className="hoverEffect" href="/products/cameras-camcorders">Cameras, Camcorders</a></li>
          <li><a className="hoverEffect" href="/products/drones">Drones</a></li>
          <li><a className="hoverEffect" href="/products/wearable-tech">Wearable Technology</a></li>
          <li><a className="hoverEffect" href="/products/smarthome-security-wifi">Smart Home, Security & Wi-Fi</a></li>
          <li><a className="hoverEffect" href="/products/printers-computeraccessories">Printers & Computer Accessories</a></li>
        </ul>
      </nav>
      <style jsx>{`
          .hoverEffect, buttonEffect {
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

export default SideBar;