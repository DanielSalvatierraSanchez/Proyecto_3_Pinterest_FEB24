import './footerLinks.css';
// crear footer
export const footerLinks = () => {
  const footer = document.querySelector('#footer');
  const dataFooter = [
    { class: 'mailimg-footer', url: 'mailto: dss250583@gmail.com', src: './correo.webp', title: 'Contactame por email' },
    { class: 'linkedinimg-footer', url: 'https://www.linkedin.com/in/daniel-salvatierra-sanchez/', src: './linkedin.webp', title: 'Accede a mi LinkedIn' },
    { class: 'githubimg-footer', url: 'https://github.com/DanielSalvatierraSanchez', src: './github.webp', title: 'Hechale un vistazo... espero que te guste!' }
  ];
  // bucle sobre el array de datos para crear los elementos
  dataFooter.forEach(dataFooter => {
    const aFooter = document.createElement('a');
    aFooter.href = dataFooter.url;
    aFooter.target = '_blank';
    const imgFooter = document.createElement('img');
    imgFooter.className = dataFooter.class;
    imgFooter.src = dataFooter.src;
    imgFooter.title = dataFooter.title;
    footer.appendChild(aFooter);
    aFooter.appendChild(imgFooter);
  });
};