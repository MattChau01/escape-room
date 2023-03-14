import React from 'react';
import Header from '../components/header';
// import SearchBar from '../components/search-bar';
import HomeAccordion from '../components/accordion';
import Carousel from '../components/carousel';
import imgOne from '../../server/public/room-images/img-1.png';
import imgTwo from '../../server/public/room-images/img-2.png';
import imgThree from '../../server/public/room-images/img-3.png';
import imgFour from '../../server/public/room-images/img-4.png';
import imgFive from '../../server/public/room-images/img-5.png';
import DrawerComp from '../components/drawer';

const images = [
  { id: 0, img: imgOne },
  { id: 1, img: imgTwo },
  { id: 2, img: imgThree },
  { id: 3, img: imgFour },
  { id: 4, img: imgFive }
];

export default function Home(props) {
  return (
    <div>
      <Header />
      <DrawerComp />
      <div className='mt-4'>
        <div className='d-flex justify-content-center align-items-center' style={{ fontFamily: 'tilt warp, cursive', fontSize: '1.25rem' }}>
          <p className='text-center'>Sign up today and <br /> find a room near you!</p>
        </div>
        {/* <SearchBar /> */}
      </div>
      <Carousel images={images}/>
      <HomeAccordion />
    </div>
  );
}
