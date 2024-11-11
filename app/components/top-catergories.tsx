// import Image from 'next/image';

// import phoneIcon from '../lib/images/top-catergories/cellphone_icon_translucent.png'
// import gamingIcon from '../lib/images/top-catergories/gaming_console_icon_translucent.png'
// import laptopIcon from '../lib/images/top-catergories/laptop_icon_translucent.png'
// import tvIcon from '../lib/images/top-catergories/tv_icon_translucent.png'

// const images = [
//     { image: phoneIcon, alt: 'cellphone_icon', catergory: 'Cell Phones' },
//     { image: gamingIcon, alt: 'gaming_console_icon', catergory: 'Gaming Consoles' },
//     { image: laptopIcon, alt: 'laptop_icon', catergory: 'Laptops' },
//     { image: tvIcon, alt: 'tv_icon', catergory: 'TVs' }
// ]

// const displayImages = images.map((image , index) => {
//     return (
        
//         <div
//         key={index}
            
//         style={{
//             justifySelf: 'space-around',
//             margin: '5px',
//             fontSize: '1rem',
//             padding: '1rem',
//         }}>
//             <Image src={image.image} alt={image.alt} width='125px' height='100px' ></Image>
//             <br></br>
//             {image.catergory}
//         </div>
    
//     )
// })

// export default function TopCatergories () {

//     return(

//         <div className='top-cat'
//         style={{
//             maxHeight: '250px',
//             textAlign: 'center',
//             border: '2.5px solid currentColor',
//             borderRadius: '1rem',
//             padding: '1rem',
            

//         }}>

//             <h2 style={{ margin: '5px'}} >Today&apos;s Top Catergories</h2>

//             <div style={{

//                 display: 'flex',
//                 margin: '5px',
//                 padding: '1rem',
                
//             }}>

//                 {displayImages}

//             </div>
        
//         </div>

//     )

// }

// import Image from 'next/image';
// import phoneIcon from '../lib/images/top-catergories/cellphone_icon_translucent.png';
// import gamingIcon from '../lib/images/top-catergories/gaming_console_icon_translucent.png';
// import laptopIcon from '../lib/images/top-catergories/laptop_icon_translucent.png';
// import tvIcon from '../lib/images/top-catergories/tv_icon_translucent.png';

// const images = [
//     { image: phoneIcon, alt: 'cellphone_icon', category: 'Cell Phones' },
//     { image: gamingIcon, alt: 'gaming_console_icon', category: 'Gaming Consoles' },
//     { image: laptopIcon, alt: 'laptop_icon', category: 'Laptops' },
//     { image: tvIcon, alt: 'tv_icon', category: 'TVs' }
// ];

// export default function TopCategories() {
//     return (
//         <div style={{
//             maxWidth: '300px',
//             textAlign: 'center',
//             border: '2.5px solid currentColor',
//             borderRadius: '1rem',
//             padding: '1rem',
//         }}>
//             <h2 style={{ margin: '5px' }}>Today's Top Categories</h2>
//             <div style={{
//                 display: 'flex',
//                 flexWrap: 'wrap',
//                 justifyContent: 'space-around',
//                 gap: '1em',
//                 padding: '1rem',
//             }}>
//                 {images.map((image, index) => (
//                     <div key={index} style={{
//                         textAlign: 'center',
//                     }}>
//                         <Image src={image.image} alt={image.alt} width={80} height={80} style={{ borderRadius: '50%' }} />
//                         <p style={{ fontSize: '1rem', marginTop: '0.5em' }}>{image.category}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

'use client';

import Image from 'next/image';
import phoneIcon from '../lib/images/top-catergories/cellphone_icon_translucent.png';
import gamingIcon from '../lib/images/top-catergories/gaming_console_icon_translucent.png';
import laptopIcon from '../lib/images/top-catergories/laptop_icon_translucent.png';
import tvIcon from '../lib/images/top-catergories/tv_icon_translucent.png';

const images = [
    { image: phoneIcon, alt: 'cellphone_icon', category: 'Cell Phones' },
    { image: gamingIcon, alt: 'gaming_console_icon', category: 'Gaming Consoles' },
    { image: laptopIcon, alt: 'laptop_icon', category: 'Laptops' },
    { image: tvIcon, alt: 'tv_icon', category: 'TVs' }
];

export default function TopCategories() {
    return (
        <div style={{
            maxWidth: '500px',
            textAlign: 'center',
            border: '2.5px solid currentColor',
            borderRadius: '1rem',
            padding: '1rem',
        }}>
            <h2 style={{ margin: '5px' }}>Today's Top Categories</h2>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '2em',
                padding: '1rem',
            }}>
                {images.map((image, index) => (
                    <div key={index} style={{
                        textAlign: 'center',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                    }}>
                        <div style={{
                            display: 'inline-block',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            cursor: 'pointer',
                        }} className="hoverEffect">
                            <Image
                                src={image.image}
                                alt={image.alt}
                                width={80}
                                height={80}
                            />
                        </div>
                        <p style={{ fontSize: '1rem', marginTop: '0.5em' }}>{image.category}</p>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .hoverEffect:hover {
                    transform: scale(1.1);
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
                }
            `}</style>
        </div>
    );
}
