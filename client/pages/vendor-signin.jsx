import React from 'react';
import Header from '../components/header';

export default function VendorSignin(props) {
  return (
    <>
      <Header vendorSignin={props.vendorSignin} />
      <div className='text-center'>
        SIGN IN PAGE
      </div>
    </>
  );
}
