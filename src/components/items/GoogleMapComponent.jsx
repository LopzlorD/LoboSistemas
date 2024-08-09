// GoogleMapComponent.jsx
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -16.392398346990657,
  lng: -71.54109601425587
};
function GoogleMapComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDqs96rIJJp9mvlP4IaRdosq5aj2an7JyI" // Reemplaza con tu API key
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={50}
      >
        {/* Children components, like markers or shapes */}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(GoogleMapComponent);
