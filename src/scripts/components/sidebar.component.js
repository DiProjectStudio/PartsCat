import Overlay from '../utils/overlay.js';

export default class SidebarComponent {
    constructor() {
        this.sidebarClose = document.getElementById("sidebarClose");
        this.sidebar = document.getElementById("sidebar");
        this.sidebarCatalog = this.sidebar.querySelector(".sidebar__catalog");
        this.sidebarNav = this.sidebar.querySelector(".sidebar__nav");
        this.sidebarNavService = this.sidebarNav.querySelector(".sidebar__nav-service");
        this.sidebarNavLinks = this.sidebar.querySelector(".sidebar__nav-links");
        this.sidebarContacts = this.sidebar.querySelector(".sidebar__contacts");
        this.sidebarSocials = this.sidebar.querySelector(".sidebar__socials");
        this.sidebarFeedback = this.sidebar.querySelector(".sidebar__feedback");
        this.sidebarSearch = this.sidebar.querySelector(".sidebar__search");
        this.onInit();
    }

    onInit() {
        this.createSidebarInnerElements();
        this.closeSidebar();
    }

    closeSidebar() {
        if (this.sidebarClose && this.sidebar) {
            this.sidebarClose.addEventListener("click", () => {
                this.sidebar.classList.remove("show");
                Overlay.hideOverlay();
            });
        }

        const overlay = document.getElementById("overlay");
        overlay.addEventListener("click", () => {
            this.sidebar.classList.remove("show");
            Overlay.hideOverlay();
        });

    }

    createSidebarInnerElements() {
        this.copyCatalogFromHeader();
        this.copyServiceSubmenu();
        this.copyNavLinks();
        this.copyNumbersFromHeader();
        this.copyHeaderSocials();
        this.copyHeaderFeedbackButton();
        this.copyHeaderSearch();
    }

    copyCatalogFromHeader() {
        const headerCatalog = document.querySelector(".header__catalog ul.submenu");
        if (headerCatalog && this.sidebarCatalog) {
            this.sidebarCatalog.append(headerCatalog.cloneNode(true));
        }

    }

    copyServiceSubmenu() {
        const serviceSubmenu = document.querySelector(".header__nav .with-submenu ul.submenu");
        if (serviceSubmenu && this.sidebarNavService) {
            this.sidebarNavService.append(serviceSubmenu.cloneNode(true));
        }
    }

    copyNavLinks() {
        const navLinks = document.querySelectorAll(".header__nav nav > ul > li:not(.with-submenu)");
        if (navLinks && this.sidebarNavLinks) {
            navLinks.forEach((navLink) => {
                this.sidebarNavLinks.append(navLink.cloneNode(true));
            });
        }
    }

    copyNumbersFromHeader() {
        const headerPhoneElements = document.querySelectorAll(".header__phone");
        const headerMail = document.querySelector(".header__mail");
        const headerTime = document.querySelector(".header__time");

        if (headerPhoneElements && headerMail && headerTime && this.sidebarContacts) {
            headerPhoneElements.forEach((phoneElement) => {
                this.sidebarContacts.append(phoneElement.cloneNode(true));
            });

            this.sidebarContacts.append(headerMail.cloneNode(true));
            this.sidebarContacts.append(headerTime.cloneNode(true));
        }

    }

    copyHeaderSocials() {
        const headerSocialsItems = document.querySelectorAll(".header__socials .header__socials-item");
        if (headerSocialsItems && this.sidebarSocials) {
            headerSocialsItems.forEach((headerSocialsItem) => {
                const headerSocialItemClone = headerSocialsItem.cloneNode(true);
                headerSocialItemClone.classList.remove("header__socials-item");
                headerSocialItemClone.classList.add("sidebar__socials-item");
                this.sidebarSocials.append(headerSocialItemClone.cloneNode(true));
            })
        }
    }

    copyHeaderFeedbackButton() {
        const headerFeedbackButton = document.querySelector(".header__feedback button");
        if (headerFeedbackButton && this.sidebarFeedback) {
            this.sidebarFeedback.append(headerFeedbackButton.cloneNode(true));
        }
    }

    copyHeaderSearch() {
        const headerSearch = document.querySelector(".header__search");
        if (headerSearch && this.sidebarSearch) {
            this.sidebarSearch.append(headerSearch.cloneNode(true));
        }
    }
}