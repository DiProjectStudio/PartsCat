export default function pageSelectorAction() {
    const pageSelector = document.querySelector(".page-selector");
    const selectedPage = document.querySelector(".selected-page");
    const pageSelectorOptions = document.querySelector(".page-selector__options");
    const pageSelectorOptionElements = document.querySelectorAll(".page-selector__option");

    if (pageSelectorOptionElements) {
        pageSelectorOptionElements.forEach(pageSelectorOptionElement => {
            if (pageSelectorOptionElement.classList.contains("selected")) {
                selectedPage.innerText = pageSelectorOptionElement.innerText;
            }
        })
    }

    // if (selectedPage) {
    //     selectedPage.addEventListener("click", () => {
    //         pageSelector.classList.toggle("dropdown");
    //     });
    // }
}