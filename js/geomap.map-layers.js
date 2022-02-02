// Add map
GeoMap.olMap = new ol.Map({
    layers: [
        GeoMap.olLayerGroup,
    ],
    target: 'master-map',
    view: new ol.View({
            projection: GeoMap.olProj,
            showFullExtent: true,
            center: [0, 0],
            minZoom: 0,
            maxZoom: 21,
            zoom: 10,
    }),
});

GeoMap.olMap.getView().fit(GeoMap.olHomeExtent);

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


