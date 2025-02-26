export default function popupInCartState() {
    const productCards = document.querySelectorAll(".product-card");


    if (productCards) {
        productCards.forEach(productCard => {
            const inCartBtn = productCard.querySelector(".btn.btn--brand");
            if (inCartBtn) {
                inCartBtn.addEventListener("click", (e) => {
                    e.preventDefault();
                    popupShow();
                    popupClose();
                })
            }
        })
    }
}

function popupShow() {
    const popupInCart = document.querySelector(".popup-in-cart");
    if (popupInCart) {
        popupInCart.classList.add("show");
    }
}

function popupClose() {
    const popupInCart = document.querySelector(".popup-in-cart");
    if (popupInCart) {
        setTimeout(()=> {
            popupInCart.classList.remove("show");
        }, 5000)
    }
}


