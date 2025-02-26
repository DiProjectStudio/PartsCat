export default class CounterComponent {
    constructor() {
        this.counters = document.querySelectorAll('.counter');

        this.onInit();
    }

    onInit() {
        if (this.counters && this.counters.length > 0) {
            this.counters.forEach((counter) => {
                const counterMinus = counter.querySelector('.minus');
                const counterPlus = counter.querySelector('.plus');
                this.counterValueIncrease(counterPlus);
                this.counterValueDecrease(counterMinus);
            });
        }
    }

    counterValueIncrease(plusBtn) {
        const counter = plusBtn.previousElementSibling;

        plusBtn.addEventListener('click', () => {
            if (+counter.value < 10000) {
                (+counter.value++).toString();
            }
        });
    }

    counterValueDecrease(minusBtn){
        const counter = minusBtn.nextElementSibling;
        minusBtn.addEventListener('click', () => {
            if (+counter.value > 0) {
                (+counter.value--).toString();
            }
        });
    }
}

