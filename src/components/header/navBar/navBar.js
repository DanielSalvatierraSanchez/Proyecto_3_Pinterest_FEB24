import './navBar.css';
import { inputEmpty } from "../../main/inputEmpty/inputEmpty.js";
// crear NavBar en el header
const createNavBar = () => {
  const header = document.querySelector('#header');
  const nav = document.createElement('nav');
  nav.className = 'nav';
  header.appendChild(nav);
};
// crear input de busqueda => form > img > input > button
const createInputNav = () => {
  const nav = document.querySelector('.nav');
  const formInputNav = document.createElement('form');
  formInputNav.className = 'form-nav';
  // imagen de la lupa dentro del input
  const imgInput = document.createElement('img');
  imgInput.className = 'img-form-nav';
  imgInput.src = './lupa.webp';

  const inputNav = document.createElement('input');
  inputNav.className = 'input-form-nav';
  inputNav.type = 'text';
  inputNav.placeholder = 'Buscar...';

  const buttonInput = document.createElement('button');
  buttonInput.className = 'button-form-nav';
  buttonInput.type = 'submit';
  buttonInput.textContent = 'Limpiar';

  nav.appendChild(formInputNav);
  formInputNav.appendChild(imgInput);
  formInputNav.appendChild(inputNav);
  formInputNav.appendChild(buttonInput);
  // event al hacer 'click' en el button limpia el input y muestra mensaje, despues carga imagenes random (event.preventDefault() evita la recarga de la web)
  buttonInput.addEventListener('click', (event) => {
    event.preventDefault();
    inputNav.value = '';
    inputEmpty();
  });
};
// crear function para pintar functions
export const renderNavBar = () => {
  createNavBar();
  createInputNav();
};