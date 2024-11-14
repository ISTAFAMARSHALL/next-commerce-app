// import TopCatergories from '@/app/components/top-catergories'
// import MainPromo from '@/app/components/main-promo'
// import Promos from '@/app/components/promos'
// import FeaturedItems from '@/app/components/featured-items'

// export default function Home() { 
//   return (

//     <div>

//       <div style={{ display: 'flex' , padding: '2rem' }}>

//         <MainPromo/>

//         <TopCatergories></TopCatergories>

//       </div>

//       <div>

//         Most viewed items 

//       </div>

//       <div>

//         <FeaturedItems/>

//       </div>

//       <div>
        
//         <Promos/>

//       </div>


//     </div>
//   );
// }


// import TopCategories from '@/app/components/top-catergories';
// import MainPromo from '@/app/components/main-promo';
// import Promos from '@/app/components/promos';
// import FeaturedItems from '@/app/components/featured-items';

// export default function Home() { 
//   return (
//     <div>
//       <div style={{
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         gap: '1rem', // Reduced gap to bring components closer
//         padding: '2rem',
//         flexWrap: 'wrap',
//       }}>
//         <MainPromo />
//         <TopCategories />
//       </div>

//       <div style={{ textAlign: 'center', margin: '2rem 0' }}>
//         Most viewed items 
//       </div>

//       <FeaturedItems />

//       <Promos />
//     </div>
//   );
// }

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


