import Image from 'next/image';

import phoneIcon from '../lib/images/top-catergories/cellphone_icon_resized.png'
import gamingIcon from '../lib/images/top-catergories/gaming_console_icon_resized.png'
import laptopIcon from '../lib/images/top-catergories/laptop_icon_resized.png'
import tvIcon from '../lib/images/top-catergories/tv_icon_resized.png'

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
            
            display: 'grid'
             
        }}>
            <Image src={image.image} alt={image.alt} width='125px' height='100px' ></Image>
            <br></br>
            {image.catergory}
        </li>
    
    )
})

export default function TopCatergories () {

    return(

        <div style={{

        }}>

            <h2>Today&apos;s Top Catergories</h2>

            <ul style={{
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>

                {displayImages}

            </ul>
        
        </div>

    )

}