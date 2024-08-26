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
              onClick={() => setSelectedPlaceId(place.id)}
            >
              {selectedPlaceId === place.id && (
                <InfoWindowF
                  position={place.location}
                  onCloseClick={() => setSelectedPlaceId(null)}
                >
                  <Restaurant placeInformation={place} />
                </InfoWindowF>
              )}
            </MarkerF>
          )
      )}
    </>
  );
};
