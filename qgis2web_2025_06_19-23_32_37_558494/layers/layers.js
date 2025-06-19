var wms_layers = [];


        var lyr_EsriTopoWorld_0 = new ol.layer.Tile({
            'title': 'Esri Topo World',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_StateMalaysia_1 = new ol.format.GeoJSON();
var features_StateMalaysia_1 = format_StateMalaysia_1.readFeatures(json_StateMalaysia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateMalaysia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateMalaysia_1.addFeatures(features_StateMalaysia_1);
var lyr_StateMalaysia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateMalaysia_1, 
                style: style_StateMalaysia_1,
                popuplayertitle: 'State Malaysia',
                interactive: true,
                title: '<img src="styles/legend/StateMalaysia_1.png" /> State Malaysia'
            });
var format_CartogramofPopulation_2 = new ol.format.GeoJSON();
var features_CartogramofPopulation_2 = format_CartogramofPopulation_2.readFeatures(json_CartogramofPopulation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CartogramofPopulation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CartogramofPopulation_2.addFeatures(features_CartogramofPopulation_2);
var lyr_CartogramofPopulation_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CartogramofPopulation_2, 
                style: style_CartogramofPopulation_2,
                popuplayertitle: 'Cartogram of Population',
                interactive: true,
    title: 'Cartogram of Population<br />\
    <img src="styles/legend/CartogramofPopulation_2_0.png" /> 227025<br />\
    <img src="styles/legend/CartogramofPopulation_2_1.png" /> 788706<br />\
    <img src="styles/legend/CartogramofPopulation_2_2.png" /> 997071<br />\
    <img src="styles/legend/CartogramofPopulation_2_3.png" /> 1015776<br />\
    <img src="styles/legend/CartogramofPopulation_2_4.png" /> 1443365<br />\
    <img src="styles/legend/CartogramofPopulation_2_5.png" /> 1459994<br />\
    <img src="styles/legend/CartogramofPopulation_2_6.png" /> 1520143<br />\
    <img src="styles/legend/CartogramofPopulation_2_7.png" /> 1890098<br />\
    <img src="styles/legend/CartogramofPopulation_2_8.png" /> 2258428<br />\
    <img src="styles/legend/CartogramofPopulation_2_9.png" /> 2420009<br />\
    <img src="styles/legend/CartogramofPopulation_2_10.png" /> 3120040<br />\
    <img src="styles/legend/CartogramofPopulation_2_11.png" /> 3233434<br />\
    <img src="styles/legend/CartogramofPopulation_2_12.png" /> 5411324<br />\
    <img src="styles/legend/CartogramofPopulation_2_13.png" /> <br />' });

lyr_EsriTopoWorld_0.setVisible(true);lyr_StateMalaysia_1.setVisible(true);lyr_CartogramofPopulation_2.setVisible(true);
var layersList = [lyr_EsriTopoWorld_0,lyr_StateMalaysia_1,lyr_CartogramofPopulation_2];
lyr_StateMalaysia_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'HASC_1': 'HASC_1', 'CC_1': 'CC_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'VALIDFR_1': 'VALIDFR_1', 'VALIDTO_1': 'VALIDTO_1', 'REMARKS_1': 'REMARKS_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_CartogramofPopulation_2.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'HASC_1': 'HASC_1', 'CC_1': 'CC_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'VALIDFR_1': 'VALIDFR_1', 'VALIDTO_1': 'VALIDTO_1', 'REMARKS_1': 'REMARKS_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Pop_2010': 'Pop_2010', 'State': 'State', 'pop_new': 'pop_new', });
lyr_StateMalaysia_1.set('fieldImages', {'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'HASC_1': 'TextEdit', 'CC_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'VALIDFR_1': 'TextEdit', 'VALIDTO_1': 'TextEdit', 'REMARKS_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CartogramofPopulation_2.set('fieldImages', {'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'HASC_1': 'TextEdit', 'CC_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'VALIDFR_1': 'TextEdit', 'VALIDTO_1': 'TextEdit', 'REMARKS_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Pop_2010': 'TextEdit', 'State': 'TextEdit', 'pop_new': 'Range', });
lyr_StateMalaysia_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'HASC_1': 'no label', 'CC_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'VALIDFR_1': 'no label', 'VALIDTO_1': 'no label', 'REMARKS_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_CartogramofPopulation_2.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'HASC_1': 'no label', 'CC_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'VALIDFR_1': 'no label', 'VALIDTO_1': 'no label', 'REMARKS_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Pop_2010': 'no label', 'State': 'no label', 'pop_new': 'no label', });
lyr_CartogramofPopulation_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});