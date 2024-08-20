"use client";

import { MapProvider } from "@/providers/map-provider";
import { GoogleMap } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import {
  defaultMapCenter,
  defaultMapContainerStyle,
  defaultMapOptions,
  defaultMapZoom,
} from "../constants/map";

export const Map = ({ keyword }: { keyword: string }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [center, setCenter] = useState<google.maps.LatLngLiteral | null>(null);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const myLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setCenter(myLocation);
    });
  }

  const onLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  return (
    <MapProvider>
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={center || defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
        onLoad={onLoad}
        onUnmount={onUnmount}
      />
    </MapProvider>
  );
};
