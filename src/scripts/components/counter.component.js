export default class CounterComponent {
    constructor() {
        this.counters = document.querySelectorAll(".counter");

        this.onInit();
    }

    onInit() {
        if (this.counters && this.counters.length > 0) {
            this.counters.forEach((counter) => {
                this.counterValueIncrease(counter);
                this.counterValueDecrease(counter);
                this.changeCounterInputOnKeyboard(counter);
            });
        }
    }

    counterValueIncrease(counter) {
        const plusBtn = counter.querySelector(".plus");
        const input = counter.querySelector(".counter__input");
        plusBtn.addEventListener("click", () => {
            if (+input.value < 10000) {
                (+input.value++).toString();
            }
        });
    }

    counterValueDecrease(counter){
        const minusBtn = counter.querySelector(".minus");
        const input = counter.querySelector(".counter__input");
        minusBtn.addEventListener("click", () => {
            if (+input.value > 1) {
                (+input.value--).toString();
            }
        });
    }

    changeCounterInputOnKeyboard(counter) {
        const input = counter.querySelector(".counter__input");
        input.addEventListener("input", () => {
            if (input.value === "0") {
                input.value = "1";
            }
        });
    }
}

