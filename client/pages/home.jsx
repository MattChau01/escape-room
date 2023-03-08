import React from 'react';
import Header from '../components/header';
import SearchBar from '../components/search-bar';
// import Gmaps from '../components/google-maps';
import HomeAccordion from '../components/accordion';
import Carousel from '../components/carousel';

// TEST
import imgOne from '../../server/public/room-images/img-1.png';
import imgTwo from '../../server/public/room-images/img-2.png';
import imgThree from '../../server/public/room-images/img-3.png';
import imgFour from '../../server/public/room-images/img-4.png';
import imgFive from '../../server/public/room-images/img-5.png';

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
      <SearchBar />
      {/* <Gmaps /> */}
      <Carousel images={images}/>
      <HomeAccordion />
    </div>
  );
}
