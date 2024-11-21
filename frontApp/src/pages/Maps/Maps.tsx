import React from "react";
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api';

import Layout from "@components/Layout";

const Maps: React.FC = (): JSX.Element => {

  const BikeRouteMap = () => {
    const bikeRoute = [
      { lat: 40.7128, lng: -74.0060 },
      { lat: 40.7138, lng: -74.0070 },
    ];

    return (
      <LoadScript googleMapsApiKey="your-google-maps-api-key">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '500px' }}
          center={{ lat: 40.7128, lng: -74.0060 }}
          zoom={13}
        >
          <Polyline
            path={bikeRoute}
            options={{
              strokeColor: '#0000FF',
              strokeOpacity: 0.8,
              strokeWeight: 5,
            }}
          />
        </GoogleMap>
      </LoadScript>
    );
  }

  return (
    <Layout children={<BikeRouteMap />} />
  );
};

export default Maps;
