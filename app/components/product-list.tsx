// import Link from 'next/link'
// import Image from 'next/image'

// export default function ProductList ({item}) {

//     return (
//         <div className='item'>

//             <div 
//                 style={{
//                 marginTop: '20px',
//                 }}
//             >

//                 <Link href={''} >
//                     <Image src={item.thumbnails[0]} alt={item.name} width={120} height={120} />
//                 </Link>

//                 <br></br>
//                 <br></br>

//                 <h3>{item.name}</h3>

//                 <br></br>

//                 <div
//                     style={{
//                         minWidth: '200px',
//                         minHeight: '100px',
//                         margin: '20px',
//                         marginTop: '-5px',
//                         marginLeft:'15px',
//                         marginRight: '15px,'
//                     }}
//                 >
//                     <p>
//                         {item.description}
//                     </p>
//                 </div>

//             </div>

//         </div>
//     )
// }

import Link from 'next/link';
import Image from 'next/image';

interface ProductItem {
  thumbnails: string[];
  name: string;
  description: string;
}

interface ProductListProps {
  item: ProductItem;
}

export default function ProductList({ item }: ProductListProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '1em',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '1em',
      maxWidth: '200px',
    }}>
      <Link href={''}>
        <Image src={item.thumbnails[0]} alt={item.name} width={120} height={120} style={{ borderRadius: '8px' }} />
      </Link>

      <h3 style={{
        fontSize: '1em',
        margin: '0.5em 0',
        color: '#333'
      }}>{item.name}</h3>

      <div style={{
        minWidth: '150px',
        minHeight: '80px',
        margin: '0.5em 0',
        color: '#555',
        fontSize: '0.9em',
      }}>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
