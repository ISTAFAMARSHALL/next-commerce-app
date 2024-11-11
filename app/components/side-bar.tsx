// 'use client'

// import SideBarToggle from '@/app/components/sidebar-toggle-button'

// export default function SideBar () {
//     return (
//         <aside id="sidebar"
        
//         >
            
//             <div 
//                 id='category-links'
//                 style={{
//                     textAlign: 'center',
//                     fontSize: '16px',
//                     justifyContent: 'space-around',
//                 }}
//             >
//                 {/* Link elements for Best Buy categories */}
                
//                 <a className="button" href="/products/laptop-computers">
//                     <>Laptops & Computers</>
//                 </a>

//                 <br></br>

//                 <a className="button" href="/products/televisions">
//                     <>TeleVisions</>
//                 </a>

//                 <br></br>

//                 <a className="button" href="/products/projectors">
//                     <>Projectors</>
//                 </a>

//                 <br></br>

//                 <a className="button" href="/products/gaming-consoles">
//                     <>Video Game Consoles</>
//                 </a>

//                 <br></br>

//                 <a className="button" href="/products/vr-headsets">
//                     <>Virtual Reality</>
//                 </a>

//                 <br></br>

//                 <a className="button" href="/products/appliances">
//                     <>Major Appliances</>
//                 </a>

//                 <br></br>

//                 {/* Add more Link elements for other categories */}
//                 <a className="button" href="">
//                     <>Apple</>
//                 </a>

//                 <br></br>

//                 <a className="button" href="/products/cell-phones">
//                     <>Cell Phones</>
//                 </a>

//                 <br></br>

//                 <a className="button" href="/products/headphones">
//                     <>Headphones</>
//                 </a>

//                 <br></br>

//                 <a className="button" href="/products/pc-gaming">
//                     <>PC Gaming</>
//                 </a>

//                 <br></br>

//                 <a className="button" href="/products/tablets-e-readers">
//                     <>Tablets & E-Readers</>
//                 </a>

//                 <br></br>

//                 <a className="button" href="/products/home-audio">
//                     <>Home Audio</>
//                 </a>

//                 <br></br>

//                 <a className="button" href="/products/cameras-camcorders">
//                     <>Cameras, Camcorders</>
//                 </a>

//                 <br></br>

//                 <a className="button" href="/products/drones">
//                     <>Drones</>
//                 </a>

//                 <br></br>

//                 <a className="button" href="/products/wearable-tech">
//                     <>Wearable Technology</>
//                 </a>

//                 {/* <br></br>

//                 <a className="button" href="">
//                     <>Small Appliances, Floor Care & Home Air Quality</>
//                 </a> */}

//                 <br></br>

//                 <a className="button" href="/products/smarthome-security-wifi">
//                     <>Smart Home, Security & Wi-Fi</>
//                 </a>

//                 <br></br>

//                 <a className="button" href="/products/printers-computeraccessories">
//                     <>Printers & Computer Accessories</>
//                 </a>

//                 {/* <br></br>

//                 <a className="button" href="">
//                     <>Electric Transportation</>
//                 </a> */}

//                 {/* <br></br>

//                 <a className="button" href="">
//                     <>Collectibles & Toys</>
//                 </a> */}
//             </div>

//             <SideBarToggle prop={"Close"} >Close</SideBarToggle>

//         </aside>
//     )
// }

// 'use client';

// import React from 'react';

// interface SidebarProps {
//   onClose: () => void;
// }

// const SideBar: React.FC<SidebarProps> = ({ onClose }) => {
//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       height: '100%',
//       padding: '1em',
//       backgroundColor: '#0072ce',
//       color: 'white',
//       width: '250px',
//       position: 'relative',
//       alignItems: 'flex-start'
//     }}>
//       {/* Close Button */}
//       <button onClick={onClose} style={{
//         alignSelf: 'flex-end',
//         backgroundColor: 'transparent',
//         border: 'none',
//         color: 'white',
//         fontSize: '1.5em',
//         cursor: 'pointer'
//       }}>
//         ✕
//       </button>

//       {/* Logo/Brand Title */}
//       <h1 style={{ fontSize: '1.5em', margin: 0 }}>Smart Buy</h1>

