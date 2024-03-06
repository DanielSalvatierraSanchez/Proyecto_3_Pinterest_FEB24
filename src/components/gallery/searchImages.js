import './gallery.css';
import { renderPictures } from "./pictures.js";

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
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&per_page=15&client_id=${accessKey}`;
  const response = await fetch(url);
  const datas = await response.json();
  const data = datas.results;
  console.log('Respuesta de la API:', datas);
  console.log(data);
  
  const main = document.querySelector('.image-container');
  main.innerHTML = '';
  
  renderPictures(data);

  // si no hay datos en el input que muestre mensaje al user
  if (data.length === 0) {
      const main = document.querySelector('.image-container');
      const inputEmpty = document.createElement('h2');
      inputEmpty.className = 'input-empty';
      inputEmpty.textContent = 'No se ha encontrado ninguna imagen.';
      main.appendChild(inputEmpty);
    };
  } catch (error) {console.error('ERROR EN EL searchImages', error)};
};

// creo event para que al cambiar, como tabular o al hacer click en cualquier sitio en blanco, realice la busqueda
document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.input-form-nav');
  input.addEventListener('change', () => {
    searchImages();
  });
});

// creo event para que al Enter realice la busqueda
document.addEventListener('DOMContentLoaded', () => {
  const inputPressKey = document.querySelector('.input-form-nav');
  inputPressKey.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      searchImages();
    }
  });
});