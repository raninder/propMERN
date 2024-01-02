import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];

const mapContainerStyle = {
  
  width: '58vw',
  height: '55vh',
  // width: '60%',
  // height: '50%',
 
};
const center = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
  // lat: 7.2905715, // default latitude
  // lng: 80.6337262, // default longitude
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
     googleMapsApiKey: process.env.REACT_APP_API_KEY,
  
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    // <div style={{ height: '450px', width: '450px' }}>
    <div className="google-map">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} text={center.address}/>
        
      </GoogleMap>
    </div>
    // </div>
  );
};

export default Map;
