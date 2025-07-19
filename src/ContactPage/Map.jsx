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
    email: "info@oman.com",
    address: "Muscat, Oman",
    phone: "+968 1234 5678",
  },
  {
    name: "UAE",
    center: { lat: 24.4539, lng: 54.3773 },
    email: "info@uae.com",
    address: "Abu Dhabi, UAE",
    phone: "+971 1234 5678",
  },
  {
    name: "Saudi Arabia",
    center: { lat: 24.7136, lng: 46.6753 },
    email: "info@saudi.com",
    address: "Riyadh, Saudi Arabia",
    phone: "+966 1234 5678",
  },
  {
    name: "USA",
    center: { lat: 38.8833, lng: -77.0167 },
    email: "info@usa.com",
    address: "Washington, USA",
    phone: "+1 123-456-7890",
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
              <h3>{selected.name}</h3>
              <p>
                <b>Address:</b> {selected.address}
              </p>
              <p>
                <b>Email:</b> {selected.email}
              </p>
              <p>
                <b>Phone:</b> {selected.phone}
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
