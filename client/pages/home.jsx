import React from 'react';
import Header from '../components/header';
import HomeAccordion from '../components/accordion';
import Carousel from '../components/carousel';
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
      <div className='mt-4'>
        <div className='d-flex justify-content-center align-items-center' style={{ fontFamily: 'tilt warp, cursive', fontSize: '1.25rem' }}>
          <p className='text-center'>Sign up today and <br /> find a room near you!</p>
        </div>
      </div>
      <Carousel images={images}/>
      <div className='d-flex justify-content-center mt-3'>
        <div>
          <p>
            Click one of the following if you are a:
          </p>
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <div className='row mt-3'>
          <div>
            <button>Participant</button>
          </div>
          <div className='mx-5'>
            <p>OR</p>
          </div>
          <div>
            <button>Vendor</button>
          </div>
        </div>
      </div>
      <HomeAccordion />
    </div>
  );
}
