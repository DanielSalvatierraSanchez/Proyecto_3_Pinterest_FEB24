import './noResults.css';
import { imagesRandom } from "../imagesRandom/imagesRandom.js";
// crear function para que si el input esta vacio o no hay resultados muestre un mensaje y despues de 5sec cargue imagenes random
export function noResults() {
  const main = document.querySelector('.image-container');
  main.innerHTML = '';
  main.innerHTML = `<h2 class='no-results' >No se han encontrado resultados. Cargando imágenes aleatorias....</h2>`;
  setTimeout(() => {
    main.innerHTML = '';
    imagesRandom();
  }, 5000);
};