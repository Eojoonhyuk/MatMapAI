import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Skeleton } from "./Skeleton";
import { useState } from "react";

export const Restaurant = ({
  placeInformation,
}: {
  placeInformation: google.maps.places.Place;
}) => {
  const { photos, displayName, formattedAddress, rating, userRatingCount } =
    placeInformation;

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-80">
      {isLoading && <Skeleton />}
      <div className={`w-full ${isLoading ? "h-0" : "h-36"}`}>
        <Image
          className="w-full h-full"
          src={
            (photos && photos[0] && photos[0].getURI()) ||
            "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png"
          }
          width={300}
          height={200}
          alt="장소 이미지"
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
      <div
        className={`w-full flex-col gap-2 p-2 ${isLoading ? "hidden" : "flex"}`}
      >
        <p className="text-lg font-semibold">{displayName}</p>
        <p className="font-medium">{formattedAddress}</p>
        <div className="flex gap-1 font-medium">
          <FaStar color="yellow" />
          <div>
            <span>{rating}</span>
            <span>({userRatingCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
};
