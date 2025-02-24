export default class BodyOverflow {
    static hidden () {
        document.body.classList.add("overflow-hidden");
    }

    static visible() {
        document.body.classList.remove("overflow-hidden");
    }
}