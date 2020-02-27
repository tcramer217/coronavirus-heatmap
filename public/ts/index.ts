import { MapOptions, Map } from 'leaflet';
// import getSpread from './spread';

// import * as L from 'leaflet';
// import 'leaflet.heat';
// import 'leaflet.markercluster';
// import { SpreadDay } from './interface/spread';
import { ClusterMap } from './cluster-map';

const n =  new Date();
const y = n.getFullYear();
const m = n.getMonth() + 1;
const d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

const MAP_OPTS: MapOptions = {
  minZoom: 0,
  maxZoom: 15,
  zoom: 2,
  center: [31.12,0]
};

const OSM_TITLE_URL = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
const OSM_TITLE_OPTS = {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
};

// add cluster map
let covidCluster = new ClusterMap('map', MAP_OPTS);
covidCluster.setTileLayer(OSM_TITLE_URL, OSM_TITLE_OPTS);
covidCluster.setMapView([30, 0], 2);

$(document).ready(function() {
  covidCluster.getClustersForToday();
});