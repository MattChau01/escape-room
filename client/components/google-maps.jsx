import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

export default function Gmaps(props) {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: ' '
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;

  function Map() {
    return (
      <div className='mt-3 d-flex justify-content-center align-items-center'>
        <GoogleMap zoom={10} center={{ lat: 33, lng: -117 }} mapContainerStyle={{ width: '85%', height: '400px' }} />
      </div>
    );
  }

}
