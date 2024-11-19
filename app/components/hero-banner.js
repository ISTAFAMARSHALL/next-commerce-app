'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Example promo images – replace these with actual image paths or URLs
import promo1 from '../lib/images/main-promo-imgs/Deal of the Day.webp';
import promo2 from '../lib/images/main-promo-imgs/Holidays - BOGO.webp';
import promo3 from '../lib/images/main-promo-imgs/Open Box Clearnace.webp';

const promos = [
  { image: promo1, title: 'Deal of the Day', description: 'Unbeatable discounts on top products.', link: '/promos/deal-of-the-day' },
  { image: promo2, title: 'Holiday Sale', description: 'Shop the best holiday deals now!', link: '/promos/sale' },
  { image: promo3, title: 'Clearance', description: 'Save big on clearance items.', link: '/promos/clearance' },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % promos.length);
    }, 5000); // Change slides every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.bannerContainer}>
      {promos.map((promo, index) => (
        <div
          key={index}
          style={{
            ...styles.slide,
            opacity: currentSlide === index ? 1 : 0,
            transform: currentSlide === index ? 'scale(1)' : 'scale(1.05)',
          }}
        >
          <Image src={promo.image} alt={promo.title} fill  style={styles.image} />
          
          {/* // Glassmorphic overlay  */}
          <div style={styles.overlay}>
            {/* <h2 style={styles.title}>{promo.title}</h2> */}
            <p style={styles.description}>{promo.description}</p>
            <div>
              <a style={styles.ctaButton} href={promo.link} >Shop Now</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  bannerContainer: {
    position: 'relative',
    width: '100%',
    height: '70vh',
    overflow: 'hidden',
  },
  slide: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transition: 'opacity 1s ease, transform 1s ease',
  },
  image: {
    filter: 'brightness(80%)', // Darkens the image for better text contrast
  },
  overlay: {
    position: 'absolute',
    top: '85%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)',
    padding: '2rem',
    borderRadius: '10px',
    textAlign: 'center',
    color: '#333',
    maxWidth: '90%',
  },
  title: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    marginBottom: '0.5em',
  },
  description: {
    marginTop: '-.25em',
    fontSize: '1.2em',
    marginBottom: '1em',
  },
  ctaButton: {
    fontSize: '1.1em',
    padding: '0.5em 1.5em',
    backgroundColor: '#0072ce',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
};

export default HeroBanner;