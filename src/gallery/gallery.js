// crear contenedor para las imagenes
const createImageContainer = () => {
  const body = document.querySelector('body')
  const main = document.createElement('main')
  main.className = 'image-container'
  body.appendChild(main)
}

// url de las fotos
let keyword = "";
console.log(keyword);
const accessKey = 'sxCoc4OGN_P3Y-F7Fd7YiIFHGSrRqrsz3QHZITAcnHU'
const unsplashRandom = `https://api.unsplash.com/photos/random?count=12&client_id=${accessKey}`;
const url = `https://api.unsplash.com/photos?&query=${keyword}&client_id=${accessKey}&per_page=12`;

// crear imagenes random
async function imagesRandom() {
  try {
    const api = await fetch(unsplashRandom)
    const apiJson = await api.json()
    
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

async function searchImages() {
  try {
    const input = document.querySelector('input')
    let keyword = input.value;
    // keyword = input.value
    // console.log('Palabra de búsqueda:', keyword)
    // if (!keyword) {console.log('No hay ninguna imagen que coincida con la descripcion')}
    const url = `https://api.unsplash.com/photos?&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    const main = document.querySelector('.image-container')
    main.innerHTML = '';
    
    for (const images of data) {
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
document.addEventListener('DOMContentLoaded', function() {
const inputText = document.querySelector('input');
inputText.addEventListener('change', function() {
  console.log(inputText.value);
  searchImages();
});
})
/*const renderImages = () => {
  createImageContainer()
  imagesRandom()
  searchImages()
}
*/
export { imagesRandom, searchImages, createImageContainer }
