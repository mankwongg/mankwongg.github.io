$(function(){
    var dataType = 'rhrread';
    var temperature = {
        place: [],
        value: [],
        mappedValue: [],
    };
    var uvindex;
    var coordinates = [
        [835805,819182],//"京士柏"
        [835923,818142],//"香港天文台"
        [835514,812119],//"黃竹坑"
        [834379,844273],//"打鼓嶺"
        [816739,836479],//"流浮山"
        [835466,834808],//大埔
        [838903,828023],//"沙田"
        [815366,828684],//"屯門"
        [844911,818699],//"將軍澳"
        [846255,827029],//"西貢"
        [821093,807806],//"長洲"
        [810856,818635],//"赤鱲角"
        [828310,822925],//"青衣"
        [829080,831979],//"石崗"
        [829176,827165],//"荃灣可觀"
        [831095,826238],//"荃灣城門谷"
        [834666,815367],//"香港公園"
        [841601,815566],//"筲箕灣"
        [837079,821782],//"九龍城"
        [836952,814636],//"跑馬地"
        [838037,822516],//"黃大仙"
        [840252,808329],//"赤柱"
        [840928,819192],//"觀塘"
        [834664,821359],//"深水埗"
        [840328,818436],//"啟德跑道公園"
        [819997,833634],//"元朗公園"
        [841952,837029],//"大美督"
    ];

    // Create IDW source 
    GeoMap.olTemperatureSource = new ol.source.IDW({
        // Source that contains the data
        source: new ol.source.Vector(),
        // Use val as weight property
        weight: 'mappedValue',
    });

    function scale(num, in_min, in_max, out_min, out_max) {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    };


    $.ajax({
        type:'GET',
        url:'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=' + dataType + '&lang=tc',
        success: function(results) {
            for(var i = 0; i < results.temperature.data.length; i++){
                temperature.place.push(results.temperature.data[i].place);
                temperature.value.push(results.temperature.data[i].value);
            }
            for(var i = 0; i < results.temperature.data.length; i++){
                temperature.mappedValue.push(scale(temperature.value[i], Math.min(...temperature.value), Math.max(...temperature.value), 0, 100));
            }
            // uvindex = results.uvindex.data;
            
            // Create point features first and add to source
            for(var i = 0; i < temperature.place.length; i++){
                var temperaturePt = new ol.Feature(new ol.geom.Point(coordinates[i]));
                temperaturePt.set('value', temperature.value[i]);
                temperaturePt.set('mappedValue', temperature.mappedValue[i]);
                temperaturePt.setStyle(new ol.style.Style({
                    text: new ol.style.Text({
                        text: temperaturePt.get('value').toString(),
                        stroke: new ol.style.Stroke({ color: [255,255,255,128], width: 1.25 }),
                        scale: 2
                    })
                }));
                GeoMap.olTemperatureSource.getSource().addFeature(temperaturePt);
            }
        }
    });

    // Then create the IDW mask layer
    GeoMap.olTemperatureIDWLayer = new ol.layer.Image({
        title: 'IDW',
        source: GeoMap.olTemperatureSource,
        opacity: .2,
        visible: false,
    });

    // Create text layer from the source
    GeoMap.olTemperatureTextLayer = new ol.layer.Vector({
        title: 'source',
        source: GeoMap.olTemperatureSource.getSource(),
        style: function(feature) {
          return new ol.style.Style({
            // image: new ol.style.Circle({ radius: 2, fill: new ol.style.Fill({ color: '#000' }) }),
            text: new ol.style.Text({
                text: feature.get('value').toString(),
                stroke: new ol.style.Stroke({ color: [255,255,255,128], width: 1.25 }),
                })
            });
        },
        visible: false,
    });
    
    GeoMap.olMap.addLayer(GeoMap.olTemperatureIDWLayer);
    GeoMap.olMap.addLayer(GeoMap.olTemperatureTextLayer);
    // var draw = new ol.interaction.Draw({ type: 'Point', source: GeoMap.olTemperatureSource.getSource() });
    // draw.on('drawend', function(e) {
    //     e.feature.set('val', parseInt(Math.round(Math.random()*100)));
    //     console.log();
    // })
    // GeoMap.olMap.addInteraction(draw);
});