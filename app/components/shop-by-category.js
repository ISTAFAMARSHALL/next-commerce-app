// 'use client';

// import Image from 'next/image';
// import phoneIcon from '../lib/images/top-catergories/cellphone_icon_translucent.png';
// import gamingIcon from '../lib/images/top-catergories/gaming_console_icon_translucent.png';
// import laptopIcon from '../lib/images/top-catergories/laptop_icon_translucent.png';
// import tvIcon from '../lib/images/top-catergories/tv_icon_translucent.png';

// const images = [
//     { image: phoneIcon, alt: 'cellphone_icon', category: 'Cell Phones' , link: 'cell-phones' },
//     { image: gamingIcon, alt: 'gaming_console_icon', category: 'Gaming Consoles' , link:'gaming-consoles' },
//     { image: laptopIcon, alt: 'laptop_icon', category: 'Laptops' , link: 'laptop-computers' },
//     { image: tvIcon, alt: 'tv_icon', category: 'TVs' , link: 'televisions' }
// ];

// export default function TopCategories() {
//     return (
//         <div style={{
//             maxWidth: '500px',
//             textAlign: 'center',
//             border: '2.5px solid currentColor',
//             borderRadius: '1rem',
//             padding: '1rem',
//         }}>
//             <h2 style={{ margin: '5px' }}>Today&apos;s Top Categories</h2>
//             <div style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 gap: '2em',
//                 padding: '1rem',
//             }}>
//                 {images.map((image, index) => (
//                     <div key={index} style={{
//                         textAlign: 'center',
//                         transition: 'transform 0.2s, box-shadow 0.2s',
//                     }}>
//                         <div style={{
//                             display: 'inline-block',
//                             borderRadius: '50%',
//                             overflow: 'hidden',
//                             transition: 'transform 0.2s, box-shadow 0.2s',
//                             cursor: 'pointer',
//                         }} className="hoverEffect">
//                             <a href={`/products/${image.link}`}>
//                                 <Image
//                                     src={image.image}
//                                     alt={image.alt}
//                                     width={80}
//                                     height={80}
//                                 />
//                             </a>
//                         </div>
//                         <p style={{ fontSize: '1rem', marginTop: '0.5em' }}>{image.category}</p>
//                     </div>
//                 ))}
//             </div>

//             <style jsx>{`
//                 .hoverEffect:hover {
//                     transform: scale(1.1);
//                     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
//                 }
//             `}</style>
//         </div>
//     );
// }
'use client'
import React from 'react';
import { FiMonitor, FiSmartphone, FiTv, FiHeadphones } from 'react-icons/fi';
import { FaGamepad } from "react-icons/fa";

const categories = [
  { name: 'Laptops & Computers', icon: <FiMonitor />, link: '/products/laptop-computers' },
  { name: 'Cell Phones', icon: <FiSmartphone />, link: '/products/cell-phones' },
  { name: 'Televisions', icon: <FiTv />, link: '/products/televisions' },
  { name: 'Headphones', icon: <FiHeadphones />, link: '/products/headphones' },
  { name: 'Gaming Consoles', icon: <FaGamepad />, link: '/products/gaming-consoles' },
  // Add more categories as needed
];

const ShopByCategory = () => (
  <section style={styles.section} id="shop-by-category">
    <h2 style={styles.heading}>Shop deals by category</h2>
    <div style={styles.grid}>
      {categories.map((category, index) => (
        <a href={category.link} key={index} className="hoverEffect" style={styles.card}>
          <div style={styles.iconContainer}>{category.icon}</div>
          <p style={styles.text}>{category.name}</p>
        </a>
      ))}
    </div>
    
    <style jsx>{`
      .hoverEffect:hover {
          transform: scale(1.1);
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
      }
    `}</style>

  </section>
);

const styles = {
  section: {
    padding: '2em',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2em',
    marginTop: '3em',
    marginBottom: '1em',
  },
  grid: {
    display: 'flex',
    justifyContent: 'space-between',
    // gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1em',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: '1.5em',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#333',
    transition: 'transform 0.2s, box-shadow 0.2s',
    width: '250px',
  },
  iconContainer: {
    fontSize: '2em',
    marginBottom: '0.5em',
  },
  text: {
    fontSize: '1em',
    fontWeight: 'bold',
  },
};

export default ShopByCategory;