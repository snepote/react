import React from "react";
import { LoadScript, GoogleMaps } from "react-google-maps";

export default function Map(props) {
  return(
    <LoadScript id="script-loader" googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap id="example-map" center={props.center} />
    </LoadScript>
  );
}
