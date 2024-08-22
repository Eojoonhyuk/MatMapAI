"use client";

import { MarkerF } from "@react-google-maps/api";

export const Marker = ({ places }: { places: google.maps.places.Place[] }) => {
  return (
    <>
      {places.map(
        (place) =>
          place.location && <MarkerF key={place.id} position={place.location} />
      )}
    </>
  );
};
