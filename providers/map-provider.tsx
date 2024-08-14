"use client";

import { Libraries, useJsApiLoader } from "@react-google-maps/api";
import { ReactNode } from "react";

const libraries = ["places", "drawing", "geometry"];

export function MapProvider({ children }: { children: ReactNode }) {
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_KEY as string,
    libraries: libraries as Libraries,
  });

  if (loadError) return <p>구글맵 로딩 에러입니다.</p>;

  if (!scriptLoaded) return <p>로딩 중입니다.</p>;

  return children;
}
