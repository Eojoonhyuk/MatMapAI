"use client";

import { useEffect, useRef } from "react";

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
          const message = `<div>여기에 계신가요?</div>`;

          displayMarker(locPostion, message);
        });
      } else {
        const locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
        const message = "geolocation을 사용할수 없어요..";

        displayMarker(locPosition, message);
      }

      function displayMarker(locPosition, message: string) {
        const marker = new window.kakao.maps.Marker({
          map: map,
          position: locPosition,
        });

        const infowindow = new window.kakao.maps.InfoWindow({
          content: message,
          removable: true,
        });

        infowindow.open(map, marker);

        map.setCenter(locPosition);
      }
    });
  }, [keyword]);

  return <div ref={mapRef} className="w-full h-80" />;
};
