$(function(){
    GeoMap.olBusStopsFilteredLayer = new ol.layer.Vector({
        source: GeoMap.olBusStopsFilteredSource,
        style: function (feature) {
            return new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 10,
                    fill: new ol.style.Fill({
                        color: '#eb4034'
                    })
                }),
                // text: new ol.style.Text({
                //     text: feature.get('name_tc'),
                //     offsetY: -16,
                //     font: '16px Calibri,sans-serif',
                //     fill: new ol.style.Fill({
                //         color: '#000'
                //     })
                // })
            })
        },
        visible: false,
    });

    $.ajax({
        type: 'GET',
        url: 'https://data.etabus.gov.hk/v1/transport/kmb/stop',
        success: function(results){
            // console.log(results);
            for(let i = 0; i < results.data.length; i++){
                let eastingNorthing = new ol.proj.transform([results.data[i].long, results.data[i].lat], 'EPSG:4326', 'EPSG:2326');
                var iconFeature = new ol.Feature({
                    geometry: new ol.geom.Point(eastingNorthing),
                });
                iconFeature.set('stop', results.data[i].stop);
                iconFeature.set('name_tc', results.data[i].name_tc);

                GeoMap.olBusStopsSource.addFeature(iconFeature);
            };
        }
    });

 

})