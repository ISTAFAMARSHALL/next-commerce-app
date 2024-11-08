import TopCatergories from '@/app/components/top-catergories'
import MainPromo from '@/app/components/main-promo'
import Promos from '@/app/components/promos'
import FeaturedItems from '@/app/components/featured-items'

export default function Home() { 
  return (

    <div>

      <div style={{ display: 'flex' , padding: '2rem' }}>

        <MainPromo/>

        <TopCatergories></TopCatergories>

      </div>

      <div>

        Most viewed items 

      </div>

      <div>

        <FeaturedItems/>

      </div>

      <div>
        
        <Promos/>

      </div>


    </div>
  );
}
