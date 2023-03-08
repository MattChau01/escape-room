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
    <div className='mt-3 d-flex justify-content-center align-items-center'>
      {/* <img src={images[0].img} alt='imageOne' style={{ width: '180px' }}/> */}
      <div className='row'>
        <div >
          <div className='left-arrow'>
            <div style={{ fontWeight: 600, fontSize: '25px' }}>
              &lt;
            </div>
          </div>
        </div>
        <div className='home-carousel'>
          <img src={images[0].img} className='home-carousel-img' />
        </div>
        <div>
          <div className='right-arrow'>
            <div style={{ fontWeight: 600, fontSize: '25px' }}>
              &gt;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
