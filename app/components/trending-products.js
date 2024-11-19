import React from 'react';
import ProductCard from '@/app/components/product-card'; // Import a reusable ProductCard component
import { all_products } from '../lib/all-products';

// Example data for trending products – replace with actual product data
// const trendingProducts = [
//   { id: 1, name: 'Gaming Laptop', image: '/images/gaming-laptop.jpg', price: '$999' },
//   { id: 2, name: '4K TV', image: '/images/4k-tv.jpg', price: '$799' },
//   { id: 3, name: 'Smartphone', image: '/images/smartphone.jpg', price: '$699' },
//   // Add more products as needed
// ];

const trendingProducts = all_products
.slice() // Make a copy of the array to avoid modifying the original
.sort((a, b) => b.views - a.views)
.slice(0, 5);

const TrendingProducts = () => (
  <section style={styles.section}>
    <h2 style={styles.heading}>Todays Trending Products</h2>
    <div style={styles.scrollContainer}>
      {trendingProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);

const styles = {
  section: {
    padding: '2em',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2em',
    marginBottom: '1em',
  },
  scrollContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1em',
  },
};

export default TrendingProducts;