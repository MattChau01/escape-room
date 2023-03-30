import React from 'react';
import Header from '../components/header';

export default function VSuccess(props) {

  function returnHome() {
    window.location.hash = '#';
  }

  return (
    <div>
      <Header />
      <div className='d-flex flex-column mt-5'>
        <div className='row justify-content-center'>
          <h2>
            Registration complete!
          </h2>
        </div>
        <div className='row justify-content-center mt-5'>
          <h5>
            To sign in, click here:
          </h5>
        </div>
        <div className='row justify-content-center'>
          <a style={{ cursor: 'pointer' }}>
            Vendor sign in
          </a>
        </div>

        <div className='row justify-content-center mt-5'>
          <h5 className='text-center'>
            Click here to return to home page:
          </h5>
        </div>
        <div className='row justify-content-center'>
          <a style={{ cursor: 'pointer' }} onClick={returnHome} >
            Home page
          </a>
        </div>

      </div>
    </div>
  );
}
