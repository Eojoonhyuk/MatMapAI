import Image from "next/image";
import { FaStar } from "react-icons/fa";

export const Restaurant = ({
  placeInformation,
}: {
  placeInformation: google.maps.places.Place;
}) => {
  const { photos, displayName, formattedAddress, rating, userRatingCount } =
    placeInformation;
  return (
    <div>
      <div className="w-80 h-36">
        <Image
          className="w-full h-full"
          src={
            photos && photos.length > 0
              ? photos[0].getURI()
              : "/default/place.png"
          }
          width={300}
          height={200}
          alt="장소 이미지"
        />
      </div>
      <div className="w-80 flex flex-col gap-2 p-2">
        <p className="text-lg font-semibold">{displayName}</p>
        <p className="font-medium">{formattedAddress}</p>
        <div className="flex gap-1 font-medium">
          <FaStar color="yellow" />
          <span>{rating}</span>
          <span>({userRatingCount})</span>
        </div>
      </div>
    </div>
  );
};
