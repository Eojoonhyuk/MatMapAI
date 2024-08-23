"use client";

import { MapProvider } from "@/providers/map-provider";
import { GoogleMap } from "@react-google-maps/api";
import { useCallback, useEffect, useState } from "react";
import {
  defaultMapCenter,
  defaultMapContainerStyle,
  defaultMapOptions,
  defaultMapZoom,
} from "../constants/map";
import { Marker } from "./Marker";

export const Map = ({ keyword }: { keyword: string }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [places, setPlaces] = useState<google.maps.places.Place[] | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const findPlaces = async (text: string) => {
    const { Place } = (await google.maps.importLibrary(
      "places"
    )) as google.maps.PlacesLibrary;
    const request = {
      textQuery: text,
      fields: ["displayName", "location"],
      locationBias: {
        center: map?.getCenter() || defaultMapCenter,
        radius: 2000,
      },
      includedType: "restaurant",
      maxResultCount: 10,
      language: "ko",
      region: "kr",
      useStrictTypeFiltering: false,
    };

    const { places } = await Place.searchByText(request);

    if (places.length) {
      setPlaces(places);

      const { LatLngBounds } = (await google.maps.importLibrary(
        "core"
      )) as google.maps.CoreLibrary;
      const bounds = new LatLngBounds();

      places.forEach((place) => {
        if (place.location) bounds.extend(place.location);
      });

      map?.setCenter(bounds.getCenter());
    } else {
      console.log("No results");
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const myLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        map?.setCenter(myLocation);
        map?.setZoom(16);
      });
    }
  }, [map]);

  useEffect(() => {
    if (keyword) {
      findPlaces(keyword);
    }
  }, [keyword]);

  return (
    <MapProvider>
      <div className="w-full h-full grow flex">
        <GoogleMap
          mapContainerStyle={defaultMapContainerStyle}
          center={defaultMapCenter}
          zoom={defaultMapZoom}
          options={defaultMapOptions}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {places && <Marker places={places} />}
        </GoogleMap>
      </div>
    </MapProvider>
  );
};
