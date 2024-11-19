'use client'

import React from 'react';
import Image from 'next/image';

const ProductCard = ({ product }) => (
  <div className="hoverEffect" style={styles.card}>
    
    <a href={`/product-details/${product.id}`} style={{textDecoration:  'none'}}  >
      <Image src={product.primaryImage} alt={product.name} width={150} height={150} style={styles.image} />

      <h3 style={styles.name}>{product.name}</h3>
      <p style={styles.price}>{product.price}</p>
      
    </a>

    <style jsx>{`
      .hoverEffect:hover {
          transform: scale(1.1);
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
      }
    `}</style>      

  </div>
);

const styles = {
  card: {
    width: '150px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '1em',
    textAlign: 'center',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    borderRadius: '8px',
    transition: 'transform 0.2s ease',
  },
  name: {
    fontSize: '1em',
    margin: '0.5em 0',
  },
  price: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#007bff',
  },
};

export default ProductCard;