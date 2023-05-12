import React from 'react';
// import React, { useEffect, useState } from 'react';

export default function ListingsOverview(props) {

  // const [hash, setHash] = useState(window.location.hash);

  // useEffect(() => {

  //   setHash(`catalog?roomId=${props.item.entryId}`);
  //   console.log('hash: ', hash); //eslint-disable-line

  // }, [props]);

  // console.log('hash: ', hash.slice(1));

  function roomDetails() {
    window.location.hash = `catalog?roomId=${props.item.entryId}`;
  }

  return (
    <div key={props.item.entryId} className='catalog-container'>

      {/* {
        (hash === `catalog?roomId=${props.item.entryId}`)
        ?
        (

        )
        :
        (

        )
      } */}

      <div className='mt-3' style={{
        backgroundColor: '#ececec',
        width: '21.25rem',
        height: '17rem'
      }}>

        <div>
          <div className='row justify-content-center py-2'>
            <a className='room-name' style={{
              color: '#000',
              fontSize: '1.25rem',
              fontWeight: 600,
              cursor: 'pointer'
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
