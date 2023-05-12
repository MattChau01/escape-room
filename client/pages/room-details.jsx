// import React from 'react';
import React, { useState } from 'react';

export default function RoomDetails(props) {

  const [listing] = useState(props.listings[0]); //eslint-disable-line

  console.log('props.listings: ', props.listings); //eslint-disable-line
  console.log('current prop: ', props.listings.entryId); //eslint-disable-line

  return (
    <div className='text-center'>

      ROOM DETAILS
      <div>
        {props.listings.entryId}
      </div>
    </div>
  );
}
