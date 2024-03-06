import './header.css';

// crear el header
const createHeader = () => {
  const body = document.querySelector('body');
  const header = document.createElement('header');
  header.id = 'header';
  body.appendChild(header);
}

// crear un logo para el header => div > a > img
const createHeaderLogo = () => {
  const header = document.querySelector('#header');
  const divHeader = document.createElement('div');
  divHeader.className = 'div-header';

  const aHeader = document.createElement('a');
  aHeader.className = 'a-header';
  aHeader.href = 'https://www.pinterest.es/';
  aHeader.target = '_blank';

  const imgHeader = document.createElement('img');
  imgHeader.className = 'img-header';
  imgHeader.src = '../../../public/assets/logo2.webp';
  imgHeader.alt = 'Logo Pinterest';

  header.appendChild(divHeader);
  divHeader.appendChild(aHeader);
  aHeader.appendChild(imgHeader);
}

//crear menu en el header => div > a *3
const createHeaderList = () => {
  const header = document.querySelector('#header');
  const divHeader = document.createElement('div');
  divHeader.className = 'menu-header';

  const aHeaderInicio = document.createElement('a');
  aHeaderInicio.className = 'a-menu-header';
  aHeaderInicio.classList = 'a-inicio';
  aHeaderInicio.textContent = 'Inicio';
  aHeaderInicio.href = 'https://www.pinterest.es/';
  aHeaderInicio.target = '_blank';
  aHeaderInicio.title = 'Acceso directo a una nueva página de inicio';

  const aHeaderExplorar = document.createElement('a');
  aHeaderExplorar.className = 'a-menu-header';
  aHeaderExplorar.classList = 'a-explorar';
  aHeaderExplorar.textContent = 'Explorar';
  aHeaderExplorar.href = 'https://www.pinterest.es/ideas/';
  aHeaderExplorar.target = '_blank';
  aHeaderExplorar.title = 'Haz click y conoce las novedades de hoy!!!';

  const aHeaderCrear = document.createElement('a');
  aHeaderCrear.className = 'a-menu-header';
  aHeaderCrear.classList = 'a-crear';
  aHeaderCrear.textContent = 'Crear';
  aHeaderCrear.href = 'https://www.pinterest.es/';
  aHeaderCrear.target = '_blank';
  aHeaderCrear.title = 'Crea un nuevo Pin y publicalo!!!';

  header.appendChild(divHeader);
  divHeader.appendChild(aHeaderInicio);
  divHeader.appendChild(aHeaderExplorar);
  divHeader.appendChild(aHeaderCrear);
}

// pintar todo lo creado en el header
const renderHeader = () => {
  createHeader();
  createHeaderLogo();
  createHeaderList();
}
export { renderHeader };