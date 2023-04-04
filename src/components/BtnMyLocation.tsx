import { useContext } from "react";
import { MapContext, PlacesContext } from "../context";
import IconMapPinUserFill from "../assets/svg/IconMapPinUserFill";

export const BtnMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if (!isMapReady) throw new Error("El mapa no está listo");
    if (!userLocation) throw new Error("No hay ubicación de usuario");
    map?.flyTo({
      zoom: 14,
      center: userLocation,
    });
  };
  return (
    <IconMapPinUserFill
      className="icon-my-location pointer"
      onClick={onClick}
    />
  );
};
