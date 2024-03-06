import './style.css';
import { renderHeader } from './src/components/header/header.js';
import { renderNavBar } from './src/components/nav/nav.js';
import { createImageContainer } from './src/components/gallery/gallery.js';
import { imagesRandom } from "./src/components/gallery/imagesRandom.js";
import { searchImages } from "./src/components/gallery/searchImages.js";
import { showMore } from "./src/components/showMore/showMore.js";
import { createFooter } from "./src/components/footer/footer.js";

renderHeader();
renderNavBar();
createImageContainer();
imagesRandom();
searchImages();
showMore();
createFooter();