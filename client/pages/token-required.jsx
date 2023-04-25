import React from 'react';
import Header from '../components/header';

export default function TokenRequired(props) {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Header routeVSignin={props.routeVSignin} toHome={props.toHome} />
      <div className='d-flex flex-column text-center mt-5'>
        <div className='row justify-content-center'>
          <h2>
            Please sign in!
          </h2>
        </div>
        <div className='row justify-content-center mt-5'>
          <p>
            In order to access this page, you must be<br />signed in with a vendor&apos;s account
          </p>
        </div>

        <div className='row justify-content-center mt-5'>
          <h5>
            To create an account, click here:
          </h5>
        </div>
        <div className='row justify-content-center'>
          <a className='v-signup' style={{ cursor: 'pointer', color: '#fff' }} onClick={props.routeVSignup} >
            Vendor sign up
          </a>
        </div>

        <div className='row justify-content-center mt-5'>
          <h5 className='text-center'>
            Click here to return to home page:
          </h5>
        </div>
        <div className='row justify-content-center'>
          <a className='home' style={{ cursor: 'pointer', color: '#fff' }} onClick={props.toHome} >
            Home page
          </a>
        </div>
      </div>
    </div>
  );
}
