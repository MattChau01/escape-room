import React from 'react';

export default function ListingsOverview(props) {
  return (
    <div key={props.item.entryId} className='catalog-container'>
      {/* TEST STYLING, NOT PERMANENT */}
      <div className='mt-3' style={{
        backgroundColor: '#ececec',
        width: '18rem',
        height: '16rem'
      }}>

        <div>
          {/* {item.entryId} */}
          <h5 className='row justify-content-center py-2'>
            {props.item.roomName}
          </h5>
          <img src={props.item.imageUrl} style={{ width: '8rem', height: '10rem', objectFit: 'cover' }} />
          <div className='row py-2'>

            <div className='col'>
              {/* ADD HASH ROUTING ACCORDING TO THE ENTRY ITEM */}
              Learn more
            </div>

            <div className='col'>
              Price here
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
