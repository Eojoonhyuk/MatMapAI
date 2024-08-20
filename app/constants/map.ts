export const defaultMapContainerStyle = {
  width: "100%",
  height: "100%",
};

export const defaultMapCenter = {
  lat: 37.56100278,
  lng: 126.9996417,
};

export const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  disableDefaultUI: true,
  styles: [
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ],
};

export const defaultMapZoom = 18;
