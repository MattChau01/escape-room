import React from 'react';
import Header from '../components/header';

export default function AboutUs(props) {
  return (
    <>
      <Header participants={props.participants} routeVSignin={props.routeVSignin} toHome={props.toHome} aboutUs={props.aboutUs} />
      <div className='mt-4 text-center'>
        About us section
      </div>
    </>
  );
}
