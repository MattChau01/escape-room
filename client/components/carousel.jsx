import React from 'react';
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

export default function Carousel(props) {
  // console.log('images: ', images[0].img);
  return (
    <div className='mt-3 d-flex justify-content-center'>
      {/* <img src={images[0].img} alt='img1' /> */}
      <img src={images[0].img} alt='imageOne' style={{ width: '180px' }}/>
      {/* TEST */}
    </div>
  );
}
