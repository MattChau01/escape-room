import React from 'react';
import Header from '../components/header';
import HomeAccordion from '../components/accordion';
import Carousel from '../components/carousel';
import imgOne from '../../server/public/room-images/img-1.jpg';
import imgTwo from '../../server/public/room-images/img-2.jpg';
import imgThree from '../../server/public/room-images/img-3.jpg';
import imgFour from '../../server/public/room-images/img-4.jpg';
// import imgFive from '../../server/public/room-images/img-5.png';

const images = [
  { id: 0, img: imgOne },
  { id: 1, img: imgTwo },
  { id: 2, img: imgThree },
  { id: 3, img: imgFour }
  // { id: 4, img: imgFive }
];

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: null
    };
  }

  render() {

    return (
      <div>
        <Header
          participants={this.props.participants}
          routeVSignin={this.props.routeVSignin}
          toHome={this.props.toHome}
          aboutUs={this.props.aboutUs} />
        <Carousel images={images} />
        <div className='mt-3'>
          <div className='d-flex justify-content-center align-items-center' style={{ fontFamily: 'tilt warp, cursive', fontSize: '1.25rem' }}>
            <p className='text-center'>Sign up today and <br /> find a room near you!</p>
          </div>
        </div>
        <div className='d-flex justify-content-center mt-3'>
          <div>
            <p style={{
              fontSize: '1.10rem'
            }}>
              Click one of the following if you are a:
            </p>
          </div>
        </div>
        <div className='d-flex justify-content-center align-items'>
          <div className='row mt-3'>
            <div className='viewer' style={{
              backgroundColor: '#1976D2',
              color: '#fff',
              borderRadius: '5rem',
              width: '7rem',
              textAlign: 'center',
              paddingTop: '.25rem',
              cursor: 'pointer'
            }} onClick={this.props.participants}>
              <a style={{
                fontSize: '1.25rem'
              }}>Participant</a>
            </div>
            <div className='mx-5'>
              <p>OR</p>
            </div>
            <div className='v-sign-up' style={{
              backgroundColor: '#1976D2',
              color: '#fff',
              borderRadius: '5rem',
              width: '7rem',
              textAlign: 'center',
              paddingTop: '.25rem',
              cursor: 'pointer'
            }} onClick={this.props.routeVSignup}>
              <a style={{
                fontSize: '1.25rem'
              }}>Vendor</a>
            </div>
          </div>
        </div>
        <HomeAccordion
          routeVSignup={this.props.routeVSignup}
        />
      </div>

    );
  }
}
