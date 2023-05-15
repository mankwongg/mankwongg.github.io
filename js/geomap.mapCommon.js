window.GeoMap = {
    olMap: null,
    olProj:  new ol.proj.Projection({
        code: 'EPSG:2326',
        units: 'm',
        // extent: [800000,800000,865000,855000]
    }),
    olHomeExtent: [810000,805000,855000,845000],
    olLayerGroup: null,
    olLayerGroup: new ol.layer.Group({
        layers: [
            // LandsD Map
            new ol.layer.Tile({
                source: new ol.source.XYZ({
                    url: 'https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/basemap/wgs84/{z}/{x}/{y}.png',
                    attributions: '<u target="_blank" class="copyrightDiv">&copy; The Government of the Hong Kong SAR</u>'
                })
            }),
            // LandsD Label
            new ol.layer.Tile({
                source: new ol.source.XYZ({
                    url: 'https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/label/hk/tc/wgs84/{z}/{x}/{y}.png'
                })
            }),
            // SatImage
            new ol.layer.Tile({
                source: new ol.source.XYZ({
                    url: 'https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/imagery/wgs84/{z}/{x}/{y}.png',
                    attributions: '<u target="_blank" class="copyrightDiv">&copy; The Government of the Hong Kong SAR</u>'
                }),
                visible: false,
            }),
            // OSM
            new ol.layer.Tile({
                source: new ol.source.OSM({
                }),
                visible: false,
            }),
        ]
    }),
    olStudyFeaturesLayer: null,
    olStudyFeatureSource: null,
    olWorkFeaturesLayer: null,
    olWorkFeatureSource: null,
	olLastGeoFeature: null,
    olTemperatureSource: null,
    olTemperatureIDWLayer: null,
    olTemperatureTextLayer: null,
    olTungChungLine: null,
    olTungChungLineLayer: null,
    olTsuenWanLine: null,
    olTsuenWanLineLayer: null,
    olBusStopsSource: new ol.source.Vector(),
    olBusStopsLayer: null,
    olBusStopsFilteredSource: new ol.source.Vector(),
    olBusStopsFilteredLayer: null,
    olGeoSource: new ol.source.Vector(),
    olGeoLayer: null,
    olBufferSource: new ol.source.Vector(),
    olBufferLayer: null,
    ol3DPNSource: null,
    ol3DPNLayer: null,
    ol3DPNFilteredSource: new ol.source.Vector(),
    ol3DPNFilteredLayer: null,
    olBufferFeature: null,
}

window.GeoApp = {
	olBusSearchDist: 500,
}

