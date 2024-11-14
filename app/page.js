import TopCategories from '@/app/components/top-catergories';
import MainPromo from '@/app/components/main-promo';
import Promos from '@/app/components/promos';
import FeaturedItems from '@/app/components/featured-items';
import TopViewedProducts from '@/app/components/top-viewed-products'

export default function Home() { 
  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: '2rem',
        padding: '2rem',
        flexWrap: 'wrap',
      }}>
        <MainPromo />
        <TopCategories />
      </div>

      <TopViewedProducts />

      <FeaturedItems />

      <Promos />
    </div>
  );
}


