// import React from 'react';
import React, { useEffect } from 'react';

export default function ListingsOverview(props) {

  function roomDetails() {
    window.location.hash = `catalog?roomId=${props.item.entryId}`;
  }

  // console.log('entry id: ', props.item);
  useEffect(() => {
    // console.log('test');
    // console.log('item: ', props.item);
  });

  return (
    <div key={props.item.entryId} className='catalog-container'>

      <div className='mt-3' style={{
        backgroundColor: '#ececec',
        width: '21.6rem',
        height: '17rem'
      }}>

        <div>
          <div className='row justify-content-center py-2'>
            <a className='room-name' style={{
              color: '#000',
              fontSize: '1rem',
              cursor: 'pointer',
              textDecoration: 'underline'
            }} onClick={roomDetails}>
              {props.item.roomName}
            </a>
          </div>
          <div className='row justify-content-center'>
            <img src={props.item.imageUrl} style={{ width: '8rem', height: '10rem', objectFit: 'cover' }} />
          </div>
          <div className='row py-3'>

            <div className='col'>
              Difficulty: {props.item.difficulty}
            </div>

            <div className='col'>
              ${Number(props.item.price)} /person
            </div>

          </div>
        </div>

      </div>
    </div>
  );

}
