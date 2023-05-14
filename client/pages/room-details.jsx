// import React from 'react';
import React, { useState } from 'react';
import Header from '../components/header';

export default function RoomDetails(props) {

  const [listing] = useState(props.listings[0]); //eslint-disable-line

  console.log('props.listings: ', props.listings); //eslint-disable-line
  console.log('current prop: ', props.listings.entryId); //eslint-disable-line
  console.log('route: ', window.location.hash.slice()); //eslint-disable-line

  return (
    <>
      <Header participants={props.participants} routeVSignin={props.routeVSignin} toHome={props.toHome} />
      <div className='text-center mt-3'>

        ROOM DETAILS
        <div>
          {/* {props.listings.entryId} */}
        </div>
      </div>
    </>
  );
}
