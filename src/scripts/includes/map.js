import ymapsTouchScroll from 'ymaps-touch-scroll';

export function initializeMap() {
    const maps = document.querySelectorAll(".my-map");

    if (maps) {
        maps.forEach(mapElement => {
            let myMap;
            ymaps.ready(init);

            let placemarks = [
                {
                    coordinates: JSON.parse(mapElement.dataset.coord)
                }
            ];
            // resizeMap(myMap, init);

            function init() {
                myMap = new ymaps.Map(mapElement, {
                    center: JSON.parse(mapElement.dataset.center),
                    zoom: 16,
                    controls: ['zoomControl', // Элемент управления зумом
                        'searchControl', // Элемент управления поиском
                        'trafficControl', // Элемент управления трафиком
                        'typeSelector', // Элемент управления типом карты
                        'fullscreenControl', // Элемент управления полноэкранным режимом
                        'geolocationControl', // Элемент управления геолокацией
                        'routeEditor', // Элемент управления редактором маршрутов
                        'rulerControl' // Элемент управления линейкой
                    ]
                });

                placemarks.forEach(function(obj) {
                    let myPlacemark = new ymaps.Placemark(obj.coordinates, {
                            iconLayout: "default#image",
                            iconCaption: mapElement.dataset.content
                        },
                        {
                            preset: "islands#orangeIconWithCaption",
                            iconColor: "#e6761b"
                        }
                    );

                    myMap.geoObjects.add(myPlacemark);
                });

                ymapsTouchScroll(myMap, { preventScroll: true, preventTouch: true });
            }
        })
    }
}
