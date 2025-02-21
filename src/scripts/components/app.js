import HeaderComponent from './header.component.js';
import SidebarComponent from './sidebar.component.js';
import showdown from '../utils/showdown.js';

export default class App {
    constructor() {
        this.onInit();
    }

    onInit() {
       new HeaderComponent();
       new SidebarComponent();
       showdown();
    }
}