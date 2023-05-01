import React from 'react';
// TEST
// import RoomDetails from '../pages/room-details';
// import App from '../app';

export default function ListingsOverview(props) {

  function roomDetails() {
    window.location.hash = `catalog?roomId=${props.item.entryId}`;
    // <RoomDetails item={props.item} />;
    // console.log('test: ', props.item);
    // <App item={props.item} />;
  }

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
