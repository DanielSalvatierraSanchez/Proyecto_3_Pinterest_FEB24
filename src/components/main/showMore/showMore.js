import './showMore.css';
import { searchImages } from '../searchImages/searchImages.js';
import { imagesRandom } from "../imagesRandom/imagesRandom.js";
//crear function para añadir al event del button (si hay palabra en el input muestra mas y sino muestra imagenes random)
export function showMore() {
  const input = document.querySelector('.input-form-nav');
  let keyword = input.value;
  if (keyword) {
  searchImages();
  } else {
    imagesRandom();
  };
};
// crear button Mostrar+ y event con una function
export function createShowMoreButton() {
  const body = document.querySelector('body');
  const buttonPlus = document.createElement("button");
  buttonPlus.className = "button-plus";
  buttonPlus.textContent = "Mostrar +";
  buttonPlus.title = "Pulsa para cargar más imágenes";
  body.appendChild(buttonPlus);

  buttonPlus.addEventListener('click', () => {
    showMore();
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
};