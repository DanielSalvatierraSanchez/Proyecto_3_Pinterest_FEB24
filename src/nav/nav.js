import './nav.css';
import { imagesRandom } from "../../src/gallery/gallery.js";

// crear NavBar en el header
const createNavBar = () => {
  const header = document.querySelector('.header');
  const nav = document.createElement('nav');
  nav.className = 'nav';
  header.appendChild(nav);
}

// crear input de busqueda => form > img > input > button
const createInputNav = () => {
  const nav = document.querySelector('.nav');
  const formInputNav = document.createElement('form');
  formInputNav.className = 'form-nav';

  // imagen de la lupa dentro del input
  const imgInput = document.createElement('img');
  imgInput.className = 'img-form-nav';
  imgInput.src = 'https://play-lh.googleusercontent.com/6Br-c2aSUrBfXDBZTs_Wz0yAybdVAVj75wvPTgJbpdXqUDwoMDyElFLNkpFlV4i03w';

  const inputNav = document.createElement('input');
  inputNav.className = 'input-form-nav';
  inputNav.type = 'text';
  inputNav.placeholder = 'Buscar...';

  const buttonInput = document.createElement('button');
  buttonInput.className = 'button-form-nav';
  buttonInput.textContent = 'Limpiar';
  buttonInput.type = 'submit';

  nav.appendChild(formInputNav);
  formInputNav.appendChild(imgInput);
  formInputNav.appendChild(inputNav);
  formInputNav.appendChild(buttonInput);
}

// crear elementos del menu => div > a + img * 3
const createMenuNav = () => {
  const nav = document.querySelector('.nav');
  const divMenuNav = document.createElement('div');
  divMenuNav.className = 'div-menu-nav';

  const aNotificacion = document.createElement('a');
  aNotificacion.className = 'a-menu-nav';
  aNotificacion.classList = 'a-notificacion';
  aNotificacion.href = imagesRandom();
  aNotificacion.target = '_blank';
  aNotificacion.title = 'Notificaciones';
  const imgNotificacion = document.createElement('img');
  imgNotificacion.className = 'img-menu-nav';
  imgNotificacion.src = '../../public/campana.png';

  const aFavorito = document.createElement('a');
  aFavorito.className = 'a-menu-nav';
  aFavorito.classList = 'a-favorito';
  aFavorito.href = imagesRandom();
  aFavorito.target = '_blank';
  aFavorito.title = 'Favoritos';
  const imgFavorito = document.createElement('img');
  imgFavorito.className = 'img-menu-nav';
  imgFavorito.src = '../../public/favorito.png';

  const aPerfil = document.createElement('a');
  aPerfil.className = 'a-menu-nav';
  aPerfil.classList = 'a-perfil';
  aPerfil.href = imagesRandom();
  aPerfil.target = '_blank';
  aPerfil.title = 'Mi Perfíl';
  const imgPerfil = document.createElement('img');
  imgPerfil.className = 'img-menu-nav';
  imgPerfil.src = '../../public/perfil.png';

  nav.appendChild(divMenuNav);
  divMenuNav.appendChild(aNotificacion);
  aNotificacion.appendChild(imgNotificacion);
  divMenuNav.appendChild(aFavorito);
  aFavorito.appendChild(imgFavorito);
  divMenuNav.appendChild(aPerfil);
  aPerfil.appendChild(imgPerfil);
};

// crear function para pintar functions
const renderNavBar = () => {
  createNavBar();
  createInputNav();
  createMenuNav();
}
export { renderNavBar };