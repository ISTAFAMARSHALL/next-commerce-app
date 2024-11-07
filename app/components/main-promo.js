'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';

import img1 from '../lib/images/main-promo-imgs/Holidays - BOGO.webp';
import img2 from '../lib/images/main-promo-imgs/Deal of the Day.webp';
import img3 from '../lib/images/main-promo-imgs/Macbook-pro-PROMO.webp';
import img4 from '../lib/images/main-promo-imgs/Open Box Clearnace.webp';

const images = [
    { image: img1, alt: 'Holidays - BOGO' },
    { image: img2, alt: 'Deal of the Day' },
    { image: img3, alt: 'Macbook Pro Promo' },
    { image: img4, alt: 'Open Box Clearance' }
];

export default function MainPromo() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            
        }}>
            <Image
                src={images[currentImageIndex].image}
                alt={images[currentImageIndex].alt}
                width={600}
                height={600}
            />
        </div>
    );
}
