// import ProductList from '@/app/components/product-list'
// import { all_products } from '@/app/lib/all-products'

// const catergories = [
//     { title:'Laptops & Computers' , slug:'laptop-computers' },
//     { title: 'Televisions' , slug:'televisions' }, 
//     { title: 'Projectors' , slug:'projectors' },
//     { title: 'Video Game Consoles' , slug:'gaming-consoles' },
//     { title: 'Virtual Reality' , slug:'vr-headsets' },
//     { title: 'Major Appliances' , slug:'appliances' },
//     { title: 'Cell Phones' , slug:'cell-phones' },
//     { title: 'Headphones' , slug:'headphones' },
//     { title: 'PC Gaming' , slug:'pc-gaming' },
//     { title: 'Tablets & E-Readers' , slug:'tablets-e-readers' },
//     { title: 'Home Audio' , slug:'home-audio' },
//     { title: 'Cameras & Camcorders' , slug:'cameras-camcorders' }, 
//     { title: 'Drones' , slug:'drones' }, 
//     { title: 'Wearable Technology' , slug:'wearable-tech' }, 
//     { title: 'Smart Home, Security & Wi-Fi' , slug:'smarthome-security-wifi' }, 
//     { title: 'Printers & Computer Accessories' , slug:'printers-computeraccessories' },
// ]

// export default function Page (props) {

//     const selectedProduct = all_products.filter((product) => product.category === props.params.slug)

//     const selectedCatergory = catergories.find((catergory) => catergory.slug === selectedProduct[0].category)

//     const display = selectedProduct.map((item , index) => <ProductList key={index} item={item} />) 

//     return (
//         <main style={{ padding: '2em', textAlign: 'center' }}>

//             <h1 style={{ textAlign: 'center', fontSize: '2em', marginBottom: '1em' }}>{selectedCatergory.title}</h1>

//             <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//                 gap: '1em',
//                 padding: '1em',
//                 justifyItems: 'center',
//             }}>

//                 {display}

//             </div>

//         </main>
        
//     )
// }

'use client'
// import React, { useState } from 'react';
import ProductCard from '@/app/components/product-card';
import { all_products } from '@/app/lib/all-products';

const catergories = [
    { title:'Laptops & Computers' , slug:'laptop-computers' },
    { title: 'Televisions' , slug:'televisions' }, 
    { title: 'Projectors' , slug:'projectors' },
    { title: 'Video Game Consoles' , slug:'gaming-consoles' },
    { title: 'Virtual Reality Products' , slug:'vr-headsets' },
    { title: 'Major Appliances' , slug:'appliances' },
    { title: 'Cell Phones' , slug:'cell-phones' },
    { title: 'Headphones' , slug:'headphones' },
    { title: 'PC Gaming' , slug:'pc-gaming' },
    { title: 'Tablets & E-Readers' , slug:'tablets-e-readers' },
    { title: 'Home Audio Products' , slug:'home-audio' },
    { title: 'Cameras & Camcorders' , slug:'cameras-camcorders' }, 
    { title: 'Drones' , slug:'drones' }, 
    { title: 'Wearable Technology' , slug:'wearable-tech' }, 
    { title: 'Smart Home, Security & Wi-Fi Products' , slug:'smarthome-security-wifi' }, 
    { title: 'Printers & Computer Accessories' , slug:'printers-computeraccessories' },
]


// Example product data; replace with dynamic data
// const products = [
//   { id: 1, name: 'Gaming Laptop', image: '/images/gaming-laptop.jpg', price: '$999', category: 'Laptops' },
//   { id: 2, name: '4K TV', image: '/images/4k-tv.jpg', price: '$799', category: 'Televisions' },
//   { id: 3, name: 'Wireless Headphones', image: '/images/headphones.jpg', price: '$129', category: 'Accessories' },
//   { id: 4, name: 'Smartphone', image: '/images/smartphone.jpg', price: '$699', category: 'Phones' },
//   // Add more products
// ];

const Products = (props) => {
  // const [searchTerm, setSearchTerm] = useState('');
  // const [filter, setFilter] = useState('All');

    const filteredProducts = all_products.filter((product) => product.category === props.params.slug)

    const selectedCatergory = catergories.find((catergory) => catergory.slug === filteredProducts[0].category)

    // const display = selectedProduct.map((item , index) => <ProductList key={index} item={item} />) 

  // Filter and search logic
//   const filteredProducts = products.filter((product) => {
//     const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesFilter = filter === 'All' || product.category === filter;
//     return matchesSearch && matchesFilter;
//   });

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.title}>Explore Our {selectedCatergory.title}</h1>
        <div style={styles.searchFilterContainer}>
          {/* <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          /> */}
          {/* <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={styles.filterDropdown}
          >
            <option value="All">All Categories</option>
            <option value="Laptops">Laptops</option>
            <option value="Televisions">Televisions</option>
            <option value="Accessories">Accessories</option>
            <option value="Phones">Phones</option>
          </select> */}
        </div>
      </header>

      {/* Product Grid */}
      <section style={styles.grid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p style={styles.noProducts}>No products match your search or filter.</p>
        )}
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '2em',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2em',
  },
  title: {
    fontSize: '2em',
    marginBottom: '1em',
  },
  searchFilterContainer: {
    display: 'flex',
    gap: '1em',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    padding: '0.75em',
    borderRadius: '5px',
    border: '1px solid #ddd',
    width: '300px',
    fontSize: '1em',
  },
  filterDropdown: {
    padding: '0.75em',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1em',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5em',
  },
  noProducts: {
    textAlign: 'center',
    fontSize: '1.2em',
    color: '#888',
  },
};

export default Products;