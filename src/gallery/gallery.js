// crear contenedor para las imagenes
const createImageContainer = () => {
  const body = document.querySelector('body')
  const main = document.createElement('main')
  main.className = 'image-container'
  body.appendChild(main)
}

// url de las fotos
let keyword = "";
const accessKey = 'sxCoc4OGN_P3Y-F7Fd7YiIFHGSrRqrsz3QHZITAcnHU'
const unsplashRandom = `https://api.unsplash.com/photos/random?count=12&client_id=${accessKey}`
const url = `https://api.unsplash.com/search/photos?query=${keyword}&per_page=12&client_id=${accessKey}`

// crear imagenes random
const imagesRandom = async () => {
  try {
    const api = await fetch(unsplashRandom)
    const apiJson = await api.json()
    console.log(apiJson)
    const main = document.querySelector('.image-container')
    main.innerHTML = ''
    
    for (const random of apiJson) {
      const imageRandom = document.createElement('img')
      imageRandom.className = 'image-random'
      imageRandom.src = random.urls.small
      const imageLink = document.createElement('a')
      imageLink.href = random.links.html
      imageLink.target = '_blank'
      imageLink.appendChild(imageRandom)
      main.appendChild(imageLink)
    }
  } catch (error) {
    console.error('Algo ha salido mal en el randonImages 😅', error)
  }
}

const searchImages = async () => {
  try {
    const input = document.querySelector('input')
    let keyword = input.value;
    console.log('Palabra de búsqueda:', keyword)
    /*    NO LO PONGO A PRUEBA TODAVIA YA QUE NO ME FUNCIONA EL INPUT
    if (!keyword) {
      alert('No hay ninguna imagen que coincida con la descripcion')
      return
    }*/
    const accessKey = 'sxCoc4OGN_P3Y-F7Fd7YiIFHGSrRqrsz3QHZITAcnHU'
    const url = `https://api.unsplash.com/search/photos?query=${keyword}&per_page=12&client_id=${accessKey}`
    const response = await fetch(url)
    const data = await response.json()
    console.log('Respuesta de la API:', data)
    console.log(data.results)

    const main = document.querySelector('.image-container')
    main.innerHTML = ''

    for (const images of data.results) {
      const image = document.createElement('img')
      image.src = images.urls.small
      const imageLink = document.createElement('a')
      imageLink.href = images.links.html
      imageLink.target = '_blank'

      imageLink.appendChild(image)
      main.appendChild(imageLink)
    }
  } catch (error) {
    console.error('Algo ha salido mal en el Search 😅', error)
  }
}

/*
document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.input-form-nav')
  if (input) {
    input.addEventListener('change', searchImages)
  } else {
    console.error('Elemento input no encontrado en el DOM.')
  }
})
*/

/*
document.addEventListener('DOMContentLoaded', function() {
const inputText = document.querySelector('input');
inputText.addEventListener('change', function() {
  console.log(inputText.value);
  searchImages(keyword);
});
})
*/

//  const input = document.querySelector('.input-form-nav');
//  input.addEventListener('input', searchImages);

const renderImages = () => {
  createImageContainer()
  imagesRandom()
  searchImages()
}
export { renderImages }
