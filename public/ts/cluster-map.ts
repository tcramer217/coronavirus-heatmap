import { CovidMap } from "./interface/covid-map";
import { MapOptions, Map, MarkerOptions, LatLngExpression, TileLayerOptions, Marker, Layer } from "leaflet";

import * as L from 'leaflet';
import 'leaflet.markercluster';
import { SpreadDay } from "./interface/spread";
import getSpread from "./spread";

export class ClusterMap implements CovidMap {
  
  options: MapOptions;
  map: Map;
  spread: SpreadDay[];

  constructor(mapId: string, opts?: MapOptions) {
    this.map = L.map(mapId, opts);
    this.spread = getSpread();
  }

  setTileLayer(titleUrl: string, opts?: TileLayerOptions): void {
    L.tileLayer(titleUrl, opts).addTo(this.map);
  }

  setMapView(center: LatLngExpression, startingZoom: number): void {
    this.map.setView(center, startingZoom);
  }

  addLayerToMap(layer: Layer): void {
    this.map.addLayer(layer);
  }

  createMarker(latLng: LatLngExpression, opts?: MarkerOptions): Marker<any> {
    return L.marker(latLng, opts);
  }

  getClustersForToday() {
    const today = this.spread[this.spread.length -1];
    this.showInfectedForDay(today);
  }

  showInfectedForDay(spreadDay: SpreadDay) {
    const occurances = spreadDay.occurances;
    const clusteredMarkers = L.markerClusterGroup();
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
    this.map.addLayer(clusteredMarkers);
  }

}