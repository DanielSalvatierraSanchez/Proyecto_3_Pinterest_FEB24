import { renderPictures } from "../gallery/gallery.js";
// url de la API
const accessKey = 'sxCoc4OGN_P3Y-F7Fd7YiIFHGSrRqrsz3QHZITAcnHU';
// crear imagenes random
export async function imagesRandom() {
  const unsplashRandom = `https://api.unsplash.com/photos/random?count=12&client_id=${accessKey}`;
  const response = await fetch(unsplashRandom);
  const data = await response.json();
  console.log('CONSOLE LOG de DATA en imagesRandom.js', data);

  const main = document.querySelector('.image-container');
  main.innerHTML = '';

  renderPictures(data);
};