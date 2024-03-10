import './header.css';
// crear el header
const createHeader = () => {
  const body = document.querySelector('body');
  const header = document.createElement('header');
  header.id = 'header';
  body.appendChild(header);
};
// crear un logo para el header => div > a > img
const createHeaderLogo = () => {
  const header = document.querySelector('#header');
  const divHeader = document.createElement('div');
  divHeader.className = 'div-header';

  const aHeader = document.createElement('a');
  aHeader.className = 'a-header';
  aHeader.href = 'https://proyecto-3-picturest-mar24.netlify.app';
  aHeader.target = '_blank';

  const imgHeader = document.createElement('img');
  imgHeader.className = 'img-header';
  imgHeader.src = './logo2.webp';
  imgHeader.alt = 'Logo Pinterest';

  header.appendChild(divHeader);
  divHeader.appendChild(aHeader);
  aHeader.appendChild(imgHeader);
};
// pintar todo lo creado en el header
export const renderHeader = () => {
  createHeader();
  createHeaderLogo();
};