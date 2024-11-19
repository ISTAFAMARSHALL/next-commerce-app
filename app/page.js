import ShopByCategory from '@/app/components/shop-by-category';

import Promos from '@/app/components/promos';

import FeaturedItems from '@/app/components/featured-items';

import TrendingProducts from '@/app/components/trending-products'

import HeroBanner from '@/app/components/hero-banner'

export default function Home() { 

  return (
    <div>

      <div style={{
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // gap: '2rem',
        padding: '8rem',
        // flexWrap: 'wrap',
      }}>

        <HeroBanner/>

        <ShopByCategory />

      

      <TrendingProducts />

      <FeaturedItems />

      <Promos />

      </div>

    </div>

  );

}


