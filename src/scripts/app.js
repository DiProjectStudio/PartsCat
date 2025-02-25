import HeaderComponent from './components/header.component.js';
import SidebarComponent from './components/sidebar.component.js';
import showdown from './features/showdown.js';
import popupInCartState from './features/show-popup-in-cart.js';

export default class App {
    constructor() {
        this.onInit();
    }

    onInit() {
       new HeaderComponent();
       new SidebarComponent();
       showdown();
        popupInCartState();
    }
}