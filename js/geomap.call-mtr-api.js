$(function(){
    GeoMap.olTungChungLine = new ol.source.Vector({
        url: `../sources/tung_chung_line.json`,
        format: new ol.format.GeoJSON()
    });

    GeoMap.olTungChungLineLayer = new ol.layer.Vector({
        source: GeoMap.olTungChungLine,
        style: function (feature) {
            return new ol.style.Style({
                image: new ol.style.Icon({
                    src: '../images/tung_chung_line.png',
                    scale: 0.04,
                })
            });
        },
        visible: false,
    });

    GeoMap.olTuenMaLine = new ol.source.Vector({
        url: `../sources/tuen_ma_line.json`,
        format: new ol.format.GeoJSON()
    });

    GeoMap.olTuenMaLineLayer = new ol.layer.Vector({
        source: GeoMap.olTuenMaLine,
        style: function (feature) {
            return new ol.style.Style({
                image: new ol.style.Icon({
                    src: '../images/tuen_ma_line.png',
                    scale: 0.04,
                })
            });
        },
        visible: false,
    });

    // GeoMap.webLayer = new ol.layer.Image({
    //     source: GeoMap.olTuenMaLine,
    //     style: function (feature) {
    //         return new ol.style.Style({
    //             image: new ol.style.Icon({
    //                 src: '../images/tuen_ma_line.png',
    //                 scale: 0.04,
    //             })
    //         });
    //     },
    //     visible: false,
    // });

    GeoMap.olMap.addLayer(GeoMap.olTungChungLineLayer);
    GeoMap.olMap.addLayer(GeoMap.olTuenMaLineLayer);
})