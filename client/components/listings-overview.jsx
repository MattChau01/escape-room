import React from 'react';

export default function ListingsOverview(props) {
  return (
    <div key={props.item.entryId} className='catalog-container'>
      {/* TEST STYLING, NOT PERMANENT */}
      <div className='mt-3' style={{
        backgroundColor: '#ececec',
        width: '18rem',
        height: '17rem'
      }}>

        <div>
          {/* {item.entryId} */}
          <div className='row justify-content-center py-2'>
            <h5 className='room-name' style={{
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              {props.item.roomName}
            </h5>
          </div>
          <div className='row justify-content-center'>
            <img src={props.item.imageUrl} style={{ width: '8rem', height: '10rem', objectFit: 'cover' }} />
          </div>
          <div className='row py-3'>

            <div className='col'>
              {props.item.difficulty}
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
