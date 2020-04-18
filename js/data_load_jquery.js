ymaps.ready()
    .done(function (ym) {
        var myPlacemark,
            myMap = new ym.Map('YMapsID', {
            center: [41.32840930162856, 69.24338355891037],
            zoom: 12,
            controls: []
        },
        {
            searchControlProvider: 'yandex#search'
        });

        jQuery.getJSON('data.json', function (json) {
            /** Сохраним ссылку на геообъекты на случай, если понадобится какая-либо постобработка.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/GeoQueryResult.xml
             */
            var geoObjects = ym.geoQuery(json)
                    .addToMap(myMap)
                    .applyBoundsToMap(myMap, {
                        checkZoomRange: true
                    });
        });

    });
    

