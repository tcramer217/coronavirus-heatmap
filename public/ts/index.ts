import { MapOptions, Map } from 'leaflet';
import getSpread from './spread';

import * as L from 'leaflet';
import 'leaflet.heat';
import 'leaflet.markercluster';
import { SpreadDay } from './interface/spread';

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
// const OSM_TITLE_URL = 'https://tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png';
const OSM_TITLE_OPTS = {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
};

let map: Map = L.map('map', MAP_OPTS);
L.tileLayer(OSM_TITLE_URL, OSM_TITLE_OPTS).addTo(map);
map.setView([31.12,0], 2);


const spread = getSpread();
const clusteredMarkers = L.markerClusterGroup();

function getClustersForToday() {
  const today = spread[spread.length -1];
  showInfectedForDay(today);
}

function showInfectedForDay(spreadDay: SpreadDay) {
  const occurances = spreadDay.occurances;
  for (const occurance of occurances) {
    const occuranceCount = occurance.properties.infectedCount;
    const p: L.Point = occurance.properties.point;
    const title = occurance.properties.stateProvince;
    const occuranceLatLng: L.LatLng = new L.LatLng(p.x, p.y);
    // create a marker for the state/ province
    let marker = L.marker(occuranceLatLng, { title: title });
    marker.bindPopup(title);
    clusteredMarkers.addLayer(marker);
    // add the actual counts now
    // subtract 1 for marker already added for state/ provimce marker
    let i = occuranceCount - 1;
    while (i > 0) {
      let marker = L.marker(occuranceLatLng);
      marker.bindPopup(title);
      clusteredMarkers.addLayer(marker);
      i--;
    }
  }
  map.addLayer(clusteredMarkers);
}

$(document).ready(function() {
  getClustersForToday();
});