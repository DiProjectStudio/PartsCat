import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, FreeMode, Thumbs, Scrollbar } from 'swiper/modules';
import hideNavigation from '../utils/hide-navigation.js';

export function initializeSlider() {

    const mainPageSlider = new Swiper(".section-hero__slider .swiper", {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        pagination: {
            el: ".section-hero__slider .swiper-pagination",
            clickable: true,
        },
        loop: true,
        navigation: {
            prevEl: ".section-hero__slider .button-prev",
            nextEl: ".section-hero__slider .button-next",
        }
    });

    const productsSlider = new Swiper(".products-slider .swiper", {
        modules: [Navigation, Pagination],
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
            el: ".products-slider .swiper-pagination",
            clickable: true,
        },
        navigation: {
            prevEl: ".products-slider .button-prev",
            nextEl: ".products-slider .button-next",
        },
        breakpoints: {
            744: {
                slidesPerView: 3,
                spaceBetween: 16
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20
            }
        },
        on: {
            init: hideNavigation
        }
    });

    const newsSlider = new Swiper(".section-news .swiper", {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".section-news .swiper-pagination",
            clickable: true,
        },
        allowTouchMove: true,
        breakpoints: {
            744: {
                slidesPerView: 2,
                spaceBetween: 16,
                allowTouchMove: true,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
                allowTouchMove: false,
            },
            1400: {
                spaceBetween: 30,
                slidesPerView: 3,
                allowTouchMove: false,
            }
        }
    });

    const productRelatedSlider = new Swiper(".product__related .swiper", {
        modules: [Navigation, Pagination],
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
            el: ".product__related .swiper-pagination",
        },
        navigation: {
            prevEl: ".product__related .button-prev",
            nextEl: ".product__related .button-next",
        },
        breakpoints: {
            744: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            1400: {
                spaceBetween: 30
            }
        },
        on: {
            init: hideNavigation
        }
    });

    const serviceStagesSlider = new Swiper(".service-stages .swiper", {
        modules: [Pagination],
        slidesPerView: 1.2,
        spaceBetween: 10,
        pagination: {
            el: ".service-stages .swiper-pagination",
        },
        breakpoints: {
            744: {
                enabled: false,
                slidesPerView: 6,
                spaceBetween: 0
            }
        }
    });

    const servicePageCertificatesSlider = new Swiper(".service-certificates .swiper", {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".service-certificates .swiper-pagination",
        },
        navigation: {
            prevEl: ".service-certificates .button-prev",
            nextEl: ".service-certificates .button-next",
        },
        loop: true,
        breakpoints: {
            744: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20
            }
        },
        on: {
            init: hideNavigation
        }
    });
}
