import HeaderModule from './header-module/header.module.js';
import SidebarComponent from '../components/sidebar.component.js';

export default class App {
    constructor() {
        this.onInit();
    }

    onInit() {
       new HeaderModule();
       new SidebarComponent();
    }
}