import './gallery.css';
import { renderPictures } from "../pictures/pictures.js";

// crear contenedor para las imagenes
const createImageContainer = () => {
  const body = document.querySelector('body');
  const main = document.createElement('main');
  main.className = 'image-container';
  body.appendChild(main);
};

// url de la API
let keyword = "";
const accessKey = 'sxCoc4OGN_P3Y-F7Fd7YiIFHGSrRqrsz3QHZITAcnHU';

// crear imagenes random
export async function imagesRandom() {
  const unsplashRandom = `https://api.unsplash.com/photos/random?count=15&client_id=${accessKey}`;

  const response = await fetch(unsplashRandom);
  const data = await response.json();
  console.log(data);
  
  const main = document.querySelector('.image-container');
  main.innerHTML = '';
  renderPictures(data);
};

// crear imagenes introducidas en el input
// uso try catch para un mejor control de errores
export async function searchImages() {
  const input = document.querySelector('.input-form-nav');
  keyword = input.value;
  console.log('PALABRA DEL INPUT: ', keyword);
  const url = `https://api.unsplash.com/search/photos?page=1&query=${keyword}&per_page=15&client_id=${accessKey}`;

  try {
  const response = await fetch(url);
  const datas = await response.json();
  const data = datas.results;
  console.log('Respuesta de la API:', datas);
  console.log(data);
  const main = document.querySelector('.image-container');
  main.innerHTML = '';
  renderPictures(data);
  } catch (error) {console.error('ERROR EN EL searchImages', error);}
};

// creo event para que al introducir texto busque automaticamente las imagenes
document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.input-form-nav')
  input.addEventListener('input', () => {
    searchImages();
  });
});

const renderImages = () => {
  createImageContainer();
  imagesRandom();
  searchImages();
};
export { renderImages };

// no estoy usandolo ya que no hay manera de que funcione, genera error uncaught y hace una recarga de la pagina
/*
document.addEventListener('DOMContentLoaded', () => {
  const inputPressKey = document.querySelector('.input-form-nav')
  inputPressKey.addEventListener('keyup', (event) => {
    console.log('TECLA PRESIONADA: ', event.key);
    try {
      if (event.key === 'Enter') {
        event.preventDefault();
        console.log('SE HA PRESIONADO LA TECLA ENTER');
        searchImages();
      }
    } catch (error) {console.error('ERROR EN EL addEventListener KEYUP', error);}
  });
});*/