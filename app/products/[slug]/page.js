import ProductList from '@/app/components/product-list'
import { all_products } from '@/app/lib/all-products'

const catergories = [
    { title:'Laptops & Computers' , slug:'laptop-computers' },
    { title: 'Televisions' , slug:'televisions' }, 
    { title: 'Projectors' , slug:'projectors' },
    { title: 'Video Game Consoles' , slug:'gaming-consoles' },
    { title: 'Virtual Reality' , slug:'vr-headsets' },
    { title: 'Major Appliances' , slug:'appliances' },
    { title: 'Cell Phones' , slug:'cell-phones' },
    { title: 'Headphones' , slug:'headphones' },
    { title: 'PC Gaming' , slug:'pc-gaming' },
    { title: 'Tablets & E-Readers' , slug:'tablets-e-readers' },
    { title: 'Home Audio' , slug:'home-audio' },
    { title: 'Cameras & Camcorders' , slug:'cameras-camcorders' }, 
    { title: 'Drones' , slug:'drones' }, 
    { title: 'Wearable Technology' , slug:'wearable-tech' }, 
    { title: 'Smart Home, Security & Wi-Fi' , slug:'smarthome-security-wifi' }, 
    { title: 'Printers & Computer Accessories' , slug:'printers-computeraccessories' },
]

export default function Page (props) {

    const selectedProduct = all_products.filter((product) => product.category === props.params.slug)

    const selectedCatergory = catergories.find((catergory) => catergory.slug === selectedProduct[0].category)

    const display = selectedProduct.map((item , index) => <ProductList key={index} item={item} />) 

    return (
        <main style={{ padding: '2em', textAlign: 'center' }}>

            <h1 style={{ textAlign: 'center', fontSize: '2em', marginBottom: '1em' }}>{selectedCatergory.title}</h1>

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