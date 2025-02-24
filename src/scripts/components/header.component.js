import Overlay from '../utils/overlay.js';

export default class HeaderComponent {
    constructor() {

        this.onInit();
    }

    onInit() {
        this.copyCartButton();
    }

    /** Копируем кнопку корзины из header-top в header-bottom */
    copyCartButton() {
        const headerCart = document.querySelector(".header__cart");
        const headerUser = document.querySelector(".header__user");

        if (headerCart && headerUser) {
            headerUser.append(headerCart.cloneNode(true));
        }
    }


}