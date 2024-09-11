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
import { toast } from "react-toastify";

export const Map = ({ keyword }: { keyword: string }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [places, setPlaces] = useState<google.maps.places.Place[] | null>(null);
  const [myLocation, setMyLocation] =
    useState<google.maps.LatLngLiteral | null>(null);

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
      fields: [
        "displayName",
        "location",
        "id",
        "rating",
        "photos",
        "formattedAddress",
        "userRatingCount",
      ],
      locationBias: {
        center: myLocation || defaultMapCenter,
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

      map?.fitBounds(bounds);
    } else {
      toast("장소가 존재하지 않습니다.");
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const myLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setMyLocation(myLocation);
      });
    }
  }, []);

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
