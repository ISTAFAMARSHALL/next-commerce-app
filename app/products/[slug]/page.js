import ProductList from '@/app/components/product-list'
import { phones } from '@/app/lib/phones'

const display = phones.map((item , index) => <ProductList key={index} item={item} />) 

export default function Page () {

    return (
        <main>

            <div className='items grid-auto-fit' >

                {display}

            </div>

        </main>
    )
}