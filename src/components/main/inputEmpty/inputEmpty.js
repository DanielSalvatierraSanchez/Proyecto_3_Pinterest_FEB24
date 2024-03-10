import './inputEmpty.css';
import { imagesRandom } from "../imagesRandom/imagesRandom.js";
// crear function para que limpie el main y muestre un mensaje y despues de 4sec cargue imagenes random (se usara en el event del button "Limpiar")
export function inputEmpty() {
  const main = document.querySelector('.image-container');
  main.innerHTML = '';
  main.innerHTML = `<h2 class='input-empty' >Se ha vaciado el buscador. Cargando imágenes aleatorias....</h2>`;
  setTimeout(() => {
    main.innerHTML = '';
    imagesRandom();
  }, 4000);
};