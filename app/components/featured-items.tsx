// // import { all_products } from '../lib/all-products';
// // import ProductList from '@/app/components/product-list'

// // export default function FeaturedItems() {

// //     // Function to get 15 random products from the all_products array
// //     const getRandomProducts = (products, count) => {
// //         const shuffled = [...products].sort(() => 0.5 - Math.random());
// //         return shuffled.slice(0, count);
// //     };

// //     // Select 15 random products
// //     const selectedProducts = getRandomProducts(all_products, 12);

// //     // Map over the selected products to display them
// //     const display = selectedProducts.map((item, index) => <ProductList key={index} item={item} />);

// //     return (
// //         <main>
            
// //             <h1 style={{ textAlign: 'center', justifyContent: 'space-around'}}>Featured Items</h1>

// //             <div className='items grid-auto-fit' >

// //                 {display}

// //             </div>

// //         </main>

// //     );
// // }

// 'use client'
// import React, { useState } from 'react';
// import { all_products } from '../lib/all-products';
// import ProductList from '@/app/components/product-list';

// const ITEMS_PER_PAGE = 12; // Number of items per page

// export default function FeaturedItems() {
//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);

//   // Function to paginate products
//   const paginateProducts = (products: any[], page: number, count: number) => {
//     const start = (page - 1) * count;
//     const end = start + count;
//     return products.slice(start, end);
//   };

//   // Select and paginate products for the current page
//   const paginatedProducts = paginateProducts(all_products, currentPage, ITEMS_PER_PAGE);

//   // Pagination handlers
//   const totalPages = Math.ceil(all_products.length / ITEMS_PER_PAGE);
//   const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   const goToPreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

//   return (
//     <main style={{ padding: '2em', textAlign: 'center' }}>
//       <h1 style={{ fontSize: '2em', marginBottom: '1em' }}>Featured Items</h1>

//       {/* Grid container for paginated items */}
//       <div style={{
//         display: 'grid',
//         gap: '1em',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//         justifyItems: 'center',
//       }}>
//         {paginatedProducts.map((item, index) => (
//           <ProductList key={index} item={item} />
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div style={{ marginTop: '1.5em', display: 'flex', justifyContent: 'center', gap: '1em' }}>
//         <button 
//           onClick={goToPreviousPage} 
//           disabled={currentPage === 1}
//           style={{
//             padding: '0.5em 1em',
//             fontSize: '1em',
//             backgroundColor: '#0072ce',
//             color: 'white',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
//             opacity: currentPage === 1 ? 0.5 : 1,
//           }}
//         >
//           Previous
//         </button>

//         <span style={{ alignSelf: 'center' }}>Page {currentPage} of {totalPages}</span>

//         <button 
//           onClick={goToNextPage} 
//           disabled={currentPage === totalPages}
//           style={{
//             padding: '0.5em 1em',
//             fontSize: '1em',
//             backgroundColor: '#0072ce',
//             color: 'white',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
//             opacity: currentPage === totalPages ? 0.5 : 1,
//           }}
//         >
//           Next
//         </button>
//       </div>
//     </main>
//   );
// }

import React from 'react';
import { all_products } from '../lib/all-products';
import ProductList from '@/app/components/product-list';

// Define the product structure
interface ProductItem {
  thumbnails: string[];
  name: string;
  description: string;
}

export default function FeaturedItems() {
  // Function to get random products from the all_products array
  const getRandomProducts = (products: ProductItem[], count: number): ProductItem[] => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Select random products
  const selectedProducts = getRandomProducts(all_products, 12);

  return (
    <main style={{ padding: '2em', textAlign: 'center' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2em', marginBottom: '1em' }}>Featured Items</h1>
      
      {/* Responsive grid container for items */}
      <div style={{
        display: 'grid',
        gap: '1em',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        justifyItems: 'center',
      }}>
        {selectedProducts.map((item, index) => (
          <ProductList key={index} item={item} />
        ))}
      </div>
    </main>
  );
};