import { showdownComponentState } from '../features/showdown.js';

export default class SortingComponent {
    constructor() {
        this.sortingButton = document.querySelector('.sorting-button');
        this.sortingButtonContent = this.sortingButton?.querySelector('.sorting-button__content');
        this.onInit();
    }

    onInit() {

        this.hideSortingButtonContent();
    }

    hideSortingButtonContent() {
        if (!this.sortingButtonContent && !this.sortingButton) return;
        document.addEventListener('click', (event) => {
            if (event.target !== this.sortingButton
                && !this.sortingButton.contains(event.target)
                && this.sortingButton.classList.contains('showdown')) {
                showdownComponentState(this.sortingButton, this.sortingButtonContent); // Удаляем класс showed
            }
        });
    }
}