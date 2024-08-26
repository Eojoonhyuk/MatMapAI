import Image from "next/image";

export const Restaurant = ({
  placeInformation,
}: {
  placeInformation: google.maps.places.Place;
}) => {
  const { photos, displayName, formattedAddress, rating, userRatingCount } =
    placeInformation;
  return (
    <div className="flex flex-col gap-2">
      {photos && (
        <div style={{ maxHeight: "150px", overflow: "hidden" }}>
          <Image
            src={photos[0].getURI()}
            width={300}
            height={200}
            alt="장소 이미지"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
      )}
      <p className="text-lg	">{displayName}</p>
      <p className="">{formattedAddress}</p>
      <div>
        <span className="">{rating}</span>
        <span className="">{userRatingCount}</span>
      </div>
    </div>
  );
};
