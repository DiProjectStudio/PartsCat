import Overlay from '../utils/overlay.js';

export default class HeaderComponent {
    constructor() {
        this.sidebar = document.getElementById("sidebar");
        this.headerMenu = document.getElementById("headerMenu");
        this.onInit();
    }

    onInit() {
        this.copyCartButton();
        this.showSidebar();
    }

    /** Копируем кнопку корзины из header-top в header-bottom */
    copyCartButton() {
        const headerCart = document.querySelector(".header__cart");
        const headerUser = document.querySelector(".header__user");

        if (headerCart && headerUser) {
            headerUser.append(headerCart.cloneNode(true));
        }
    }

    showSidebar() {
        if (this.headerMenu && this.sidebar) {
            this.headerMenu.addEventListener("click", ()=> {
                this.sidebar.classList.add("show");
                Overlay.showOverlay();
            });
        }
    }
}