import React from "react";
import GoogleMapReact from "google-map-react";
import "./GoogleMap.scss";

// const GoogleMap = ({ setCoordinates, setBounds, coordinates }) => {

const GoogleMap = ({ setCoordinates, setBounds }) => {
  const coordinates = { lat: 52.52, lng: 13.405 };
  return (
    <div>
      <h1>Hello Google Map</h1>
      <div id="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBmMQJzG7jLXfTSehj03f1flhH2blolem0" }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={8}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={(e) => {
            console.log("This is e property", e);
            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={""}
        ></GoogleMapReact>
      </div>
    </div>
  );
};

export default GoogleMap;
