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

