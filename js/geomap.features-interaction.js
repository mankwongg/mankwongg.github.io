const popupProject = document.getElementById('popup-project');
const $popupProjectContentInfo = $('#popup-project-content');
const closer = document.getElementById('popup-project-closer');
const popupProjectLay = new ol.Overlay({
    element: popupProject,
});
popupProjectLay.setPosition(undefined);
$(function(){

    $('#tc-line').on('click', function(){
        this.checked ? GeoMap.olTungChungLineLayer.setVisible(true) : GeoMap.olTungChungLineLayer.setVisible(false);
    });

    $('#tm-line').on('click', function(){
        this.checked ? GeoMap.olTuenMaLineLayer.setVisible(true) : GeoMap.olTuenMaLineLayer.setVisible(false);
    });

    $('#tsw-line').on('click', function(){
        this.checked ? GeoMap.olTsuenWanLineLayer.setVisible(true) : GeoMap.olTsuenWanLineLayer.setVisible(false);
    });

    $('#bus-stops').on('click', function(){
        this.checked ? GeoMap.olBusStopsFilteredLayer.setVisible(true) : GeoMap.olBusStopsFilteredLayer.setVisible(false);
    });

    $('#temperature').on('click', function(){
        // this.checked ? GeoMap.olTemperatureIDWLayer.setVisible(true) : GeoMap.olBusStopsFilteredLayer.setVisible(false);
        // this.checked ? GeoMap.olTemperatureTextLayer.setVisible(true) : GeoMap.olTemperatureTextLayer.setVisible(false);
        if(this.checked){
            GeoMap.olTemperatureIDWLayer.setVisible(true);
            GeoMap.olTemperatureTextLayer.setVisible(true);
        } else {
            GeoMap.olTemperatureIDWLayer.setVisible(false);
            GeoMap.olTemperatureTextLayer.setVisible(false);
        };
    });

    // Tung Chung Line view panel
    function TCLfeaturesView(terminusArrivalTime, name, station, toHKArrivalTimeList, toTCArrivalTimeList) {
        const time = new Date();
        if(`TUC` == station){
            let direction = `<b>To Hong Kong: </b><br>`;
            $popupProjectContentInfo.html(direction);

            for(let i = 0; i < terminusArrivalTime.length; i++){
                if(i == 0 && parseInt(terminusArrivalTime[0]) > 55) {
                    $popupProjectContentInfo.append('Next train: <b>Leaving</b><br>')
                    continue
                }
                terminusArrivalTime[i] == '0' ? $popupProjectContentInfo.append(`Next train: <b>Arriving/Leaving</b><br>`) : $popupProjectContentInfo.append(`Next train: <b>` + terminusArrivalTime[i] + ` min</b><br>`);
            };
        } else if (`HOK` == station){
            let direction = `<b>To Tung Chung: </b><br>`;
            $popupProjectContentInfo.html(direction);

            for(let i = 0; i < terminusArrivalTime.length; i++){
                if(i == 0 && parseInt(terminusArrivalTime[0]) > 55) {
                    $popupProjectContentInfo.append('Next train: <b>Leaving</b><br>')
                    continue
                }
                terminusArrivalTime[i] == '0' ? $popupProjectContentInfo.append(`Next train: <b>Arriving/Leaving</b><br>`) : $popupProjectContentInfo.append(`Next train: <b>` + terminusArrivalTime[i] + ` min</b><br>`);
            };
        } else {
            let HKdirection = `<b>To Hong Kong: </b><br>`;
            let TCdirection = `<b>To Tung Chung: </b><br>`;

            $popupProjectContentInfo.html(HKdirection);

            for(let i = 0; i < toHKArrivalTimeList.length; i++){
                if(i == 0 && parseInt(toHKArrivalTimeList[0]) > 55) {
                    $popupProjectContentInfo.append('Arriving' + '<br>')
                    continue
                }
                toHKArrivalTimeList[i] == '0' ? $popupProjectContentInfo.append(`Next train: <b>Arriving/Leaving</b><br>`) : $popupProjectContentInfo.append(`Next train: <b>` + toHKArrivalTimeList[i] + ` min</b><br>`);
            };

            $popupProjectContentInfo.append(`<br>` + TCdirection);

            for(let i = 0; i < toHKArrivalTimeList.length; i++){
                if(i == 0 && parseInt(toHKArrivalTimeList[0]) > 55) {
                    $popupProjectContentInfo.append('Next train: <b>Leaving</b><br>')
                    continue
                }
                toTCArrivalTimeList[i] == '0' ? $popupProjectContentInfo.append(`Next train: <b>Arriving/Leaving</b><br>`) : $popupProjectContentInfo.append(`Next train: <b>` + toTCArrivalTimeList[i] + ` min</b><br>`);
            };
        }
        $popupProjectContentInfo.append(`<br>` + `Station: ` + `<b>` + name);
        $popupProjectContentInfo.append(`<br>` + `Updated at: ` + `<b>` + time.toLocaleTimeString());
    };

    // Tuen Ma Line view panel
    function TMLfeaturesView(terminusArrivalTime, name, station, toTMArrivalTimeList, toWKSArrivalTimeList) {
        const time = new Date();
        if(`TUM` == station){
            let direction = `<b>To Wu Kai Sha: </b><br>`;
            $popupProjectContentInfo.html(direction);
            // console.log(terminusArrivalTime);
            for(let i = 0; i < terminusArrivalTime.length; i++){
                if(i == 0 && parseInt(terminusArrivalTime[0]) > 55) {
                    $popupProjectContentInfo.append('Next train: <b>Leaving</b><br>')
                    continue
                }
                terminusArrivalTime[i] == 0 ? $popupProjectContentInfo.append(`Next train: <b>Arriving/Leaving</b><br>`) : $popupProjectContentInfo.append(`Next train: <b>` + terminusArrivalTime[i] + ` min</b><br>`);
            };
        } else if (`WKS` == station){
            let direction = `<b>To Tuen Mun: </b><br>`;
            $popupProjectContentInfo.html(direction);

            for(let i = 0; i < terminusArrivalTime.length; i++){
                if(i == 0 && parseInt(terminusArrivalTime[0]) > 55) {
                    $popupProjectContentInfo.append('Next train: <b>Leaving</b><br>')
                    continue
                }
                terminusArrivalTime[i] == 0 ? $popupProjectContentInfo.append(`Next train: <b>Arriving/Leaving</b><br>`) : $popupProjectContentInfo.append(`Next train: <b>` + terminusArrivalTime[i] + ` min</b><br>`);
            };
        } else {
            let TMSdirection = `<b>To Tuen Mun: </b><br>`;
            let WKSdirection = `<b>To Wu Kai Sha: </b><br>`;
            // console.log(toTMArrivalTimeList);
            // console.log(toWKSArrivalTimeList);

            $popupProjectContentInfo.html(TMSdirection);

            for(let i = 0; i < toTMArrivalTimeList.length; i++){
                if(i == 0 && parseInt(toTMArrivalTimeList[0]) > 55) {
                    $popupProjectContentInfo.append('Next train: <b>Leaving</b><br>')
                    continue
                }
                // console.log(toTMArrivalTimeList[i])
                toTMArrivalTimeList[i] == 0 ? $popupProjectContentInfo.append(`Next train: <b>Arriving/Leaving</b><br>`) : $popupProjectContentInfo.append(`Next train: <b>` + toTMArrivalTimeList[i] + ` min</b><br>`);
            };

            $popupProjectContentInfo.append(`<br>` + WKSdirection);

            for(let i = 0; i < toWKSArrivalTimeList.length; i++){
                // console.log(toWKSArrivalTimeList[i])
                if(i == 0 && parseInt(toWKSArrivalTimeList[0]) > 55) {
                    $popupProjectContentInfo.append('Next train: <b>Leaving</b><br>')
                    continue
                }
                toWKSArrivalTimeList[i] == 0 ? $popupProjectContentInfo.append(`Next train: <b>Arriving/Leaving</b><br>`) : $popupProjectContentInfo.append(`Next train: <b>` + toWKSArrivalTimeList[i] + ` min</b><br>`);
            };
        }
        $popupProjectContentInfo.append(`<br>` + `Station: ` + `<b>` + name);
        $popupProjectContentInfo.append(`<br>` + `Updated at: ` + `<b>` + time.toLocaleTimeString());
    };

    // Tsuen Wan Line view panel
    function TWLfeaturesView(terminusArrivalTime, name, station, toCENArrivalTimeList, toTSWArrivalTimeList) {
        const time = new Date();
        if(`TSW` == station){
            let direction = `<b>To Central: </b><br>`;
            $popupProjectContentInfo.html(direction);
            // console.log(terminusArrivalTime);
            for(let i = 0; i < terminusArrivalTime.length; i++){
                if(i == 0 && parseInt(terminusArrivalTime[0]) > 55) {
                    $popupProjectContentInfo.append('Next train: <b>Leaving</b><br>')
                    continue
                }
                terminusArrivalTime[i] == 0 ? $popupProjectContentInfo.append(`Next train: <b>Arriving/Leaving</b><br>`) : $popupProjectContentInfo.append(`Next train: <b>` + terminusArrivalTime[i] + ` min</b><br>`);
            };
        } else if (`CEN` == station){
            let direction = `<b>To Tsuen Wan: </b><br>`;
            $popupProjectContentInfo.html(direction);

            for(let i = 0; i < terminusArrivalTime.length; i++){
                if(i == 0 && parseInt(terminusArrivalTime[0]) > 55) {
                    $popupProjectContentInfo.append('Next train: <b>Leaving</b><br>')
                    continue
                }
                terminusArrivalTime[i] == 0 ? $popupProjectContentInfo.append(`Next train: <b>Arriving/Leaving</b><br>`) : $popupProjectContentInfo.append(`Next train: <b>` + terminusArrivalTime[i] + ` min</b><br>`);
            };
        } else {
            let TSWdirection = `<b>To Tsuen Wan: </b><br>`;
            let CENdirection = `<b>To Central: </b><br>`;
            // console.log(toTMArrivalTimeList);
            // console.log(toWKSArrivalTimeList);

            $popupProjectContentInfo.html(TSWdirection);

            for(let i = 0; i < toTSWArrivalTimeList.length; i++){
                if(i == 0 && parseInt(toTSWArrivalTimeList[0]) > 55) {
                    $popupProjectContentInfo.append('Next train: <b>Leaving</b><br>')
                    continue
                }
                // console.log(toTMArrivalTimeList[i])
                toTSWArrivalTimeList[i] == 0 ? $popupProjectContentInfo.append(`Next train: <b>Arriving/Leaving</b><br>`) : $popupProjectContentInfo.append(`Next train: <b>` + toTSWArrivalTimeList[i] + ` min</b><br>`);
            };

            $popupProjectContentInfo.append(`<br>` + CENdirection);

            for(let i = 0; i < toCENArrivalTimeList.length; i++){
                if(i == 0 && parseInt(toCENArrivalTimeList[0]) > 55) {
                    $popupProjectContentInfo.append('Next train: <b>Leaving</b><br>')
                    continue
                }
                toCENArrivalTimeList[i] == 0 ? $popupProjectContentInfo.append(`Next train: <b>Arriving/Leaving</b><br>`) : $popupProjectContentInfo.append(`Next train: <b>` + toCENArrivalTimeList[i] + ` min</b><br>`);
            };
        }
        $popupProjectContentInfo.append(`<br>` + `Station: ` + `<b>` + name);
        $popupProjectContentInfo.append(`<br>` + `Updated at: ` + `<b>` + time.toLocaleTimeString());
    };

    function busStopView(busRouteNumber, stopName) {
        let routeArr = [];
        for(let i = 0; i <busRouteNumber.length; i++){
            routeArr.push(busRouteNumber[i].route);
        };
        const set = new Set(routeArr);

        $popupProjectContentInfo.html('<b>Bus routes</b><br><br>');
        $popupProjectContentInfo.html("");
        for (const route of set.values()) {
            $popupProjectContentInfo.append(`<a class="bus-route" data-route="` + route + `" href="#">` + route + `</a><br>`);
        };
    };

    function busETADisplay(route, results) {
        const time = new Date();
        // console.log(results);
        let dir1 = [];
        let dir2 = [];
        for(let i = 0; i < results.data.length; i++){
            "O" == results.data[i].dir ? dir1.push(results.data[i]) : dir2.push(results.data[i]);
        }
        try{
            if(dir1.length > 0 && dir2.length > 0) {
                // Dir1 array
                $popupProjectContentInfo.html(`<b>` + route + `</b><br>`);
                $popupProjectContentInfo.append(`<b>To: ` + dir1[0].dest_tc) + `</b><br><br>`;
                for(var i = 0; i < dir1.length; i++) {
                    // console.log(dir1[i])
                    let minArrival = dir1[i].eta.split(":")[1] - time.getMinutes();
                    minArrival < 0 ? minArrival = minArrival + 60 : minArrival = minArrival;
    
                    if(i == 0 && parseInt(minArrival) > 55) {
                        $popupProjectContentInfo.append('Next Bus: <b>Arriving</b><br>')
                        continue
                    }
    
                    '0' == minArrival ? $popupProjectContentInfo.append('Next Bus: <b>Arriving</b><br>') : $popupProjectContentInfo.append(`Next Bus: <b>` + minArrival + ' min</b><br>');
                };
                $popupProjectContentInfo.append(`<br<b>>To: ` + dir1[0].dest_tc + `</b><br><br>`);
                // Dir2 array
                for(var i = 0; i < dir2.length; i++) {
                    let minArrival = dir2[i].eta.split(":")[1] - time.getMinutes();
                    minArrival < 0 ? minArrival = minArrival + 60 : minArrival = minArrival;
    
                    if(i == 0 && parseInt(minArrival) > 55) {
                        $popupProjectContentInfo.append('Next Bus: <b>Arriving</b><br>')
                        continue
                    }
    
                    '0' == minArrival ? $popupProjectContentInfo.append('Next Bus: <b>Arriving</b><br>') : $popupProjectContentInfo.append(`Next Bus: <b>` + minArrival + ' min</b><br>');
                };
            } else {
                // Normal station
                $popupProjectContentInfo.html(`<b>` + route + `</b><b><br>To: ` + results.data[0].dest_tc + `</b><br><br>`);
                for(var i = 0; i < results.data.length; i++){
                    let minArrival = results.data[i].eta.split(":")[1] - time.getMinutes();
                    minArrival < 0 ? minArrival = minArrival + 60 : minArrival = minArrival;
    
                    if(i == 0 && parseInt(minArrival) > 55) {
                        $popupProjectContentInfo.append('Next Bus: <b>Arriving</b><br>')
                        continue
                    }
    
                    '0' == minArrival ? $popupProjectContentInfo.append('Next Bus: <b>Arriving</b><br>') : $popupProjectContentInfo.append(`Next Bus: <b>` + minArrival + ' min</b><br>');
                }
            }
        } catch {
            $popupProjectContentInfo.html('<b>ETA information for route ' + route + ' is not avaliable now</b>') 
        }
        $popupProjectContentInfo.append(`<br>` + `Updated at: ` + `<b>` + time.toLocaleTimeString());
    }

    GeoMap.olMap.on('click', function (evt) {
        const popupProjectLay = new ol.Overlay({
            position: evt.coordinate,
            positioning: 'bottom-center',
            element: popupProject,
        });

        var studyFeatures = GeoMap.olMap.forEachFeatureAtPixel(evt.pixel,
            function (ft, l) {
                return ft;
            }, {
            layerFilter: function (layer) {
                    return layer === GeoMap.olStudyFeaturesLayer
            }
        });
    
        var workFeatures = GeoMap.olMap.forEachFeatureAtPixel(evt.pixel,
            function (ft, l) {
                return ft;
            }, {
            layerFilter: function (layer) {
                    return layer === GeoMap.olWorkFeaturesLayer
            }
        });
    
        if(workFeatures) {
            jobFeaturesView(workFeatures);
            GeoMap.olMap.addOverlay(popupProjectLay);
        }
        
        if (studyFeatures) {
            studyFeaturesView(studyFeatures);
            GeoMap.olMap.addOverlay(popupProjectLay);
        }
    
        function jobFeaturesView(feature) {
            let content = `Job Title: <b>` + feature.get('jobName') + `</b><br><br>` +
                          `Company: <b>` + feature.get('jobCompany') + `</b><br><br>` +
                          `Details: <b>` + feature.get('jobDescription') + `</b><br><br>` +
                          `Period: <b>` + feature.get('jobPeriod') + `</b><br>`;
            $popupProjectContentInfo.html(content);
        }
    
        function studyFeaturesView(feature) {
            let content = `Programme: <b>` + feature.get('studyProgramme') + `</b><br><br>` +
                          `Details: <b>` + feature.get('studyDetails')+ `</b><br><br>`;
            $popupProjectContentInfo.html(content);
        }
    
        closer.onclick = function () {
            popupProjectLay.setPosition(undefined);
            closer.blur();
            return false;
        };

        var tungChungLineStopFt = GeoMap.olMap.forEachFeatureAtPixel(evt.pixel,
            function (ft, l) {
                return ft;
            }, {
            layerFilter: function (layer) {
                    return layer === GeoMap.olTungChungLineLayer
            }
        });

        var tuenMaLineStopFt = GeoMap.olMap.forEachFeatureAtPixel(evt.pixel,
            function (ft, l) {
                return ft;
            }, {
            layerFilter: function (layer) {
                    return layer === GeoMap.olTuenMaLineLayer
            }
        });

        var tsuenWanLineStopFt = GeoMap.olMap.forEachFeatureAtPixel(evt.pixel,
            function (ft, l) {
                return ft;
            }, {
            layerFilter: function (layer) {
                    return layer === GeoMap.olTsuenWanLineLayer
            }
        });

        var busStopFilteredFt = GeoMap.olMap.forEachFeatureAtPixel(evt.pixel,
            function (ft, l) {
                return ft;
            }, {
            layerFilter: function (layer) {
                    return layer === GeoMap.olBusStopsFilteredLayer
            }
        });



        // Tung Chung Line feature stops
        if (tungChungLineStopFt) {
            $.ajax({
                type:'GET',
                url:`https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=` + tungChungLineStopFt.get('line') + `&sta=` + tungChungLineStopFt.get('sta'),
                success: function(results){
                    const time = new Date();

                    for(var key in results.data){
                        var thisStop = key;
                    };
                    if(`TCL-TUC` == thisStop) {
                        let arrivalTimeList = [];
                        for(let i = 0; i < results.data[`TCL-` + tungChungLineStopFt.get('sta')].DOWN.length; i++){
                            let toHKDirectionTime = results.data[`TCL-` + tungChungLineStopFt.get('sta')].DOWN[i].time;
                            if (toHKDirectionTime.split(":")[1]  - time.getMinutes() < 0){
                                var minArrival = toHKDirectionTime.split(":")[1]  - time.getMinutes() + 60;
                            } else {
                                var minArrival = toHKDirectionTime.split(":")[1]  - time.getMinutes();
                            };
                            arrivalTimeList.push(minArrival);
                        };
                        TCLfeaturesView(arrivalTimeList, tungChungLineStopFt.get('name'), tungChungLineStopFt.get('sta'));
                    } else if(`TCL-HOK` == thisStop){
                        let arrivalTimeList = [];
                        for(let i = 0; i < results.data[`TCL-` + tungChungLineStopFt.get('sta')].UP.length; i++){
                            let toTCDirectionTime = results.data[`TCL-` + tungChungLineStopFt.get('sta')].UP[i].time;
                            if (toTCDirectionTime.split(":")[1]  - time.getMinutes() < 0){
                                var minArrival = toTCDirectionTime.split(":")[1]  - time.getMinutes() + 60;
                            } else {
                                var minArrival = toTCDirectionTime.split(":")[1]  - time.getMinutes();
                            };
                            arrivalTimeList.push(minArrival);
                        };
                        TCLfeaturesView(arrivalTimeList, tungChungLineStopFt.get('name'), tungChungLineStopFt.get('sta'));
                    } else {
                        let toHKArrivalTimeList = [];
                        let toTCArrivalTimeList = [];

                        for(let i = 0; i < results.data[`TCL-` + tungChungLineStopFt.get('sta')].UP.length; i++){
                            let toTCDirectionTime = results.data[`TCL-` + tungChungLineStopFt.get('sta')].UP[i].time;
                            if (toTCDirectionTime.split(":")[1]  - time.getMinutes() < 0){
                                var minArrival = toTCDirectionTime.split(":")[1]  - time.getMinutes() + 60;
                            } else {
                                var minArrival = toTCDirectionTime.split(":")[1]  - time.getMinutes();
                            };
                            toTCArrivalTimeList.push(minArrival);
                        };
                        for(let i = 0; i < results.data[`TCL-` + tungChungLineStopFt.get('sta')].DOWN.length; i++){
                            let toHKDirectionTime = results.data[`TCL-` + tungChungLineStopFt.get('sta')].DOWN[i].time;
                            if (toHKDirectionTime.split(":")[1]  - time.getMinutes() < 0){
                                var minArrival = toHKDirectionTime.split(":")[1]  - time.getMinutes() + 60;
                            } else {
                                var minArrival = toHKDirectionTime.split(":")[1]  - time.getMinutes();
                            };
                            toHKArrivalTimeList.push(minArrival);
                        };

                        TCLfeaturesView(" ", tungChungLineStopFt.get('name'), tungChungLineStopFt.get('sta'), toHKArrivalTimeList, toTCArrivalTimeList);
                    }
                }
            });
            GeoMap.olMap.addOverlay(popupProjectLay);
        }
        
        // Tuen Ma Line feature stops
        if (tuenMaLineStopFt) {
            $.ajax({
                type:'GET',
                url:`https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=` + tuenMaLineStopFt.get('line') + `&sta=` + tuenMaLineStopFt.get('sta'),
                success: function(results){
                    const time = new Date();

                    // console.log(results);
                    for(var key in results.data){
                        var thisStop = key;
                    };
                    if(`TML-TUM` == thisStop) {
                        let arrivalTimeList = [];
                        for(let i = 0; i < results.data[`TML-` + tuenMaLineStopFt.get('sta')].DOWN.length; i++){
                            let toWKSDirection = results.data[`TML-` + tuenMaLineStopFt.get('sta')].DOWN[i].time;
                            if (toWKSDirection.split(":")[1]  - time.getMinutes() < 0){
                                var minArrival = toWKSDirection.split(":")[1]  - time.getMinutes() + 60;
                            } else {
                                var minArrival = toWKSDirection.split(":")[1]  - time.getMinutes();
                            };
                            arrivalTimeList.push(minArrival);
                        };
                        TMLfeaturesView(arrivalTimeList, tuenMaLineStopFt.get('name'), tuenMaLineStopFt.get('sta'));
                    } else if(`TML-WKS` == thisStop){
                        let arrivalTimeList = [];
                        for(let i = 0; i < results.data[`TML-` + tuenMaLineStopFt.get('sta')].UP.length; i++){
                            let toTMDirection = results.data[`TML-` + tuenMaLineStopFt.get('sta')].UP[i].time;
                            if (toTMDirection.split(":")[1]  - time.getMinutes() < 0){
                                var minArrival = toTMDirection.split(":")[1]  - time.getMinutes() + 60;
                            } else {
                                var minArrival = toTMDirection.split(":")[1]  - time.getMinutes();
                            };
                            arrivalTimeList.push(minArrival);
                        };
                        TMLfeaturesView(arrivalTimeList, tuenMaLineStopFt.get('name'), tuenMaLineStopFt.get('sta'));
                    } else {
                        let toWKSArrivalTimeList = [];
                        let toTMArrivalTimeList = [];

                        for(let i = 0; i < results.data[`TML-` + tuenMaLineStopFt.get('sta')].DOWN.length; i++){
                            let toWKSDirection = results.data[`TML-` + tuenMaLineStopFt.get('sta')].DOWN[i].time;
                            if (toWKSDirection.split(":")[1]  - time.getMinutes() < 0){
                                var minArrival = toWKSDirection.split(":")[1]  - time.getMinutes() + 60;
                            } else {
                                var minArrival = toWKSDirection.split(":")[1]  - time.getMinutes();
                            };
                            toWKSArrivalTimeList.push(minArrival);
                        };
                        for(let i = 0; i < results.data[`TML-` + tuenMaLineStopFt.get('sta')].UP.length; i++){
                            let toTMDirection = results.data[`TML-` + tuenMaLineStopFt.get('sta')].UP[i].time;
                            if (toTMDirection.split(":")[1]  - time.getMinutes() < 0){
                                var minArrival = toTMDirection.split(":")[1]  - time.getMinutes() + 60;
                            } else {
                                var minArrival = toTMDirection.split(":")[1]  - time.getMinutes();
                            };
                            toTMArrivalTimeList.push(minArrival);
                        };

                        TMLfeaturesView("", tuenMaLineStopFt.get('name'), tuenMaLineStopFt.get('sta'), toTMArrivalTimeList, toWKSArrivalTimeList);
                    }
                }
            });
            GeoMap.olMap.addOverlay(popupProjectLay);
        }

        // Tuen Ma Line feature stops
        if (tsuenWanLineStopFt) {
            $.ajax({
                type:'GET',
                url:`https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=` + tsuenWanLineStopFt.get('line') + `&sta=` + tsuenWanLineStopFt.get('sta'),
                success: function(results){
                    const time = new Date();

                    console.log(results);
                    for(var key in results.data){
                        var thisStop = key;
                    };
                    if(`TWL-TSW` == thisStop) {
                        let arrivalTimeList = [];
                        for(let i = 0; i < results.data[`TWL-` + tsuenWanLineStopFt.get('sta')].DOWN.length; i++){
                            let toCENDirection = results.data[`TWL-` + tsuenWanLineStopFt.get('sta')].DOWN[i].time;
                            if (toCENDirection.split(":")[1]  - time.getMinutes() < 0){
                                var minArrival = toCENDirection.split(":")[1]  - time.getMinutes() + 60;
                            } else {
                                var minArrival = toCENDirection.split(":")[1]  - time.getMinutes();
                            };
                            arrivalTimeList.push(minArrival);
                        };
                        TWLfeaturesView(arrivalTimeList, tsuenWanLineStopFt.get('name'), tsuenWanLineStopFt.get('sta'));
                    } else if(`TWL-CEN` == thisStop){
                        let arrivalTimeList = [];
                        for(let i = 0; i < results.data[`TWL-` + tsuenWanLineStopFt.get('sta')].UP.length; i++){
                            let toTSWirection = results.data[`TWL-` + tsuenWanLineStopFt.get('sta')].UP[i].time;
                            if (toTSWirection.split(":")[1]  - time.getMinutes() < 0){
                                var minArrival = toTSWirection.split(":")[1]  - time.getMinutes() + 60;
                            } else {
                                var minArrival = toTSWirection.split(":")[1]  - time.getMinutes();
                            };
                            arrivalTimeList.push(minArrival);
                        };
                        TWLfeaturesView(arrivalTimeList, tsuenWanLineStopFt.get('name'), tsuenWanLineStopFt.get('sta'));
                    } else {
                        let toTSWArrivalTimeList = [];
                        let toCENArrivalTimeList = [];

                        for(let i = 0; i < results.data[`TWL-` + tsuenWanLineStopFt.get('sta')].DOWN.length; i++){
                            let toCENDirection = results.data[`TWL-` + tsuenWanLineStopFt.get('sta')].DOWN[i].time;
                            if (toCENDirection.split(":")[1]  - time.getMinutes() < 0){
                                var minArrival = toCENDirection.split(":")[1]  - time.getMinutes() + 60;
                            } else {
                                var minArrival = toCENDirection.split(":")[1]  - time.getMinutes();
                            };
                            toCENArrivalTimeList.push(minArrival);
                        };
                        for(let i = 0; i < results.data[`TWL-` + tsuenWanLineStopFt.get('sta')].UP.length; i++){
                            let toTSWDirection = results.data[`TWL-` + tsuenWanLineStopFt.get('sta')].UP[i].time;
                            if (toTSWDirection.split(":")[1]  - time.getMinutes() < 0){
                                var minArrival = toTSWDirection.split(":")[1]  - time.getMinutes() + 60;
                            } else {
                                var minArrival = toTSWDirection.split(":")[1]  - time.getMinutes();
                            };
                            toTSWArrivalTimeList.push(minArrival);
                        };

                        TWLfeaturesView("", tsuenWanLineStopFt.get('name'), tsuenWanLineStopFt.get('sta'), toCENArrivalTimeList, toTSWArrivalTimeList);
                    }
                }
            });
            GeoMap.olMap.addOverlay(popupProjectLay);
        }

        if (busStopFilteredFt) {
            $.ajax({
                type: 'GET',
                url: `https://data.etabus.gov.hk/v1/transport/kmb/stop-eta/` + busStopFilteredFt.get('stop'),
                success: function(results){
                    // console.log(results);
                    busStopView(results.data);
                    GeoMap.olMap.addOverlay(popupProjectLay);
                    $('.bus-route').on('click', function(evt){
                        var route = $(this).data('route')
                        // This onclick handler must be put inside this 'success' function to work
                        try{
                            $.ajax({
                                type: 'GET',
                                url: `https://data.etabus.gov.hk/v1/transport/kmb/eta/` + busStopFilteredFt.get('stop') + 
                                `/` + $(this).data('route') + `/` + `1`,
                                success: function(results){
                                    busETADisplay(route, results);
                                }
                            });
                        } catch {
                            $.ajax({
                                type: 'GET',
                                url: `https://data.etabus.gov.hk/v1/transport/kmb/eta/` + busStopFilteredFt.get('stop') + 
                                `/` + $(this).data('route') + `/` + `2`,
                                success: function(results){
                                    busETADisplay(route, results);
                                }
                            });
                        }
                    })
                }
            });
        }
        
        closer.onclick = function () {
            popupProjectLay.setPosition(undefined);
            closer.blur();
            return false;
        };
    });
    const geolocation = new ol.Geolocation({
        tracking: true,
        // enableHighAccuracy must be set to true to have the heading value.
        trackingOptions: {
          enableHighAccuracy: true,
        },
        projection: GeoMap.olProj,
    });

    const accuracyFeature = new ol.Feature();
    const positionFeature = new ol.Feature();
    GeoMap.olBufferFeature = new ol.Feature();

    positionFeature.setStyle(
        new ol.style.Style({
                image: new ol.style.Circle({
                radius: 6,
                fill: new ol.style.Fill({
                    color: '#3399CC',
            }),
                stroke: new ol.style.Stroke({
                    color: '#fff',
                    width: 2,
                }),
            }),
        })
    );

    GeoMap.olBufferLayer = new ol.layer.Vector({
        source: GeoMap.olBufferSource,
            style: new ol.style.Style({
                fill: new ol.style.Fill({
                color: 'rgba(255,255,255,0.15)'
            }),
            stroke: new ol.style.Stroke({
                color: '#21618C',
                width: 2,
                lineDash: [2, 8],
            }),
            text: new ol.style.Text({
                text: `Buffer Search for Bus Stops ` + GeoApp.olBusSearchDist.toString() + `(m)`,
                color: 'rgba(255,255,255,0.15)',
                font: '16px Arial',
                offsetY: 12,
                placement: 'line',
                textAlign: 'start',
                overflow: true
            })
        }),
    });

    geolocation.on('change:accuracyGeometry', function () {
        accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
    });
    
    function addFilteredBusStops(){
        GeoMap.olBusStopsFilteredSource.clear();
        // GeoMap.ol3DPNFilteredSource.clear();
        const coordinates = geolocation.getPosition(); 

        positionFeature.setGeometry(coordinates ? new ol.geom.Point(coordinates) : null);

        var bufferParser = new jsts.io.OL3Parser();
        var jstsSourceGeom = bufferParser.read(new ol.geom.Point(coordinates));
        var jstsBufferGeom = jstsSourceGeom.buffer(GeoApp.olBusSearchDist);
        GeoMap.olBufferFeature.setGeometry(bufferParser.write(jstsBufferGeom));

        GeoMap.olBufferFeature.setStyle(function (feature) {
            return new ol.style.Style({
                    fill: new ol.style.Fill({
                    color: 'rgba(255,255,255,0.15)'
                }),
                stroke: new ol.style.Stroke({
                    color: '#21618C',
                    width: 2,
                    lineDash: [2, 8],
                }),
                text: new ol.style.Text({
                    text: `Buffer Search for Bus Stops ` + GeoApp.olBusSearchDist.toString() + `(m)`,
                    color: 'rgba(255,255,255,0.15)',
                    font: '16px Arial',
                    offsetY: 12,
                    placement: 'line',
                    textAlign: 'start',
                    overflow: true
                })
            });
        });

        GeoMap.olBusStopsSource.forEachFeatureInExtent(GeoMap.olBufferFeature.getGeometry().getExtent(), function(feature){
            GeoMap.olBusStopsFilteredSource.addFeature(feature);
        });

        // GeoMap.ol3DPNSource.forEachFeatureInExtent(GeoMap.olBufferFeature.getGeometry().getExtent(), function(feature){
        //     GeoMap.ol3DPNFilteredSource.addFeature(feature);
        // });
    };

    $('#bus-search-dist').on('input', function(){
        GeoApp.olBusSearchDist = this.value;
        addFilteredBusStops();
    });

    geolocation.on('change:position', function () {
        addFilteredBusStops();
    });



    GeoMap.olGeoLayer = new ol.layer.Vector({
        source: GeoMap.olGeoSource,
        image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({color: 'black'}),
            stroke: new ol.style.Stroke({
              color: [255,0,0], width: 2
            })
        }),
       
    });
    
    GeoMap.olBufferSource.addFeature(GeoMap.olBufferFeature);
    GeoMap.olGeoSource.addFeatures([accuracyFeature, positionFeature]);
    GeoMap.olMap.addLayer(GeoMap.olBusStopsFilteredLayer);
    // GeoMap.olMap.addLayer(GeoMap.ol3DPNFilteredLayer);
    // GeoMap.olMap.addLayer(GeoMap.olBusStopsLayer);
    GeoMap.olMap.addLayer(GeoMap.olGeoLayer);
    GeoMap.olMap.addLayer(GeoMap.olBufferLayer);
});


