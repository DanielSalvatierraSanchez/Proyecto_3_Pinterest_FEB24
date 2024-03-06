import './showMore.css';
import { imagesRandom } from "../gallery/imagesRandom.js";
import { searchImages } from "../gallery/searchImages.js";

let keyword = "";
let page = 1;

export function showMore() {
  const body = document.querySelector('body');
  const buttonPlus = document.createElement("button");
  buttonPlus.className = "button-plus";
  buttonPlus.textContent = "Mostrar +";
  buttonPlus.title = "Pulsa para cargar más imagenes";
  body.appendChild(buttonPlus);

  buttonPlus.addEventListener('click', () => {
    page++;
    if (keyword == "") {
      imagesRandom();
    } else {
      searchImages();
    };
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
};