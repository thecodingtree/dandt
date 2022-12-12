import { useState, useRef } from 'react';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const MapPreview = () => {
  const containerStyle = {
    width: '600px',
    height: '400px',
  };

  const position = {
    lat: 18.480987396372637,
    lng: -66.685398555694,
  };

  //18.480987396372637, -66.685398555694

  const onload = (marker) => {
    console.log('marker: ', marker);
  };

  return (
    <LoadScript googleMapsApiKey='AIzaSyACL4cRdq4cgz8ur-yjEAuywmtsnzfrDCQ'>
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={15}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={position} onLoad={onload} />
      </GoogleMap>
    </LoadScript>
  );
};
