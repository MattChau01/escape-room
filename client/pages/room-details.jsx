import React from 'react';

export default function RoomDetails(props) {
  return (
    <div className='text-center'>
      ROOM DETAILS
      <div>
        {props.item.entryId}
      </div>
    </div>
  );
}
