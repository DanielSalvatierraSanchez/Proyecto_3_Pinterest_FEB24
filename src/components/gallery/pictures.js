// crear function que pinta las imagenes obtenidas de la API
export function renderPictures(data) {
  for (const image of data) {
    const main = document.querySelector('.image-container');
    const imageRandom = document.createElement('img');
    imageRandom.className = 'image-random';
    imageRandom.src = image.urls.small;
    const imageLink = document.createElement('a');
    imageLink.href = image.links.html;
    imageLink.target = '_blank';
    imageLink.appendChild(imageRandom);
    main.appendChild(imageLink);
  };
};