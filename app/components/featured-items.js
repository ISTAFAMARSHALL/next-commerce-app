// import React from 'react';
// import { all_products } from '../lib/all-products'; // Import your products data
// import ProductList from '@/app/components/product-list';

// export default function FeaturedItems() {
//   // Function to get a specified number of random products from all_products
//   const getRandomProducts = (products, count) => {
//     if (!products || products.length === 0) {
//       return []; // Return an empty array if products is undefined or empty
//     }
//     const shuffled = [...products].sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, count);
//   };

//   // Select 12 random products
//   const selectedProducts = getRandomProducts(all_products, 12);

//   return (
//     <main style={{ padding: '2em', textAlign: 'center' }}>
//       <h1 style={{ textAlign: 'center', fontSize: '2em', marginBottom: '1em' }}>Featured Items</h1>
      
//       {/* Responsive grid container for items */}
//       <div style={{
//         display: 'grid',
//         gap: '1em',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//         justifyItems: 'center',
//       }}>
//         {selectedProducts.map((item, index) => (
//           <ProductList key={index} item={item} /> // Pass each item to ProductList
//         ))}
//       </div>
//     </main>
//   );
// }

import React from 'react';
import ProductCard from '@/app/components/product-card'; // Reuse the ProductCard component for consistency
import { all_products } from '../lib/all-products';

// Example data for featured items – replace with actual data
// const featuredItems = [
//   { id: 1, name: 'Wireless Headphones', image: '/images/headphones.jpg', price: '$129' },
//   { id: 2, name: 'Smartwatch', image: '/images/smartwatch.jpg', price: '$199' },
//   // Add more featured items as needed
// ];

const getRandomProducts = (products, count) => {
  if (!products || products.length === 0) {
    return []; // Return an empty array if products is undefined or empty
  }
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Select 12 random products
const featuredItems = getRandomProducts(all_products, 24);

const FeaturedItems = () => (
  <section style={styles.section}>
    <h2 style={styles.heading}>Featured Items</h2>
    <div style={styles.grid} className="hoverEffect" >
      {featuredItems.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  </section>
);

const styles = {
  section: {
    padding: '2em',
    textAlign: 'center',
    // width: '80%',
    
  },
  heading: {
    fontSize: '2em',
    marginBottom: '1em',
  },
  grid: {
    display: 'grid',
    justifyContent: 'space-between',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1em',
  },
};

export default FeaturedItems;