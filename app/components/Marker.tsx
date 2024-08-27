"use client";

import { InfoWindowF, MarkerF } from "@react-google-maps/api";
import { useState } from "react";
import { Restaurant } from "./Restaurant";

export const Marker = ({ places }: { places: google.maps.places.Place[] }) => {
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);

  return (
    <>
      {places.map(
        (place) =>
          place.location && (
            <MarkerF
              key={place.id}
              position={place.location}
              onMouseOver={() => setSelectedPlaceId(place.id)}
              onMouseOut={() => setSelectedPlaceId(null)}
            >
              {selectedPlaceId === place.id && (
                <InfoWindowF position={place.location}>
                  <Restaurant placeInformation={place} />
                </InfoWindowF>
              )}
            </MarkerF>
          )
      )}
    </>
  );
};
