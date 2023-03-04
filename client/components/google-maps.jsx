import React from 'react';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
// CODE ABOVE HAS A MARKER, WHICH YOU CAN MARK A LOCATION ON MAP WHEN RENDERED
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

export default function Gmaps(props) {

  const { isLoaded } = useLoadScript({
    // googleMapsApiKey: 'process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY'
    googleMapsApiKey: 'AIzaSyAg1cYuBaHKWF7k2z-9RaVdKIrLW7tp8Kg'
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;

  // return (
  //   <div className='d-flex justify-content-center align-items-center'>
  //     <p>MAPS</p>
  //   </div>
  // );

  function Map() {
    return (
      <div className='mt-3 d-flex justify-content-center align-items-center'>
        <GoogleMap zoom={10} center={{ lat: 33, lng: -117 }} mapContainerStyle={{ width: '85%', height: '400px' }} />
      </div>
    );
  }

}
