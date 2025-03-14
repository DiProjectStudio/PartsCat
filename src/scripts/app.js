import HeaderComponent from './components/header.component.js';
import SidebarComponent from './components/sidebar.component.js';

import popupInCartState from './features/show-popup-in-cart.js';
import FooterComponent from './components/filter.component.js';
import SortingComponent from './components/sorting.component.js';
import { showdown } from './features/showdown.js';
import CounterComponent from './components/counter.component.js';
import tabActions from './features/tabs.js';
import passwordVisibility from './features/password-visibility.js';
import pageSelectorAction from './components/page-selector.js';

export default class App {
    constructor() {
        this.onInit();
    }

    onInit() {
        new HeaderComponent();
        new SidebarComponent();
        showdown()
        popupInCartState();
        new FooterComponent();
        new SortingComponent();
        new CounterComponent();
        tabActions();
        passwordVisibility();
        pageSelectorAction();
    }
}