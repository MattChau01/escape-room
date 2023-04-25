import React from 'react';
import Header from '../components/header';

export default function VendorSuccess(props) {

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Header routeVSignin={props.routeVSignin} toHome={props.toHome} />
      <div className='d-flex flex-column mt-5'>
        <div className='row justify-content-center'>
          <h2>
            Registration Complete!
          </h2>
        </div>
        <div className='row justify-content-center mt-5'>
          <h5>
            Click here to sign in:
          </h5>
        </div>
        <div className='row justify-content-center text-center'>
          <a className='v-signin' style={{ cursor: 'pointer', color: '#fff' }} onClick={props.routeVSignin} >
            Vendor Sign In
          </a>
        </div>

        <div className='row justify-content-center mt-5'>
          <h5 className='text-center'>
            Click here to return to home page:
          </h5>
        </div>
        <div className='row justify-content-center text-center'>
          <a className='home' style={{ cursor: 'pointer', color: '#fff' }} onClick={props.toHome} >
            Home Page
          </a>
        </div>

      </div>
    </div>
  );
}
