import { MapOptions, Map } from 'leaflet';
import * as L from 'leaflet';

const FIXED_ZOOM: number = 2;
const MAP_OPTS: MapOptions = {
  zoomControl: false,
  boxZoom: false,
  minZoom: FIXED_ZOOM,
  maxZoom: FIXED_ZOOM,
  dragging: false,
  center: L.latLng(100, 100)
};
const TILE_URL = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}';
const TILE_OPTS: L.TileLayerOptions = {
  id: 'mapbox/streets-v11',
  maxZoom: FIXED_ZOOM,
  tileSize: 512,
  zoomOffset: -1,
  accessToken: process.env.API_KEY
}

let map: Map = L.map('map', MAP_OPTS).setView([100,100], null);
L.tileLayer(TILE_URL, TILE_OPTS).addTo(map);
