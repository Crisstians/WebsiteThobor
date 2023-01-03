import React from 'react';
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '500px',
  height: '400px'
};

const center = {
  lat: 45.8465599,
  lng: 27.4267733
};

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBjirh1ClVmRSUX7Mvg_sZL6AZYZlOhj1I'
  });

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={16}
      center={center}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Map;