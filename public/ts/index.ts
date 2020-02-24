import { MapOptions, Map, HeatMapOptions } from 'leaflet';
import { Point, HeatLatLngTuple } from "leaflet";
import * as L from 'leaflet';
import 'leaflet.heat';
import getSpread from './spread';

const MAP_OPTS: MapOptions = {
  minZoom: 0,
  maxZoom: 15,
  zoom: 2,
  center: [31.12,112.18]
};

const OSM_TITLE_URL = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
const OSM_TITLE_OPTS = {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
};

let map: Map = L.map('map', MAP_OPTS);
L.tileLayer(OSM_TITLE_URL, OSM_TITLE_OPTS).addTo(map);
map.setView([31.12,112.18], 2);

const HEAT_MAP_VALS: Array<HeatLatLngTuple> = [
  [31.1, 112.2, 0.9],
  [50, 100, 0.5]
]
const HEAT_LAYER_OPTS: HeatMapOptions = {
  minOpacity: 1,
  radius: 20
}
L.heatLayer(HEAT_MAP_VALS, HEAT_LAYER_OPTS).addTo(map);

function gatherPoint(x: number, y: number): Point {
  return map.latLngToLayerPoint(new L.LatLng(x, y));
}

const spread = getSpread();


function getEffects() {
  for (const spreadDay of spread) {
    const occurances = spreadDay.occurances;
    const heatForDay = new Array<HeatLatLngTuple>();
    for (const occurance of occurances) {
      let p: L.Point = occurance.properties.point;
      let heatForOccurance: HeatLatLngTuple = [p.x, p.y, 0.9];
      heatForDay.push(heatForOccurance);
    }
    L.heatLayer(heatForDay, HEAT_LAYER_OPTS).addTo(map);
  }
}

$('#clickMe').click(function() {
  getEffects();
});