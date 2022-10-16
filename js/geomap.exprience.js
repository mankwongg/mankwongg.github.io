
GeoMap.olStudyFeatureSource = new ol.source.Vector({
    url: `../sources/study.json`,
    format: new ol.format.GeoJSON()
});

GeoMap.olStudyFeaturesLayer = new ol.layer.Vector({
    source: GeoMap.olStudyFeatureSource,
    style: function (feature) {
        return new ol.style.Style({
            image: new ol.style.Icon({
                src: '../images/study.png',
                scale: 0.08,
            })
        });
    },
})

GeoMap.olWorkFeatureSource = new ol.source.Vector({
    url: `../sources/work.json`,
    format: new ol.format.GeoJSON()
});

GeoMap.olWorkFeaturesLayer = new ol.layer.Vector({
    source: GeoMap.olWorkFeatureSource,
    style: function (feature) {
        return new ol.style.Style({
            image: new ol.style.Icon({
                src: '../images/work.png',
                scale: 0.08,
            })
        });
    },
})
GeoMap.olMap.addLayer(GeoMap.olWorkFeaturesLayer);
GeoMap.olMap.addLayer(GeoMap.olStudyFeaturesLayer);

