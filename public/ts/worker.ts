import * as Supercluster from 'supercluster';
import getSpread from './spread';
import { Point } from 'leaflet';


// export class CoronaVirusSuperClusterWorker extends Worker {

// }
const now = Date.now();

let index: Supercluster;
const spread = getSpread();
let featureSpread = new Array<Supercluster.PointFeature<Point>>();
let myPoint = spread[0].occurances[0].properties.point;
featureSpread.push({
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [myPoint.x, myPoint.y] 
  },
  properties: myPoint
})

index = new Supercluster({
  log: true,
  radius: 60,
  extent: 256,
  maxZoom: 17
}).load(featureSpread);

self.onmessage = function(e: any) {
  if (e.data.getClusterExpansionZoom) {
    postMessage({
      expansionZoom: index.getClusterExpansionZoom(e.data.getClusterExpansionZoom),
      center: e.data.center
    });
  }
}