import './headerLinks.css';
//crear menu en el header => div > a *3
export const createHeaderLinks = () => {
  const header = document.querySelector('#header');
  const divHeader = document.createElement('div');
  divHeader.className = 'menu-header';
  // crear array de datos de cada enlace
  const dataHeader = [
    { text: 'Inicio', url: 'https://proyecto-3-picturest-mar24.netlify.app', class: 'a-menu-header a-inicio', title: 'Acceso directo a una nueva página de inicio' },
    { text: 'Explorar', url: 'https://proyecto-3-picturest-mar24.netlify.app', class: 'a-menu-header a-explorar', title: 'Haz click y conoce las novedades de hoy!!!' },
    { text: 'Crear', url: 'https://proyecto-3-picturest-mar24.netlify.app', class: 'a-menu-header a-crear', title: 'Crea un nuevo Pin y publicalo!!!' }
  ];
  // bucle sobre el array de datos para crear los elementos
  dataHeader.forEach(dataHeader => {
    const aHeader = document.createElement('a');
    aHeader.className = dataHeader.class;
    aHeader.href = dataHeader.url;
    aHeader.target = '_blank';
    aHeader.textContent = dataHeader.text;
    aHeader.title = dataHeader.title;
    divHeader.appendChild(aHeader);
  });
  header.appendChild(divHeader);
};