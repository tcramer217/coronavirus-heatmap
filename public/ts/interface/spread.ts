import { Point } from "leaflet";

export interface SpreadDay {
  day: number;
  date: Date;
  infectedToDate: number;
  deathsToDate: number;
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
