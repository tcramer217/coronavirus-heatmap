import { MapOptions, Map, MarkerOptions, LatLngExpression, TileLayer, Marker, Layer } from "leaflet";
import { SpreadDay } from "./spread";

export interface CovidMap {
  options: MapOptions;
  map: Map;
  spread: SpreadDay[];

  setMapView(center: LatLngExpression, startingZoom: number): void;
  setTileLayer(titleUrl: string, opts?: MapOptions): void;
  addLayerToMap(layer: Layer): void;
  createMarker(latLng: LatLngExpression, opts?: MarkerOptions): Marker<any>;
}
