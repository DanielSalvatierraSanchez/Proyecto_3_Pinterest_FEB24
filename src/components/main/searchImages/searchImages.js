import { renderPictures } from "../gallery/gallery.js";
import { noResults } from "../noResults/noResults.js";
// url de la API
let keyword = "";
let page = 1;
const accessKey = 'sxCoc4OGN_P3Y-F7Fd7YiIFHGSrRqrsz3QHZITAcnHU';
// crear imagenes introducidas en el input
// uso try catch para un mejor control de errores
export async function searchImages() {
  const input = document.querySelector('.input-form-nav');
  keyword = input.value;
  console.log('PALABRA DEL INPUT: ', keyword);
  try {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&per_page=12&client_id=${accessKey}`;
  const response = await fetch(url);
  const datas = await response.json();
  const data = datas.results;
  console.log('CONSOLE LOG de DATA en searchImages.js', data);

  const main = document.querySelector('.image-container');
  main.innerHTML = '';

  renderPictures(data);
  page++;
  // si no hay datos en el input que muestre mensaje al user
  //noResults();
  } catch (error) {console.error('DANI TIENES UN ERROR EN EL searchImages.js', error)};
};
// creo event para que al cambiar, como tabular o al hacer click en cualquier sitio en blanco, realice la busqueda (event.preventDefault() evita la recarga de la web)
document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.input-form-nav');
  input.addEventListener('change', (event) => {
    event.preventDefault();
    searchImages();
  });
});
// creo event para que al hacer Enter realice la busqueda (event.preventDefault() evita la recarga de la web)
document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.input-form-nav');
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      searchImages();
    }
  });
});