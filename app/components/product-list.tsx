import Image from 'next/image';

interface ProductItem {
  id: number;
  thumbnails: string[];
  name: string;
  description: string;
  price: string;
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
      
      <Image src={item.thumbnails[0]} alt={item.name} width={120} height={120} style={{ borderRadius: '8px' }} />
      
      <a href={`/product-details/${item.id}`} >
        <h3 style={{
          fontSize: '1em',
          margin: '0.5em 0',
          color: '#333'
        }}>{item.name}</h3>
      </a>

      <p style={{
          fontSize: '1.75em',
          color: '#007bff',
          fontWeight: 'bold'
      }}>
        {item.price ? `${item.price}` : 'Price not available'}
      </p>

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