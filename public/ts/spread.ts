import { Point } from "leaflet";
import { SpreadDay } from "./interface/spread";


export default function getSpread(): Array<SpreadDay> {
  return [
    // DAY 0, SITREP 1
    {
      day: 0,
      date: new Date('2020-01-21'),
      infectedToDate: 282,
      deathsToDate: 6,
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
    // DAY 1, SITREP 2
    {
      day: 1,
      date: new Date('2020-01-22'),
      infectedToDate: 314,
      deathsToDate: 6,
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
    },
    // DAY 2, SITREP 3
    {
      day: 2,
      date: new Date('2020-01-23'),
      infectedToDate: 581,
      deathsToDate: 17,
      occurances: [
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Hubei Province',
            point: new Point(31.12, 112.18),
            infectedCount: 375
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Unspecified',
            point: new Point(23.24, 113.30),
            infectedCount: 131
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Guangdong',
            point: new Point(23.24, 113.30),
            infectedCount: 26
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Beijing Municipality',
            point: new Point(39.55, 116.23),
            infectedCount: 10
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Shanghai Municipality',
            point: new Point(31.13, 121.29),
            infectedCount: 9
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Chongqing Municipality',
            point: new Point(29.33, 106.34),
            infectedCount: 5
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
            infectedCount: 2
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
            stateProvince: 'China - Hong Kong Special Administrative Region',
            point: new Point(22.18, 114.12),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Macau Special Administrative Region',
            point: new Point(22.10, 113.33),
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
            infectedCount: 4
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'United States of America - Washington',
            point: new Point(47.2, -122.54),
            infectedCount: 1
          }
        }
      ]
    },
    // DAY 3, SITREP 4
    {
      day: 3,
      date: new Date('2020-01-24'),
      infectedToDate: 846,
      deathsToDate: 25,
      occurances: [
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Hubei Province',
            point: new Point(31.12, 112.18),
            infectedCount: 375
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Unspecified',
            point: new Point(23.24, 113.30),
            infectedCount: 384
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Guangdong',
            point: new Point(23.24, 113.30),
            infectedCount: 32
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Beijing Municipality',
            point: new Point(39.55, 116.23),
            infectedCount: 10
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Shanghai Municipality',
            point: new Point(31.13, 121.29),
            infectedCount: 9
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Chongqing Municipality',
            point: new Point(29.33, 106.34),
            infectedCount: 5
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
            infectedCount: 2
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
            stateProvince: 'China - Hong Kong Special Administrative Region',
            point: new Point(22.18, 114.12),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Macau Special Administrative Region',
            point: new Point(22.10, 113.33),
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
            infectedCount: 2
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Viet Nam',
            point: new Point(21.01, 105.51),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Republic of Singapore',
            point: new Point(1.17, 103.50),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Thailand',
            point: new Point(13.45, 100.29),
            infectedCount: 4
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'United States of America - Washington',
            point: new Point(47.2, -122.54),
            infectedCount: 1
          }
        }
      ]
    },
    // DAY 35, SITREP 36
    {
      day: 35,
      date: new Date('2020-02-25'),
      infectedToDate: 80239,
      deathsToDate: 2705,
      occurances: [
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Hubei Province',
            point: new Point(31.12, 112.18),
            infectedCount: 64786
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Guangdong',
            point: new Point(23.24, 113.30),
            infectedCount: 1347
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Beijing Municipality',
            point: new Point(39.55, 116.23),
            infectedCount: 400
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Shanghai Municipality',
            point: new Point(31.13, 121.29),
            infectedCount: 335
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Chongqing Municipality',
            point: new Point(29.33, 106.34),
            infectedCount: 576
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Zhejiang Province',
            point: new Point(29.12, 120.30),
            infectedCount: 1205
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Jiangxi Province',
            point: new Point(27.18, 116.00),
            infectedCount: 934
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Sichuan Province',
            point: new Point(30.08, 102.56),
            infectedCount: 529
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Tianjin Municipality',
            point: new Point(39.08, 117.11),
            infectedCount: 135
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Henan Province',
            point: new Point(33.54, 113.30),
            infectedCount: 1271
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Hunan Province',
            point: new Point(28.06, 112.59),
            infectedCount: 1016
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Anhui Province',
            point: new Point(31.50, 117.0),
            infectedCount: 1016
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Shandong Province',
            point: new Point(36.24, 118.24),
            infectedCount: 755
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Yunnan Province',
            point: new Point(25.03, 101.52),
            infectedCount: 174
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Hainan Province',
            point: new Point(19.12, 109.42),
            infectedCount: 168
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Fujian Province',
            point: new Point(25.54, 118.18),
            infectedCount: 294
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Hebei Province',
            point: new Point(39.18, 116.42),
            infectedCount: 311
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Heilongjiang Province',
            point: new Point(48, 129),
            infectedCount: 480
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Jiangsu Province',
            point: new Point(32.54, 119.48),
            infectedCount: 631
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Guangxi Zhuang Autonomous Region',
            point: new Point(23.6, 108.3),
            infectedCount: 252
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Shaanxi Province',
            point: new Point(35.36, 108.24),
            infectedCount: 245
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Guizhou Province',
            point: new Point(26.50, 106.50),
            infectedCount: 146
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Shanxi Province',
            point: new Point(37.42, 112.24),
            infectedCount: 133
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Liaoning Province',
            point: new Point(41.06, 112.18),
            infectedCount: 121
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Jilin Province',
            point: new Point(43.42, 126.12),
            infectedCount: 93
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Gansu Province',
            point: new Point(38, 102),
            infectedCount: 91
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Xinjiang Uygur Autonomous Region',
            point: new Point(41, 85),
            infectedCount: 76
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Inner Mongolia Autonomous Region',
            point: new Point(44,113),
            infectedCount: 75
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Ningxia Hui Autonomous Region',
            point: new Point(38.28, 106.16),
            infectedCount: 71
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Taiwan, China (Using Taipei)',
            point: new Point(25.04, 121.31),
            infectedCount: 31
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Hong Kong Special Administrative Region',
            point: new Point(22.18, 114.12),
            infectedCount: 81
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Qinghai Province',
            point: new Point(35, 96),
            infectedCount: 18
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Macau Special Administrative Region',
            point: new Point(22.10, 113.33),
            infectedCount: 10
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'China - Tibet Autonomous Region',
            point: new Point(29.39, 91.07),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Japan',
            point: new Point(35.41, 139.41),
            infectedCount: 157
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Republic of Korea',
            point: new Point(37.33, 126.58),
            infectedCount: 977
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Viet Nam',
            point: new Point(21.01, 105.51),
            infectedCount: 16
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Republic of Singapore',
            point: new Point(1.17, 103.50),
            infectedCount: 90
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Australia - Canberra',
            point: new Point(-35.17, 149.07),
            infectedCount: 22
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Malaysia - Kuala Lumpur',
            point: new Point(3.08, 101.41),
            infectedCount: 22
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Thailand',
            point: new Point(13.45, 100.29),
            infectedCount: 37
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Philippines - Manila',
            point: new Point(14.35, 120.58),
            infectedCount: 3
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Kingdom of Cambodia - Phnom Penh',
            point: new Point(11.34, 104.55),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Republic of India - New Delhi',
            point: new Point(28.37, 77.12),
            infectedCount: 3
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Federal Democratic Republic of Nepal - Kathmandu',
            point: new Point(28.10, 84.15),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Democratic Socialist Republic of Sri Lanka - Sri Jayawardenepura Kotte',
            point: new Point(6.54, 79.53),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'United States of America - Washington',
            point: new Point(47.2, -122.54),
            infectedCount: 53
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Canada - Ottawa',
            point: new Point(45.24, -75.40),
            infectedCount: 10
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Canada - Ottawa',
            point: new Point(45.24, -75.40),
            infectedCount: 10
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Italy - Rome',
            point: new Point(41.54, 12.29),
            infectedCount: 229
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Germany - Berlin',
            point: new Point(52.31, 13.23),
            infectedCount: 16
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'France - Paris',
            point: new Point(48.51, 2.21),
            infectedCount: 12
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'The United Kingdom - London',
            point: new Point(51.30, -0.7),
            infectedCount: 13
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Israel - Jerusalem',
            point: new Point(31.47, 35.13),
            infectedCount: 2
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Russian Federation - Moscow',
            point: new Point(55.45, 37.37),
            infectedCount: 2
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Kingdom Of Spain - Madrid',
            point: new Point(40.26, -3.42),
            infectedCount: 2
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Kingdom Of Belgium - Brussels',
            point: new Point(50.51, 4.21),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Republic of Finland - Helsinki',
            point: new Point(60.1, 24.56),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Kingdom Of Sweden - Stockholm',
            point: new Point(59.21, 18.4),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Islamic Republic of Iran - Tehran',
            point: new Point(35.41, 51.25),
            infectedCount: 61
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'United Arab Emirates - Abu Dhabi',
            point: new Point(24.28, 54.22),
            infectedCount: 13
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Kingdom of Bahrain - Manama',
            point: new Point(26.13, 50.35),
            infectedCount: 8
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'State of Kuwait - Kuwait City',
            point: new Point(29.22, 47.58),
            infectedCount: 8
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Sultanate of Oman - Muscat',
            point: new Point(23.35, 58.24),
            infectedCount: 2
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Islamic Republic of Afghanistan - Kabul',
            point: new Point(33, 65),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Arab Republic of Egypt - Cairo',
            point: new Point(30.2, 31.13),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Republic of Iraq - Baghdad',
            point: new Point(33.20, 44.23),
            infectedCount: 1
          }
        },
        {
          type: 'Occurance',
          properties: {
            stateProvince: 'Lebanese Republic - Beirut',
            point: new Point(33.54, 35.32),
            infectedCount: 1
          }
        }
      ]
    }
  ];
}
