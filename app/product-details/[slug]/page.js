// import { all_products } from '@/app/lib/all-products'
// import Image from 'next/image'

// export default function ProductDetails (props) {

//     const item = all_products.find((item) => item.id === parseInt(props.params.slug))

//     const descriptionDisplay = item.description.map((item , index) => <p key={index} >{item}</p>)

//     return (
//         <div style={{
//             // display: 'flex',
//             // flexDirection: 'column',
//             // alignItems: 'center',
//             // justifyContent: 'center',
//             textAlign: 'center',
//             padding: '1em',
//             border: '1px solid #ddd',
//             borderRadius: '8px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//             margin: '1em',
//             maxWidth: '800px',
//           }}>

//             <Image
//               src={item.primaryImage}
//               alt={item.name}
//               width={240} // specify width of the image
//               height={240} // specify height of the image
//               style={{
//                 borderRadius: '8px',
//                 marginBottom: '1em'
//               }}
//             />

//             <h3 style={{
//                 fontSize: '1.25em',
//                 margin: '1em 0',
//                 color: '#333'
//             }}>{item.name}</h3>

//             <p style={{
//               fontSize: '1.5em',
           
//               textAlign: 'center'
//             }}>
//               {item.price ? `${item.price}` : 'Price not available'}
//             </p>

//             <ul>
//                 { descriptionDisplay }
//             </ul>


//         </div>
//     )
// }

import { all_products } from '@/app/lib/all-products'
import Image from 'next/image'

export default function ProductDetails (props) {
    const item = all_products.find((item) => item.id === parseInt(props.params.slug))

    const descriptionDisplay = item.description.map((item, index) => <p key={index}>{item}</p>)

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh', // Full viewport height for vertical centering
            padding: '1em',
            boxSizing: 'border-box',
            backgroundColor: '#f8f9fa', // Light background for contrast
        }}>
            <div style={{
                textAlign: 'center',
                padding: '1em',
                border: '1px solid #ddd',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                maxWidth: '800px',
                width: '100%', // Full width within maxWidth constraints
                backgroundColor: '#fff',
            }}>
                <Image
                    src={item.primaryImage}
                    alt={item.name}
                    width={240}
                    height={240}
                    style={{
                        borderRadius: '8px',
                        marginBottom: '1em'
                    }}
                />

                <h3 style={{
                    fontSize: '1.5em',
                    margin: '1em 0',
                    color: '#333'
                }}>{item.name}</h3>

                <p style={{
                    fontSize: '1.75em',
                    color: '#007bff',
                    fontWeight: 'bold'
                }}>
                    {item.price ? `${item.price}` : 'Price not available'}
                </p>

                <ul style={{
                    listStyleType: 'none',
                    padding: '0',
                    color: '#555'
                }}>
                    {descriptionDisplay}
                </ul>
            </div>
        </div>
    )
}