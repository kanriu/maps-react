import { Map } from "mapbox-gl";

export const cleanRoute = (map?: Map) => {
  if (map?.getLayer("RouteString")) {
    map.removeLayer("RouteString");
    map.removeSource("RouteString");
  }
};
