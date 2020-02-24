import { Point } from "leaflet";
import { SpreadDay } from "./spread.d";

export default function getSpread(): Array<SpreadDay> {
  return [
    // DAY 0
    {
      day: 0,
      date: new Date('2020-01-20'),
      occurances: [
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Hubei Province',
            point: new Point(31.12, 112.18),
            infectedCount: 258
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Guangdong',
            point: new Point(23.24, 113.30),
            infectedCount: 14
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Beijing Municipality',
            point: new Point(39.55, 116.23),
            infectedCount: 5
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Shanghai Municipality',
            point: new Point(31.13, 121.29),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Japan',
            point: new Point(35.41, 139.41),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Republic of Korea',
            point: new Point(37.33, 126.58),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Thailand',
            point: new Point(13.45, 100.29),
            infectedCount: 2
          }
        }
      ]
    },
    // DAY 1
    {
      day: 1,
      date: new Date('2020-01-21'),
      occurances: [
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Hubei Province',
            point: new Point(31.12, 112.18),
            infectedCount: 270
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Guangdong',
            point: new Point(23.24, 113.30),
            infectedCount: 17
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Beijing Municipality',
            point: new Point(39.55, 116.23),
            infectedCount: 5
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Shanghai Municipality',
            point: new Point(31.13, 121.29),
            infectedCount: 2
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Chongqing Municipality',
            point: new Point(29.33, 106.34),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Zhejiang Province',
            point: new Point(29.12, 120.30),
            infectedCount: 5
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Jiangxi Province',
            point: new Point(27.18, 116.00),
            infectedCount: 2
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Sichuan Province',
            point: new Point(30.08, 102.56),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Tianjin Municipality',
            point: new Point(39.08, 117.11),
            infectedCount: 2
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Henan Province',
            point: new Point(33.54, 113.30),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Hunan Province',
            point: new Point(28.06, 112.59),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Shandong Province',
            point: new Point(36.24, 118.24),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Yunnan Province',
            point: new Point(25.03, 101.52),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Taiwan, China (Using Taipei)',
            point: new Point(25.04, 121.31),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Japan',
            point: new Point(35.41, 139.41),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Republic of Korea',
            point: new Point(37.33, 126.58),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Thailand',
            point: new Point(13.45, 100.29),
            infectedCount: 2
          }
        }
      ]
    }
  ];
}
