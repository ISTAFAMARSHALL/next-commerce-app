import ProductList from '@/app/components/product-list'
import { all_products } from '@/app/lib/all-products'

const headlines = [
    { title:'Smart Buy Deal of the Day!' , slug:'deal-of-the-day' },
    { title: 'MacBook Pro' , slug:'macbook-promo' }, 
    { title: 'Check out our Clearnace Sale!' , slug:'clearance' },
    { title: 'Smart Buy Holiday Deals!' , slug:'sale' },
    { title: 'Rocket-Fish' , slug: 'rocket-fish' },
    { title: 'Chromebook' , slug: 'chromebook' },
    { title: 'Sony-Mini-LED' , slug: 'sony-mini-lED' },
]

export default function Promos (props) {

    let selectedProducts;

    if (props.params.slug === 'deal-of-the-day') {

        const getRandomProduct = (products, count) => {
            if (!products || products.length === 0) {
              return []; // Return an empty array if products is undefined or empty
            }
            const shuffled = [...products].sort(() => 0.5 - Math.random());
            const reshuffled = [...shuffled].sort(() => 0.5 - Math.random());
            return reshuffled.slice(0, count);
        };
        
        // Select 12 random products
        selectedProducts = getRandomProduct(all_products, 1);

    }

    if (props.params.slug === 'macbook-promo') {

        selectedProducts = all_products.filter((product) => product.name.includes('MacBook'))
        
    }

    if (props.params.slug === 'clearance') {

        selectedProducts = all_products.filter((product) => product.onClearance === true )
        
    }

    if (props.params.slug === 'sale') {

        selectedProducts = all_products.filter((product) => product.onSale === true )
        
    }

    if (props.params.slug === 'rocket-fish') {

        selectedProducts = all_products.filter((product) => product.name.includes('Rocket'))
        
    }

    if (props.params.slug === 'chromebook') {

        selectedProducts = all_products.filter((product) => product.name.includes('Chromebook'))
        
    }

    if (props.params.slug === 'sony-mini-lED') {

        selectedProducts = all_products.filter((product) => product.name.includes('Sony'))
        
    }

    const selectedHeadline = headlines.find((headline) => headline.slug === props.params.slug)

    const display = selectedProducts.map((item , index) => <ProductList key={index} item={item} />) 

    return (
        <main style={{ padding: '2em', textAlign: 'center' }}>

            <h1 style={{ textAlign: 'center', fontSize: '2em', marginBottom: '1em' }}>{selectedHeadline.title}</h1>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1em',
                padding: '1em',
                justifyItems: 'center',
            }}>

                {display}

            </div>

        </main>
        
    )
}