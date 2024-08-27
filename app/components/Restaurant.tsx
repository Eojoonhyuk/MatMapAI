import Image from "next/image";

export const Restaurant = ({
  placeInformation,
}: {
  placeInformation: google.maps.places.Place;
}) => {
  const { photos, displayName, formattedAddress, rating, userRatingCount } =
    placeInformation;
  return (
    <div>
      <div className="min-w-80 max-h-36 overflow-hidden">
        <Image
          className="w-full h-full object-cover"
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
      <div className="flex flex-col gap-2 p-2">
        <p className="text-lg font-semibold">{displayName}</p>
        <p className="font-medium">주소: {formattedAddress}</p>
        <div className="font-medium">
          <span>평점: </span>
          <span>{rating}</span>
          <span>({userRatingCount})</span>
        </div>
      </div>
    </div>
  );
};
