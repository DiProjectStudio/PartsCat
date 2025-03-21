export default function pageSelectorAction() {
    const selectedPage = document.querySelector(".selected-page");
    const pageSelectorOptionElements = document.querySelectorAll(".page-selector__option");

    if (pageSelectorOptionElements) {
        pageSelectorOptionElements.forEach(pageSelectorOptionElement => {
            if (pageSelectorOptionElement.classList.contains("selected")) {
                selectedPage.innerText = pageSelectorOptionElement.innerText;
            }
        })
    }
}