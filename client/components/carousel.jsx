import React from 'react';
// import React, { useEffect, useState } from 'react';
// import imgOne from '../../server/public/room-images/img-1.png';
// import imgTwo from '../../server/public/room-images/img-2.png';
// import imgThree from '../../server/public/room-images/img-3.png';
// import imgFour from '../../server/public/room-images/img-4.png';
// import imgFive from '../../server/public/room-images/img-5.png';

// const images = [
//   { id: 0, img: imgOne },
//   { id: 1, img: imgTwo },
//   { id: 2, img: imgThree },
//   { id: 3, img: imgFour },
//   { id: 4, img: imgFive }
// ];

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // pageLoaded: false,
      count: 0
    };
    this.autoScroll = this.autoScroll.bind(this);
    this.prevImg = this.prevImg.bind(this);
    this.nextImg = this.nextImg.bind(this);
  }

  componentDidMount() {
    // console.log('loaded');
    // this.setState({ pageLoaded: true });
    this.autoScroll();
  }

  autoScroll() {
    this.timer = setInterval(() => {
      if (this.state.count === 4) {
        this.setState({ count: 0 });
      } else {
        this.setState({ count: this.state.count + 1 });
      }
    }, 2000);
  }

  prevImg() {
    if (this.state.count === 0) {
      this.setState({ count: 4 });
    } else if (this.state.count <= 4) {
      this.setState({ count: this.state.count - 1 });
    }

    clearInterval(this.timer);
    this.autoScroll();
  }

  nextImg() {
    if (this.state.count === 4) {
      this.setState({ count: 0 });
    } else if (this.state.count >= 0) {
      this.setState({ count: this.state.count + 1 });
    }

    clearInterval(this.timer);
    this.autoScroll();
  }

  render() {
    return (
      <div className='mt-3 d-flex justify-content-center align-items-center'>
        {/* <img src={images[0].img} alt='imageOne' style={{ width: '180px' }}/> */}
        <div className='row justify-between'>
          <div >
            <div>
              <div className='left-arrow' onClick={this.prevImg} >
                &lt;
              </div>
            </div>
          </div>
          <div className='home-carousel'>
            <img src={this.props.images[this.state.count].img} className='home-carousel-img' />
            {/* {images.map(image =>
            <img key={image.id} src={image.img} className='home-carousel-img' />
          )} */}
          </div>
          <div>
            <div>
              <div className='right-arrow' onClick={this.nextImg}>
                &gt;
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default function Carousel(props) {
//   // console.log('images: ', images[0].img);

//   const [count, setCount] = useState(0);

//   // useEffect(() => {
//   //   setInterval(setCount(+1), 1000);
//   // }, [count]);

//   function autoScroll() {
//     const timer = setInterval(() => {
//       if (count === 4) {
//         setCount(0);
//       } else {
//         setCount(count + 1);
//       }
//     }, 2000);
//   }

//   // useEffect(() => {
//   //   setInterval(() => {
//   //     if (count === 4) {
//   //       setCount(0);
//   //     } else {
//   //       setCount(count + 1);
//   //     }
//   //   }, 5000);
//   // }, [count]);

//   useEffect(() => {
//     autoScroll();
//   });

//   function prevImg(event) {
//     console.log('count: ', count);
//     event.preventDefault();
//     clearInterval(autoScroll);

//     if (count === 0) {
//       setCount(4);
//     } else if (count > 0) {
//       setCount(count - 1);
//     }
//     autoScroll();
//   }

//   function nextImg(event) {
//     console.log('count: ', count);
//     event.preventDefault();
//     clearInterval(autoScroll);

//     if (count === 4) {
//       setCount(0);
//     } else if (count < 4) {
//       setCount(count + 1);
//     }
//     autoScroll();
//   }

//   console.log('count: ', count);

//   return (
//     <div className='mt-3 d-flex justify-content-center align-items-center'>
//       {/* <img src={images[0].img} alt='imageOne' style={{ width: '180px' }}/> */}
//       <div className='row'>
//         <div >
//           <div className='left-arrow'>
//             <div style={{ fontWeight: 600, fontSize: '20px', border: 'none', cursor: 'pointer' }} onClick={prevImg} >
//               &lt;
//             </div>
//           </div>
//         </div>
//         <div className='home-carousel'>
//           {/* TEST: MAPPING THRU ARRAY OF IMAGES */}
//           <img src={images[count].img} className='home-carousel-img' />
//           {/* {images.map(image =>
//             <img key={image.id} src={image.img} className='home-carousel-img' />
//           )} */}
//         </div>
//         <div>
//           <div className='right-arrow'>
//             <div style={{ fontWeight: 600, fontSize: '20px', border: 'none', cursor: 'pointer' }} onClick={nextImg}>
//               &gt;
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
