import ProductList from '@/app/components/product-list'
import { phones } from '@/app/lib/phones'

export default function Home() {

  const display = phones.map((item , index) => <ProductList key={index} item={item} />) 
  
  return (
    <main>

      <div className='items grid-auto-fit' >

        {display}

      </div>

    </main>
  );
}
