import Overlay from '../utils/overlay.js';
import BodyOverflow from '../utils/body-overflow.js';

export default class FooterComponent {
    constructor() {
        this.filterButton = document.querySelector(".filter-button");
        this.closeButton = document.getElementById("filterClose");
        this.filter = document.querySelector(".filter");

        this.onInit();
    }

    onInit() {
        this.filterButtonClickHandler();
        this.closeButtonClickHandler();
    }

    filterButtonClickHandler() {
        if (this.filterButton) {
            this.filterButton.addEventListener("click", this.showFilter.bind(this));
        }
    }

    closeButtonClickHandler() {
        if (this.closeButton) {
            this.closeButton.addEventListener("click", this.hideFilter.bind(this));
        }
    }

    showFilter() {
        if (this.filter) {
            this.filter.classList.add("show");
            Overlay.showOverlay();
            BodyOverflow.hidden();
        }
    }

    hideFilter() {
        if (this.filter) {
            this.filter.classList.remove("show");
            Overlay.hideOverlay();
            BodyOverflow.visible();
        }
    }
}