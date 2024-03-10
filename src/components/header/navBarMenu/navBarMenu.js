import './navBarMenu.css';
// crear elementos del menu => div > a + img * 3
export const createNavBarMenu = () => {
  const nav = document.querySelector('.nav');
  const divMenuNav = document.createElement('div');
  divMenuNav.className = 'div-menu-nav';
  // crear array de datos de cada enlace
  const dataNavBar = [
    { classOne: 'a-menu-nav a-notificacion', title: 'Notificaciones', classTwo: 'img-menu-nav', src: './campana.webp', alt: 'Notificaciones' },
    { classOne: 'a-menu-nav a-favorito', title: 'Favoritos', classTwo: 'img-menu-nav', src: './favorito.webp', alt: 'Favoritos' },
    { classOne: 'a-menu-nav a-perfil', title: 'Mi Perfíl', classTwo: 'img-menu-nav', src: './perfil.webp', alt: 'Perfil' }
  ];
  // bucle sobre el array de datos para crear los elementos
  dataNavBar.forEach(dataNavBar => {
    const aNavBar = document.createElement('a');
    aNavBar.className = dataNavBar.classOne;
    aNavBar.href = 'https://proyecto-3-picturest-mar24.netlify.app';
    aNavBar.target = '_blank';
    aNavBar.title = dataNavBar.title;
    const imgNavBar = document.createElement('img');
    imgNavBar.className = dataNavBar.classTwo;
    imgNavBar.src = dataNavBar.src;
    imgNavBar.alt = dataNavBar.alt;
    divMenuNav.appendChild(aNavBar);
    aNavBar.appendChild(imgNavBar);
  });
  nav.appendChild(divMenuNav);
};