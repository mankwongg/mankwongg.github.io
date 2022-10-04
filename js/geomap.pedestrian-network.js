$(function(){
    // GeoMap.ol3DPNSource = new ol.source.Vector({
    //     url: `../sources/work.json`,
    //     format: new ol.format.GeoJSON()
    // });
    // GeoMap.ol3DPNLayer = new ol.layer.Vector({
    //     source: GeoMap.ol3DPNSource,
    //     style: function (feature) {
    //         return new ol.style.Style({
    //             image: new ol.style.Circle({
    //                 radius: 10,
    //                 fill: new ol.style.Fill({
    //                     color: '#00FFFF'
    //                 })
    //             }),
    //         })
    //     },
    // });

    // GeoMap.olMap.addLayer(GeoMap.ol3DPNLayer);

    // function find3DPN(){
    //     GeoMap.loadTimer = setInterval(function(){
    //         if(0 != GeoMap.ol3DPNLayer.getSource().getFeatures().length){
    //             clearInterval(GeoMap.loadTimer);
    //             for(let i = 0; i < GeoMap.ol3DPNSource.getFeatures().length; i++){
    //                 console.log(GeoMap.olBufferFeature);
    //                 // GeoMap.ol3DPNSource.forEachFeatureInExtent(GeoMap.olBufferFeature.getGeometry().getExtent(), function(feature){
    //                 //     GeoMap.ol3DPNFilteredSource.addFeature(feature);
    //                 // });
    //             };
    //         }
    //     });
    // };

    // $('#bus-search-dist').on('input', function(){
    //     // GeoApp.olBusSearchDist = this.value;
    //     find3DPN();
    // });

    // geolocation.on('change:position', function () {
    //     find3DPN();
    // });
    // console.log(GeoMap.ol3DPNSource.getState());
});