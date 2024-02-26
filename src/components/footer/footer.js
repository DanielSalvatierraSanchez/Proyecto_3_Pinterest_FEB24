import './footer.css';

// crear footer
export const createFooter = () => {
  const body = document.querySelector('body');
  const footer = document.createElement('footer');
  footer.className = 'footer';

  const author = document.createElement('p');
  author.className = 'author-footer';
  author.textContent = 'Powered by Daniel Salvatierra';
  
  const linkWeb = document.createElement('div');
  linkWeb.className = 'linkweb-footer';  
  const linkRtc = document.createElement('a');
  linkRtc.className = 'linkweb-footer';
  linkRtc.classList.add = 'linkrtc-footer';
  linkRtc.href = 'https://thepower.education/master-fullstack';
  linkRtc.target = '_blank';
  linkRtc.textContent = 'Rock{theCode}';
  linkRtc.title = 'Link a Rock{theCode}';

  const p = document.createElement('p');
  p.className = 'p-linkweb-footer';
  p.textContent = 'by';
  
  const linkThePower = document.createElement('a');
  linkThePower.className = 'linkweb-footer';
  linkThePower.classList.add = 'linkthepower-footer';
  linkThePower.href = 'https://thepower.education/';
  linkThePower.target = '_blank';
  linkThePower.textContent = 'thePower';
  linkThePower.title = 'Link a thePower';

  const mail = document.createElement('a');
  mail.href = 'mailto: dss250583@gmail.com';
  const mailImg = document.createElement('img');
  mailImg.className = 'mailimg-footer';
  mailImg.src = '../../../public/assets/correo.png';
  mail.target = '_blank';
  mailImg.title = 'Contactame por email';

  const linkedin = document.createElement('a');
  linkedin.href = 'https://www.linkedin.com/in/daniel-salvatierra-sanchez/';
  const linkedinImg = document.createElement('img');
  linkedinImg.className = 'linkedinimg-footer';
  linkedinImg.src = '../../../public/assets/linkedin.png';
  linkedin.target = '_blank';
  linkedinImg.title = 'Accede a mi LinkedIn';
  
  const github = document.createElement('a');
  github.href = 'https://github.com/DanielSalvatierraSanchez';
  const githubImg = document.createElement('img');
  githubImg.className = 'githubimg-footer';
  githubImg.src = '../../../public/assets/github.png';
  github.target = '_blank';
  githubImg.title = 'Hechale un vistazo... espero que te guste!';

  body.appendChild(footer);
  footer.appendChild(author);
  footer.appendChild(linkWeb);
  linkWeb.appendChild(linkRtc);
  linkWeb.appendChild(p);
  linkWeb.appendChild(linkThePower);
  footer.appendChild(mail);
  footer.appendChild(linkedin);
  footer.appendChild(github);
  mail.appendChild(mailImg);
  linkedin.appendChild(linkedinImg);
  github.appendChild(githubImg);
};