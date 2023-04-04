export const getUserLocation = async (): Promise<[number, number]> => {
  return new Promise((resolver, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolver([coords.longitude, coords.latitude]);
      },
      (err) => {
        alert("No se pudo obtener la geolocalización");
        console.log(err);
        reject();
      }
    );
  });
};
