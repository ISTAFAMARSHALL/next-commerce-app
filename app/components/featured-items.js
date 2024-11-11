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

// import React from 'react';
// import { all_products } from '../lib/all-products';
// import ProductList from '@/app/components/product-list';

// // Define the product structure
// interface ProductItem {
//   thumbnails: string[];
//   name: string;
//   description: string;
// }

// export default function FeaturedItems() {
//   // Function to get random products from the all_products array
//   const getRandomProducts = (products: ProductItem[], count: number): ProductItem[] => {
//     const shuffled = [...products].sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, count);
//   };

//   // Select random products
//   const selectedProducts = getRandomProducts(all_products, 12);

//   return (
//     <main style={{ padding: '2em', textAlign: 'center' }}>
//       <h1 style={{ textAlign: 'center', fontSize: '2em', marginBottom: '1em' }}>Featured Items</h1>
      
//       {/* Responsive grid container for items */}
//       <div style={{
//         display: 'grid',
//         gap: '1em',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//         justifyItems: 'center',
//       }}>
//         {selectedProducts.map((item, index) => (
//           <ProductList key={index} item={item} />
//         ))}
//       </div>
//     </main>
//   );
// };

// import React from 'react';
// import { all_products } from '../lib/all-products';
// import ProductList from '@/app/components/product-list';

// // Define the product structure based on all_products
// interface ProductItem {
//   name: string;
//   price: string;
//   link: string;
//   primaryImage: string;
//   thumbnails: string[];
//   category: string;
//   manufacturer: string;
//   views: number;
//   onSale: boolean;
//   onClearance: boolean;
//   description: string[]; // Adjusted to match the array type
// }

// export default function FeaturedItems() {
//   // Function to get random products from the all_products array
//   const getRandomProducts = (products: ProductItem[], count: number): ProductItem[] => {
//     const shuffled = [...products].sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, count);
//   };

//   // Select random products
//   const selectedProducts = getRandomProducts(all_products, 12);

//   return (
//     <main style={{ padding: '2em', textAlign: 'center' }}>
//       <h1 style={{ textAlign: 'center', fontSize: '2em', marginBottom: '1em' }}>Featured Items</h1>
      
//       {/* Responsive grid container for items */}
//       <div style={{
//         display: 'grid',
//         gap: '1em',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//         justifyItems: 'center',
//       }}>
//         {selectedProducts.map((item, index) => (
//           <ProductList key={index} item={item} />
//         ))}
//       </div>
//     </main>
//   );
// };

// import React from 'react';

// interface FeaturedProductItem {
//   name: string;
//   price: string;
//   link: string;
//   primaryImage: string;
//   thumbnails: string[];
//   category: string;
//   manufacturer: string;
//   views: number;
//   onSale: boolean;
//   onClearance: boolean;
//   description: string[];
// }

// interface ProductListProps {
//   item: FeaturedProductItem;
// }

// export default function ProductList({ item }: ProductListProps) {
//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       textAlign: 'center',
//       padding: '1em',
//       border: '1px solid #ddd',
//       borderRadius: '8px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       margin: '1em',
//       maxWidth: '200px',
//     }}>
//       <h3 style={{
//         fontSize: '1em',
//         margin: '0.5em 0',
//         color: '#333'
//       }}>{item.name}</h3>

//       <div style={{
//         minWidth: '150px',
//         minHeight: '80px',
//         margin: '0.5em 0',
//         color: '#555',
//         fontSize: '0.9em',
//       }}>
//         <p>{item.description.join(' ')}</p> {/* Joining array if necessary */}
//       </div>
//     </div>
//   );
// };

// import React from 'react';

// interface FeaturedProductItem {
//   name: string;
//   price: string;
//   link: string;
//   primaryImage: string;
//   thumbnails: string[];
//   category: string;
//   manufacturer: string;
//   views: number;
//   onSale: boolean;
//   onClearance: boolean;
//   description: string[]; // Expecting description to be an array of strings
// }

// interface ProductListProps {
//   item: FeaturedProductItem;
// }

// export default function ProductList({ item }: ProductListProps) {

//   console.log(item)
  
//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       textAlign: 'center',
//       padding: '1em',
//       border: '1px solid #ddd',
//       borderRadius: '8px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       margin: '1em',
//       maxWidth: '200px',
//     }}>
//       <h3 style={{
//         fontSize: '1em',
//         margin: '0.5em 0',
//         color: '#333'
//       }}>{item?.name || 'Unnamed Product'}</h3>

//       <div style={{
//         minWidth: '150px',
//         minHeight: '80px',
//         margin: '0.5em 0',
//         color: '#555',
//         fontSize: '0.9em',
//       }}>
//         {/* Joining array if description is present, else displaying default message */}
//         <p>{item?.description?.length ? item.description.join(' ') : 'No description available'}</p>
//       </div>

//       {/* Additional optional rendering for other fields if needed */}
//       <p style={{ fontSize: '0.85em', color: '#777' }}>
//         {item?.price ? `$${item.price}` : 'Price not available'}
//       </p>
//     </div>
//   );
// }

// import React from 'react';
// import { all_products } from '../lib/all-products'; // Import your products data
// import ProductList from '@/app/components/product-list';

// interface FeaturedProductItem {
//   name: string;
//   price: string;
//   link: string;
//   primaryImage: string;
//   thumbnails: string[];
//   category: string;
//   manufacturer: string;
//   views: number;
//   onSale: boolean;
//   onClearance: boolean;
//   description: string[];
// }

// export default function FeaturedItems() {
//   // Function to get a specified number of random products from all_products
//   const getRandomProducts = (products: FeaturedProductItem[], count: number): FeaturedProductItem[] => {
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
//         gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//         justifyItems: 'center',
//       }}>
//         {selectedProducts.map((item, index) => (
//           <div>
//           <ProductList key={index} item={item} /> // Pass each item to ProductList
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

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
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        justifyItems: 'center',
      }}>
        {selectedProducts.map((item, index) => (
          <ProductList key={index} item={item} /> // Pass each item to ProductList
        ))}
      </div>
    </main>
  );
}