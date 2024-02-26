import './style.css';
import { renderHeader } from './src/components/header/header.js';
import { renderNavBar } from './src/components/nav/nav.js';
import { renderImages} from './src/components/gallery/gallery.js';
import { createFooter } from "./src/components/footer/footer.js";

renderHeader();
renderNavBar();
renderImages();
createFooter();