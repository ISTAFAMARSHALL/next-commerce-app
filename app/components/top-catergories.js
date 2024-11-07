import Image from 'next/image';

import phoneIcon from '../lib/images/top-catergories/cellphone_icon_translucent.png'
import gamingIcon from '../lib/images/top-catergories/gaming_console_icon_translucent.png'
import laptopIcon from '../lib/images/top-catergories/laptop_icon_translucent.png'
import tvIcon from '../lib/images/top-catergories/tv_icon_translucent.png'

const images = [
    { image: phoneIcon, alt: 'cellphone_icon', catergory: 'Cell Phones' },
    { image: gamingIcon, alt: 'gaming_console_icon', catergory: 'Gaming Consoles' },
    { image: laptopIcon, alt: 'laptop_icon', catergory: 'Laptops' },
    { image: tvIcon, alt: 'tv_icon', catergory: 'TVs' }
]

const displayImages = images.map((image , index) => {
    return (
        
        <li 
        key={index}
            
        style={{
            
            margin: '5px',
            fontSize: '1rem',
            
            // font-size: 1rem;
            // border: 2.5px solid currentColor;
            // border-radius: 1rem; outline: 1px dotted currentColor;
            // outline-offset: -10px;

        }}>
            <Image src={image.image} alt={image.alt} width='125px' height='100px' ></Image>
            <br></br>
            {image.catergory}
        </li>
    
    )
})

export default function TopCatergories () {

    return(

        <div className='top-cat'
        style={{
            maxWidth: '40%',
            display: 'flex',
            flexWrap: 'wrap',
            textAlign: 'center',
            border: '2.5px solid currentColor',
            borderRadius: '1rem',
            right: '300px'
            

        }}>

            <h2 style={{ margin: '5px'}} >Today&apos;s Top Catergories</h2>

            <ul style={{

                display: 'flex',
                margin: '5px'
                
            }}>

                {displayImages}

            </ul>
        
        </div>

    )

}