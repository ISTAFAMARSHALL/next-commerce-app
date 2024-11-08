import { all_products } from '../lib/all-products';
import ProductList from '@/app/components/product-list'

export default function FeaturedItems() {

    // Function to get 15 random products from the all_products array
    const getRandomProducts = (products, count) => {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    // Select 15 random products
    const selectedProducts = getRandomProducts(all_products, 12);

    // Map over the selected products to display them
    const display = selectedProducts.map((item, index) => <ProductList key={index} item={item} />);

    return (
        <main>
            
            <h1 style={{ textAlign: 'center', justifyContent: 'space-around'}}>Featured Items</h1>

            <div className='items grid-auto-fit' >

                {display}

            </div>

        </main>

    );
}