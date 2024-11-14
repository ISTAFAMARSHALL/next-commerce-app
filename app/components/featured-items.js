import React from 'react';
import { all_products } from '../lib/all-products'; // Import your products data
import ProductList from '@/app/components/product-list';

export default function FeaturedItems() {
  // Function to get a specified number of random products from all_products
  const getRandomProducts = (products, count) => {
    if (!products || products.length === 0) {
      return []; // Return an empty array if products is undefined or empty
    }
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Select 12 random products
  const selectedProducts = getRandomProducts(all_products, 12);

  return (
    <main style={{ padding: '2em', textAlign: 'center' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2em', marginBottom: '1em' }}>Featured Items</h1>
      
      {/* Responsive grid container for items */}
      <div style={{
        display: 'grid',
        gap: '1em',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        justifyItems: 'center',
      }}>
        {selectedProducts.map((item, index) => (
          <ProductList key={index} item={item} /> // Pass each item to ProductList
        ))}
      </div>
    </main>
  );
}