//       {/* Sidebar Content (Categories/Links Placeholder) */}
//       <nav style={{ marginTop: '1em', width: '100%' }}>
//         <ul style={{
//           listStyleType: 'none',
//           padding: 0,
//           display: 'flex',
//           flexDirection: 'column',
//           gap: '1em',
//           alignItems: 'flex-start',
//           marginTop: '1em',
//         }}>
//           <li><a href="/products/laptop-computers" style={{ color: 'white', textDecoration: 'none' }}>Laptops & Computers</a></li>
//           <li><a href="/products/televisions" style={{ color: 'white', textDecoration: 'none' }}>Televisions</a></li>
//           <li><a href="/products/projectors" style={{ color: 'white', textDecoration: 'none' }}>Projectors</a></li>
//           <li><a href="/products/video-game-consoles" style={{ color: 'white', textDecoration: 'none' }}>Video Game Consoles</a></li>
//           <li><a href="/products/vr-headsets" style={{ color: 'white', textDecoration: 'none' }}>Virtual Reality</a></li>
//           <li><a href="/products/appliances" style={{ color: 'white', textDecoration: 'none' }}>Major Appliances</a></li>
//           <li><a href="/products/apple" style={{ color: 'white', textDecoration: 'none' }}>Apple</a></li>
//           <li><a href="/products/cell-phones" style={{ color: 'white', textDecoration: 'none' }}>Cell Phones</a></li>
//           <li><a href="/products/headphones" style={{ color: 'white', textDecoration: 'none' }}>Headphones</a></li>
//           <li><a href="/products/pc-gaming" style={{ color: 'white', textDecoration: 'none' }}>PC Gaming</a></li>
//           <li><a href="/products/tablets-e-readers" style={{ color: 'white', textDecoration: 'none' }}>Tablets & E-Readers</a></li>
//           <li><a href="/products/home-audio" style={{ color: 'white', textDecoration: 'none' }}>Home Audio</a></li>
//           <li><a href="/products/cameras-camcorders" style={{ color: 'white', textDecoration: 'none' }}>Cameras, Camcorders</a></li>
//           <li><a href="/products/drones" style={{ color: 'white', textDecoration: 'none' }}>Drones</a></li>
//           <li><a href="/products/wearable-tech" style={{ color: 'white', textDecoration: 'none' }}>Wearable Technology</a></li>
//           <li><a href="/products/smarthome-security-wifi" style={{ color: 'white', textDecoration: 'none' }}>Smart Home, Security & Wi-Fi</a></li>
//           <li><a href="/products/printers-computeraccessories" style={{ color: 'white', textDecoration: 'none' }}>Printers & Computer Accessories</a></li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default SideBar;

'use client';

import React from 'react';

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
      <a href='..' style={{ color: 'white', textDecoration: 'none' }}>
        <h1 style={{ fontSize: '1.5em', margin: 0 }}>Smart Buy</h1>
      </a>

      {/* Close Button */}
      <button onClick={onClose} style={{
        alignSelf: 'flex-end',
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white',
        fontSize: '1.5em',
        cursor: 'pointer'
      }}>
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
        }}>
          <li><a href="/products/laptop-computers" style={{ color: 'white', textDecoration: 'none' }}>Laptops & Computers</a></li>
          <li><a href="/products/televisions" style={{ color: 'white', textDecoration: 'none' }}>Televisions</a></li>
          <li><a href="/products/projectors" style={{ color: 'white', textDecoration: 'none' }}>Projectors</a></li>
          <li><a href="/products/gaming-consoles" style={{ color: 'white', textDecoration: 'none' }}>Video Game Consoles</a></li>
          <li><a href="/products/vr-headsets" style={{ color: 'white', textDecoration: 'none' }}>Virtual Reality</a></li>
          <li><a href="/products/appliances" style={{ color: 'white', textDecoration: 'none' }}>Major Appliances</a></li>
          <li><a href="/products/apple" style={{ color: 'white', textDecoration: 'none' }}>Apple</a></li>
          <li><a href="/products/cell-phones" style={{ color: 'white', textDecoration: 'none' }}>Cell Phones</a></li>
          <li><a href="/products/headphones" style={{ color: 'white', textDecoration: 'none' }}>Headphones</a></li>
          <li><a href="/products/pc-gaming" style={{ color: 'white', textDecoration: 'none' }}>PC Gaming</a></li>
          <li><a href="/products/tablets-e-readers" style={{ color: 'white', textDecoration: 'none' }}>Tablets & E-Readers</a></li>
          <li><a href="/products/home-audio" style={{ color: 'white', textDecoration: 'none' }}>Home Audio</a></li>
          <li><a href="/products/cameras-camcorders" style={{ color: 'white', textDecoration: 'none' }}>Cameras, Camcorders</a></li>
          <li><a href="/products/drones" style={{ color: 'white', textDecoration: 'none' }}>Drones</a></li>
          <li><a href="/products/wearable-tech" style={{ color: 'white', textDecoration: 'none' }}>Wearable Technology</a></li>
          <li><a href="/products/smarthome-security-wifi" style={{ color: 'white', textDecoration: 'none' }}>Smart Home, Security & Wi-Fi</a></li>
          <li><a href="/products/printers-computeraccessories" style={{ color: 'white', textDecoration: 'none' }}>Printers & Computer Accessories</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
