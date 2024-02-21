// crear NavBar en el header
const createNavBar = () => {
  const header = document.querySelector('.header')
  const nav = document.createElement('nav')
  nav.className = 'nav'
  header.appendChild(nav)
}

// crear input de busqueda div > img > input > button 
const createInputNav = () => {
  const nav = document.querySelector('.nav')
  const formInputNav = document.createElement('form')
  formInputNav.className = 'form-nav'

  const imgInput = document.createElement('img')
  imgInput.className = 'img-form-nav'
  imgInput.src = 'https://play-lh.googleusercontent.com/6Br-c2aSUrBfXDBZTs_Wz0yAybdVAVj75wvPTgJbpdXqUDwoMDyElFLNkpFlV4i03w'

  const inputNav = document.createElement('input')
  inputNav.className = 'input-form-nav'
  inputNav.type = 'text'
  inputNav.placeholder = 'Escribeme lo que quieres que te encuentre...'

  const buttonInput = document.createElement('button')
  buttonInput.className = 'button-form-nav'
  buttonInput.textContent = 'Buscar'
  buttonInput.type = 'submit'

  nav.appendChild(formInputNav)
  formInputNav.appendChild(imgInput)
  formInputNav.appendChild(inputNav)
  formInputNav.appendChild(buttonInput)
}

// crear elementos del menu div > a + img * 3
const createMenuNav = () => {
  const nav = document.querySelector('.nav')
  const divMenuNav = document.createElement('div')
  divMenuNav.className = 'div-menu-nav'

  const aNotificacion = document.createElement('a')
  aNotificacion.className = 'a-menu-nav'
  aNotificacion.classList = 'a-notificacion'
  aNotificacion.href = 'https://www.pinterest.es/'
  aNotificacion.target = '_blank'
  aNotificacion.title = 'Notificaciones'
  const imgNotificacion = document.createElement('img')
  imgNotificacion.className = 'img-menu-nav'
  imgNotificacion.src = 'https://cdn-icons-png.flaticon.com/512/1156/1156949.png'

  const aFavorito = document.createElement('a')
  aFavorito.className = 'a-menu-nav'
  aFavorito.classList = 'a-favorito'
  aFavorito.href = 'https://www.pinterest.es/'
  aFavorito.target = '_blank'
  aFavorito.title = 'Favoritos'
  const imgFavorito = document.createElement('img')
  imgFavorito.className = 'img-menu-nav'
  imgFavorito.src = 'https://cdn-icons-png.flaticon.com/512/520/520428.png'

  const aPerfil = document.createElement('a')
  aPerfil.className = 'a-menu-nav'
  aPerfil.classList = 'a-perfil'
  aPerfil.href = 'https://www.pinterest.es/'
  aPerfil.target = '_blank'
  aPerfil.title = 'Mi Perfíl'
  const imgPerfil = document.createElement('img')
  imgPerfil.className = 'img-menu-nav'
  imgPerfil.src = 'https://cdn-icons-png.flaticon.com/512/5987/5987424.png'

  nav.appendChild(divMenuNav)
  divMenuNav.appendChild(aNotificacion)
  aNotificacion.appendChild(imgNotificacion)
  divMenuNav.appendChild(aFavorito)
  aFavorito.appendChild(imgFavorito)
  divMenuNav.appendChild(aPerfil)
  aPerfil.appendChild(imgPerfil)
}

// crear VAR para pintar funciones
const renderNavBar = () => {
  createNavBar()
  createInputNav()
  createMenuNav()
}
export { renderNavBar }