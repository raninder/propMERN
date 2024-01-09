import React from 'react';
import { GoogleMap, useLoadScript, Marker, MarkerF, InfoWindow} from '@react-google-maps/api';
// const FaAnchor = require("react-icons/lib/fa/anchor");
const libraries = ['places'];

const mapContainerStyle = {
  
  width: '58vw',
  height: '55vh',
 
};
// const center = {
//   address: '6323 St. Jamestown, Toronto CA',
//   lat: 43.668163994,
//   lng: -79.370331852
// };

let markers=[
  {
      id:1,
      lat: 43.668163994,
      lng: -79.370331852,
      address: '6323 St. Jamestown, Toronto CA',
      title:'marker 1'

  },
  {
      id: 2,
      lat: 73.668163994,
      lng: -99.370331852,
      address: '724 Olive Avenue, Toronto CA',
      title: 'marker 2'

  },
  {
      id: 3,
      lat: 13.668163994,
      lng: -49.370331852,
      address: '724 Olive Avenue, Toronto CA',
      title: 'marker 3'

  }
]
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
    <div className="google-map">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        // center = {center}
        center={markers[0]}
      >
        {/* <Marker position={center} text={center.address}/> */}
        <MarkerF position={markers[0]} title={markers[0].shelter} text={markers[0].shelter}>
            <InfoWindow position={markers[0]}>
        
              <div>
                
                  {markers[0].address}
              </div>
            </InfoWindow>
        </MarkerF>
            
        {/* {
            //Add a list of Markers to Your Map
            markers.map( (ele) =>
              <MarkerF
              key={ele.id}
              postion = {ele}
							// position={{ lat: ele.latitude, lng: ele.longitude }}
              title={ele.address}
							text={ele.address}
              />
                

            )
          } */}
      </GoogleMap>
    </div>
    // </div>
  );
};

export default Map;
