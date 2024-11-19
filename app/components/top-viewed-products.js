/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enforce React strict mode for development
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pisces.bbystatic.com', // Add other domains as needed
      },
    ],
  },
};

export default nextConfig;import React from 'react';
import Image from 'next/image';
import { all_products } from '../lib/all-products';

export default function TopViewedProducts() {
  // Sort products by views in descending order and take the top 5
  const topViewedProducts = all_products
    .slice() // Make a copy of the array to avoid modifying the original
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  return (
    <section style={{ padding: '2em', textAlign: 'center' }}>
      <h2 style={{ textAlign: 'center', fontSize: '1.8em', marginBottom: '1em' }}>Top Viewed Products</h2>
      
      {/* Single row container for items */}
      <div style={{
        display: 'flex',
        justifyContent: 'center', // Centers the row
        gap: '1em', // Even spacing between items
        overflowX: 'auto', // Allows horizontal scrolling on small screens
        padding: '1em 0'
      }}>
        {topViewedProducts.map((item, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1em',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '350px', // Adjust width as desired
          }}>
            <Image
              src={item.primaryImage}
              alt={item.name}
              width={120} // specify width of the image
              height={120} // specify height of the image
              style={{
                borderRadius: '8px',
                marginBottom: '0.5em'
              }}
            />

            <a href={`/product-details/${item.id}`} >
              <h3 style={{
                fontSize: '1em',
                margin: '0.5em 0',
                color: '#333',
                textAlign: 'center'
              }}>{item.name}</h3>
            </a>
            
            {/* <p style={{
              fontSize: '0.85em',
              color: '#777',
              textAlign: 'center'
            }}>
              {item.price ? `${item.price}` : 'Price not available'}
            </p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
