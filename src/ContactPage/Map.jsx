import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Circle,
  InfoWindow,
  Marker,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "80vh",
};

const countries = [
  {
    name: "Oman",
    center: { lat: 23.5859, lng: 58.4059 },
    email: "OMAN@geoduke.com",
    address: "1263 Way, Seeb, Oman",
  },
  {
    name: "UAE",
    center: { lat: 24.4539, lng: 54.3773 },
    email: "UAE@geoduke.com",
    address: "Al Sufouh 2 – Dubai, United Arab Emirates",
  },
  {
    name: "Saudi Arabia",
    center: { lat: 24.7136, lng: 46.6753 },
    email: "KSA@geoduke.com",
    address: "Riyadh, Saudi Arabia",
  },
  {
    name: "USA",
    center: { lat: 38.8833, lng: -77.0167 },
    email: "USA@geoduke.com",
    address: "Bartonville, Texas, US",
  },
];

const circleOptions = {
  strokeColor: "#4285F4",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#4285F4",
  fillOpacity: 0.2,
  clickable: true,
  draggable: false,
  editable: false,
  visible: true,
  radius: 300000,
  zIndex: 1,
};

const Map = () => {
  const [selected, setSelected] = useState(null);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCefPe7kaa3J_YGPNBaDFf3Guhlk5I24Q4">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: 30, lng: 30 }}
        zoom={3}
      >
        {countries.map((country, idx) => (
          <React.Fragment key={idx}>
            <Circle
              center={country.center}
              options={circleOptions}
              onClick={() => setSelected(country)}
            />
            <Marker
              position={country.center}
              onClick={() => setSelected(country)}
              visible={false}
            />
          </React.Fragment>
        ))}
        {selected && (
          <InfoWindow
            position={selected.center}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h3 className="font-bold mb-2">{selected.name}</h3>
              <p>
                <b>Address:</b> {selected.address}
              </p>
              <p>
                <b>Email:</b> {selected.email}
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
