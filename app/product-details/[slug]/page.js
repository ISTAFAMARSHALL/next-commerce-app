// // import { all_products } from '@/app/lib/all-products'
// // import Image from 'next/image'

// // export default function ProductDetails (props) {

// //     const item = all_products.find((item) => item.id === parseInt(props.params.slug))

// //     const descriptionDisplay = item.description.map((item , index) => <p key={index} >{item}</p>)

// //     return (
// //         <div style={{
// //             // display: 'flex',
// //             // flexDirection: 'column',
// //             // alignItems: 'center',
// //             // justifyContent: 'center',
// //             textAlign: 'center',
// //             padding: '1em',
// //             border: '1px solid #ddd',
// //             borderRadius: '8px',
// //             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
// //             margin: '1em',
// //             maxWidth: '800px',
// //           }}>

// //             <Image
// //               src={item.primaryImage}
// //               alt={item.name}
// //               width={240} // specify width of the image
// //               height={240} // specify height of the image
// //               style={{
// //                 borderRadius: '8px',
// //                 marginBottom: '1em'
// //               }}
// //             />

// //             <h3 style={{
// //                 fontSize: '1.25em',
// //                 margin: '1em 0',
// //                 color: '#333'
// //             }}>{item.name}</h3>

// //             <p style={{
// //               fontSize: '1.5em',
           
// //               textAlign: 'center'
// //             }}>
// //               {item.price ? `${item.price}` : 'Price not available'}
// //             </p>

// //             <ul>
// //                 { descriptionDisplay }
// //             </ul>


// //         </div>
// //     )
// // }

// import { all_products } from '@/app/lib/all-products'
// import Image from 'next/image'

// export default function ProductDetails (props) {
//     const item = all_products.find((item) => item.id === parseInt(props.params.slug))

//     const descriptionDisplay = item.description.map((item, index) => <p key={index}>{item}</p>)

//     return (
//         <div style={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             minHeight: '100vh', // Full viewport height for vertical centering
//             padding: '1em',
//             boxSizing: 'border-box',
//             backgroundColor: '#f8f9fa', // Light background for contrast
//         }}>
//             <div style={{
//                 textAlign: 'center',
//                 padding: '1em',
//                 border: '1px solid #ddd',
//                 borderRadius: '8px',
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                 maxWidth: '800px',
//                 width: '100%', // Full width within maxWidth constraints
//                 backgroundColor: '#fff',
//             }}>
//                 <Image
//                     src={item.primaryImage}
//                     alt={item.name}
//                     width={240}
//                     height={240}
//                     style={{
//                         borderRadius: '8px',
//                         marginBottom: '1em'
//                     }}
//                 />

//                 <h3 style={{
//                     fontSize: '1.5em',
//                     margin: '1em 0',
//                     color: '#333'
//                 }}>{item.name}</h3>

//                 <p style={{
//                     fontSize: '1.75em',
//                     color: '#007bff',
//                     fontWeight: 'bold'
//                 }}>
//                     {item.price ? `${item.price}` : 'Price not available'}
//                 </p>

//                 <ul style={{
//                     listStyleType: 'none',
//                     padding: '0',
//                     color: '#555'
//                 }}>
//                     {descriptionDisplay}
//                 </ul>
//             </div>
//         </div>
//     )
// }

import React from 'react';
import Image from 'next/image';

import { all_products } from '@/app/lib/all-products'

const ProductDetails = (props) => {

  const product = all_products.find((product) => product.id === parseInt(props.params.slug))

  const descriptionDisplay = product.description.map((product, index) => <p style={styles.description} key={index}>{product}</p>)

  const exampleProduct = {
    id: 1,
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and long battery life.',
    price: '$129',
    image: '/images/headphones.jpg',
    availability: 'In Stock',
    relatedProducts: [
      { id: 2, name: 'Over-Ear Headphones', image: '/images/over-ear.jpg', price: '$149' },
      { id: 3, name: 'Gaming Headset', image: '/images/gaming-headset.jpg', price: '$99' },
    ],
  };

  const productData = product || exampleProduct;

  return (
    <div style={styles.container}>
      {/* Product Card */}
      <div style={styles.card}>
        <Image
          src={productData.primaryImage}
          alt={productData.name}
          width={300}
          height={300}
          style={styles.image}
        />

        <h1 style={styles.title}>{productData.name}</h1>

        <p style={styles.price}>{productData.price}</p>
        {/* <p style={styles.availability}>{productData.availability}</p> */}

        <>{descriptionDisplay}</>

        <button style={styles.buyButton}>Buy Now</button>
      </div>

      {/* Related Products Section */}
      {/* <section style={styles.relatedSection}>
        <h2 style={styles.relatedTitle}>Similar Products</h2>
        <div style={styles.relatedGrid}>
          {productData.relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} style={styles.relatedCard}>
              <Image
                src={relatedProduct.image}
                alt={relatedProduct.name}
                width={150}
                height={150}
                style={styles.relatedImage}
              />
              <h3 style={styles.relatedName}>{relatedProduct.name}</h3>
              <p style={styles.relatedPrice}>{relatedProduct.price}</p>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '2em auto',
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    gap: '2em',
  },
  card: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '2em',
    textAlign: 'center',
  },
  image: {
    borderRadius: '10px',
    transition: 'transform 0.3s',
  },
  title: {
    fontSize: '1.5em',
    margin: '1em 0',
  },
  price: {
    fontSize: '1.2em',
    color: '#007bff',
    fontWeight: 'bold',
  },
  availability: {
    fontSize: '1em',
    color: '#28a745',
    marginBottom: '1em',
  },
  description: {
    fontSize: '1em',
    lineHeight: '1.6',
    marginBottom: '2em',
  },
  buyButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '0.75em 1.5em',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1em',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  buyButtonHover: {
    transform: 'scale(1.05)',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
  },
  relatedSection: {
    textAlign: 'center',
  },
  relatedTitle: {
    fontSize: '1.5em',
    marginBottom: '1em',
  },
  relatedGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1em',
  },
  relatedCard: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '1em',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  relatedImage: {
    borderRadius: '10px',
    marginBottom: '1em',
  },
  relatedName: {
    fontSize: '1em',
    marginBottom: '0.5em',
  },
  relatedPrice: {
    fontSize: '1em',
    color: '#007bff',
    fontWeight: 'bold',
  },
};

export default ProductDetails;