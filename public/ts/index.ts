import { MapOptions, Map } from 'leaflet';
import * as L from 'leaflet';
import 'leaflet.heat';

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

const HEAT_MAP_VALS: Array<L.HeatLatLngTuple> = [
  [31.1, 112.2, 0.9],
  [50, 100, 0.5]
]
const HEAT_LAYER_OPTS: L.HeatMapOptions = {
  minOpacity: 1,
  radius: 20
}
L.heatLayer(HEAT_MAP_VALS, HEAT_LAYER_OPTS).addTo(map);