import { useKakaoLoader } from "react-kakao-maps-sdk";

export default function useKakaoLoaderOrigin() {
  useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_MAP_KEY || "",
    libraries: ["services"],
  });
}
