export default class SidebarComponent {
    constructor() {
        this.sidebarClose = document.getElementById('sidebarClose');
        this.sidebar = document.getElementById("sidebar");
        this.sidebarCatalog = this.sidebar.querySelector(".sidebar__catalog");
        this.sidebarNav = this.sidebar.querySelector(".sidebar__nav");
        this.onInit();
    }

    onInit() {
        this.createSidebarInnerElements();
        this.closeSidebar();
    }

    closeSidebar() {
        if (this.sidebarClose && this.sidebar) {
            this.sidebarClose.addEventListener("click", ()=> {
                this.sidebar.classList.remove("show");
            });
        }
    }

    createSidebarInnerElements() {
        this.copyCatalogFromHeader();
        this.copyNavFromHeader();
    }

    copyCatalogFromHeader() {
        const headerCatalog = document.querySelector(".header__catalog ul.submenu");
        if (headerCatalog && this.sidebarCatalog) {
            this.sidebarCatalog.append(headerCatalog.cloneNode(true));
        }

    }

    copyNavFromHeader() {
        const headerNav = document.querySelector(".header__nav nav");
        if (headerNav && this.sidebarNav) {
            this.sidebarNav.append(headerNav.cloneNode(true));
        }
    }
}