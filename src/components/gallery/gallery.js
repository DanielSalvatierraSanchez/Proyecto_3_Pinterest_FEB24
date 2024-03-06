import './gallery.css';

// crear contenedor para las imagenes
export const createImageContainer = () => {
  const body = document.querySelector('body');
  const main = document.createElement('main');
  main.className = 'image-container';
  body.appendChild(main);
};