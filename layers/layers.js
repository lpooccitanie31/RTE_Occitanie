var wms_layers = [];

var lyr_Ortho20cm_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-r/wms?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "HR.ORTHOIMAGERY.ORTHOPHOTOS",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortho 20 cm",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortho20cm_0, 0]);
var lyr_PlanIGNv2_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-r/wms?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Plan IGN v2",
                            opacity: 0.500000,
                            
                            
                          });
              wms_layers.push([lyr_PlanIGNv2_1, 0]);
var format_ligne_portetstsimon_2 = new ol.format.GeoJSON();
var features_ligne_portetstsimon_2 = format_ligne_portetstsimon_2.readFeatures(json_ligne_portetstsimon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ligne_portetstsimon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ligne_portetstsimon_2.addFeatures(features_ligne_portetstsimon_2);
var lyr_ligne_portetstsimon_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ligne_portetstsimon_2, 
                style: style_ligne_portetstsimon_2,
                popuplayertitle: "ligne_portet-stsimon",
                interactive: true,
                    title: '<img src="styles/legend/ligne_portetstsimon_2.png" /> ligne_portet-stsimon'
                });
var format_points_3 = new ol.format.GeoJSON();
var features_points_3 = format_points_3.readFeatures(json_points_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_3.addFeatures(features_points_3);
var lyr_points_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_points_3, 
                style: style_points_3,
                popuplayertitle: "points",
                interactive: true,
    title: 'points<br />\
    <img src="styles/legend/points_3_0.png" /> 1<br />\
    <img src="styles/legend/points_3_1.png" /> 2<br />\
    <img src="styles/legend/points_3_2.png" /> 3<br />\
    <img src="styles/legend/points_3_3.png" /> 4<br />\
    <img src="styles/legend/points_3_4.png" /> <br />'
        });
var format_pylonesrte_4 = new ol.format.GeoJSON();
var features_pylonesrte_4 = format_pylonesrte_4.readFeatures(json_pylonesrte_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pylonesrte_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pylonesrte_4.addFeatures(features_pylonesrte_4);
var lyr_pylonesrte_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pylonesrte_4, 
                style: style_pylonesrte_4,
                popuplayertitle: "pylones-rte",
                interactive: true,
                    title: '<img src="styles/legend/pylonesrte_4.png" /> pylones-rte'
                });

lyr_Ortho20cm_0.setVisible(true);lyr_PlanIGNv2_1.setVisible(true);lyr_ligne_portetstsimon_2.setVisible(true);lyr_points_3.setVisible(true);lyr_pylonesrte_4.setVisible(true);
var layersList = [lyr_Ortho20cm_0,lyr_PlanIGNv2_1,lyr_ligne_portetstsimon_2,lyr_points_3,lyr_pylonesrte_4];
lyr_ligne_portetstsimon_2.set('fieldAliases', {'type_ouvra': 'type_ouvra', 'code_ligne': 'code_ligne', 'nom_ligne': 'nom_ligne', 'proprietai': 'proprietai', 'etat': 'etat', 'tension': 'tension', 'source': 'source', 'nombre_cir': 'nombre_cir', 'identifica': 'identifica', 'nom_ouvrag': 'nom_ouvrag', 'propriet_1': 'propriet_1', 'identifi_1': 'identifi_1', 'nom_ouvr_1': 'nom_ouvr_1', 'propriet_2': 'propriet_2', 'identifi_2': 'identifi_2', 'nom_ouvr_2': 'nom_ouvr_2', 'propriet_3': 'propriet_3', 'identifi_3': 'identifi_3', 'nom_ouvr_3': 'nom_ouvr_3', 'propriet_4': 'propriet_4', });
lyr_points_3.set('fieldAliases', {'id': 'id', 'jour': 'jour', 'Observat': 'Observat', });
lyr_pylonesrte_4.set('fieldAliases', {'nom_ouvrage': 'nom_ouvrage', 'code_ligne': 'code_ligne', 'etat': 'etat', 'tension': 'tension', 'numero_pylo': 'numero_pylo', 'classe_prec': 'classe_prec', 'nombre_circ': 'nombre_circ', 'hauteur_pyl': 'hauteur_pyl', 'longitude_p': 'longitude_p', 'latitude_py': 'latitude_py', });
lyr_ligne_portetstsimon_2.set('fieldImages', {'type_ouvra': 'TextEdit', 'code_ligne': 'TextEdit', 'nom_ligne': 'TextEdit', 'proprietai': 'TextEdit', 'etat': 'TextEdit', 'tension': 'TextEdit', 'source': 'TextEdit', 'nombre_cir': 'TextEdit', 'identifica': 'TextEdit', 'nom_ouvrag': 'TextEdit', 'propriet_1': 'TextEdit', 'identifi_1': 'TextEdit', 'nom_ouvr_1': 'TextEdit', 'propriet_2': 'TextEdit', 'identifi_2': 'TextEdit', 'nom_ouvr_2': 'TextEdit', 'propriet_3': 'TextEdit', 'identifi_3': 'TextEdit', 'nom_ouvr_3': 'TextEdit', 'propriet_4': 'TextEdit', });
lyr_points_3.set('fieldImages', {'id': 'TextEdit', 'jour': 'TextEdit', 'Observat': 'TextEdit', });
lyr_pylonesrte_4.set('fieldImages', {'nom_ouvrage': 'TextEdit', 'code_ligne': 'TextEdit', 'etat': 'TextEdit', 'tension': 'TextEdit', 'numero_pylo': 'TextEdit', 'classe_prec': 'TextEdit', 'nombre_circ': 'TextEdit', 'hauteur_pyl': 'TextEdit', 'longitude_p': 'TextEdit', 'latitude_py': 'TextEdit', });
lyr_ligne_portetstsimon_2.set('fieldLabels', {'type_ouvra': 'no label', 'code_ligne': 'no label', 'nom_ligne': 'no label', 'proprietai': 'no label', 'etat': 'no label', 'tension': 'no label', 'source': 'no label', 'nombre_cir': 'no label', 'identifica': 'no label', 'nom_ouvrag': 'no label', 'propriet_1': 'no label', 'identifi_1': 'no label', 'nom_ouvr_1': 'no label', 'propriet_2': 'no label', 'identifi_2': 'no label', 'nom_ouvr_2': 'no label', 'propriet_3': 'no label', 'identifi_3': 'no label', 'nom_ouvr_3': 'no label', 'propriet_4': 'no label', });
lyr_points_3.set('fieldLabels', {'id': 'no label', 'jour': 'no label', 'Observat': 'no label', });
lyr_pylonesrte_4.set('fieldLabels', {'nom_ouvrage': 'no label', 'code_ligne': 'no label', 'etat': 'no label', 'tension': 'no label', 'numero_pylo': 'no label', 'classe_prec': 'no label', 'nombre_circ': 'no label', 'hauteur_pyl': 'no label', 'longitude_p': 'no label', 'latitude_py': 'no label', });
lyr_pylonesrte_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});