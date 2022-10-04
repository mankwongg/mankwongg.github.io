const popupProject = document.getElementById('popup-project');
const popupProjectContentInfo = document.getElementById('popup-project-content');
const closer = document.getElementById('popup-project-closer');
const popupProjectLay = new ol.Overlay({
    element: popupProject,
});
popupProjectLay.setPosition(undefined);

GeoMap.olMap.on('click', function (evt) {
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

    const popupProjectLay = new ol.Overlay({
        position: evt.coordinate,
        positioning: 'bottom-center',
        element: popupProject,
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
        popupProjectContentInfo.innerHTML = content;
    }

    function studyFeaturesView(feature) {
        let content = `Programme: <b>` + feature.get('studyProgramme') + `</b><br><br>` +
                      `Details: <b>` + feature.get('studyDetails')+ `</b><br><br>`;
        popupProjectContentInfo.innerHTML = content;
    }

    closer.onclick = function () {
        popupProjectLay.setPosition(undefined);
        closer.blur();
        return false;
    };
});

