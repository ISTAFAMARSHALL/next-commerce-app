import ProductList from '@/app/components/product-list'
import { all_products } from '@/app/lib/all-products'

export default function Page (props) {

    const selectedProduct = all_products.filter((product) => product.category === props.params.slug)

    const display = selectedProduct.map((item , index) => <ProductList key={index} item={item} />) 

    return (
        <main>

            <div className='items grid-auto-fit' >

                {display}

            </div>

        </main>
    )
}