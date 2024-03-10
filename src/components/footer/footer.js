  import './footer.css';
  // crear footer
  export const createFooter = () => {
    const body = document.querySelector('body');
    const footer = document.createElement('footer');
    footer.id = 'footer';

    const author = document.createElement('p');
    author.className = 'author-footer';
    author.textContent = 'Developed by Daniel Salvatierra';
    
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

    body.appendChild(footer);
    footer.appendChild(author);
    footer.appendChild(linkWeb);
    linkWeb.appendChild(linkRtc);
    linkWeb.appendChild(p);
    linkWeb.appendChild(linkThePower);
  };