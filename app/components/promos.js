import Image from 'next/image';

import img1 from '../lib/images/promos/RocketFish-Promo.jpeg';
import img3 from '../lib/images/promos/Chromebook-Promo.jpeg';
import img4 from '../lib/images/promos/Sony-Mini-LED-Promo.jpeg';

const images = [

    { image: img1, alt: 'Rocket-Fish' },
    { image: img3, alt: 'Chromebook' },
    { image: img4, alt: 'Sony-Mini-LED' },

]

const displaysimages = images.map((image , index) => {

    return (

        <div key={index}>
            <Image src={image.image} alt={image.alt} width='100px' height='100px' />
        </div>    
    )
})

export default function Promos () {

    return (

        <ul style={{
            justifyContent: 'space-around',
            padding: '1rem',
            margin: '5px',
            display: 'flex'
        }}>

           {displaysimages}

        </ul>

    )
    
}