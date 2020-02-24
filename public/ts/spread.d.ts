import { Point } from "leaflet";

interface SpreadDay {
  day: number;
  date: Date;
  occurances: SpreadOccurance[];
}

interface SpreadOccurance {
  type: SpreadType;
  properties: SpreadOccuranceProps;
}

interface SpreadOccuranceProps {
  stateProvince: string;
  point: Point;
  infectedCount: number;
}

type SpreadType = 'Occurance';
