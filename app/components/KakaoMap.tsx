"use client";

import { useEffect, useRef, useState } from "react";

interface KakaoMapProps {
  keyword: string;
}

export const KakaoMap = ({ keyword }: KakaoMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new window.kakao.maps.Map(mapRef.current, options);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const locPostion = new window.kakao.maps.LatLng(lat, lon);

          displayMarker(locPostion);
        });
      } else {
        const locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
        displayMarker(locPosition);
      }

      function displayMarker(locPosition) {
        const marker = new window.kakao.maps.Marker({
          map: map,
          position: locPosition,
        });

        const infowindow = new window.kakao.maps.InfoWindow({
          removable: true,
        });

        infowindow.open(map, marker);

        map.setCenter(locPosition);
      }
    });
  }, [keyword]);

  return <div ref={mapRef} className="w-full h-screen" />;
};
