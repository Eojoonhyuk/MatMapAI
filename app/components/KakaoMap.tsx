"use client";

import { useEffect, useRef, useState } from "react";
import { Map, useKakaoLoader } from "react-kakao-maps-sdk";
import useKakaoLoaderOrigin from "./use-kakao-loader";

interface KakaoMapProps {
  keyword: string;
}

export const KakaoMap = ({ keyword }: KakaoMapProps) => {
  useKakaoLoaderOrigin();

  const [center, setCenter] = useState({ lat: 33.450701, lng: 126.570667 });
  const mapRef = useRef<HTMLElement>(null);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      setCenter({ lat: latitude, lng: longitude });
    });
  }

  useEffect(() => {}, [keyword]);

  return (
    <Map
      center={center}
      style={{ width: "100%", height: "100%", flexGrow: 1 }}
      level={3}
    />
  );
};
