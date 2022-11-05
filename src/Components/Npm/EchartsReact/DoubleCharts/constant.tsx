export const TIME = 'time';
export const FORMATE_TIME = 'YYYY.MM.DD';
export const GREEN = '#0FBE3F';
export const RED = '#E62C3B';

export interface ITooltipConfigItem {
  haveRect: boolean;
  name: string;
  rectColor: string;
  value: string | number;
  valueColor: string;
  unitSymbol: string;
}

export interface ITooltipConfig {
  time: string;
  index_contrast_title: string;
  index_contrast: ITooltipConfigItem[];
  volatility_contrast_title: string;
  volatility_contrast: ITooltipConfigItem[];
}

export const DATA = [
  {
    time: '2020-01-02',
    compositeAccumulatedReturn: 0.12,
    benchmarkAccumulatedReturn: 0.12,
    compositeReturn: 0.12,
    benchmarkReturn: 0.12,
    compositeIndex: -2000,
    benchmarkIndex: -2000,
  },
  {
    time: '2020-01-03',
    compositeAccumulatedReturn: -0.124,
    benchmarkAccumulatedReturn: -0.123,
    compositeReturn: -0.124,
    benchmarkReturn: -0.123,
    compositeIndex: -3000,
    benchmarkIndex: -3000,
  },
  {
    time: '2020-01-04',
    compositeAccumulatedReturn: -0.124,
    benchmarkAccumulatedReturn: -0.123,
    compositeReturn: -0.124,
    benchmarkReturn: -0.123,
    compositeIndex: -4000,
    benchmarkIndex: -4000,
  },
  {
    time: '2020-01-05',
    compositeAccumulatedReturn: 0.124,
    benchmarkAccumulatedReturn: 0.123,
    compositeReturn: 0.124,
    benchmarkReturn: 0.123,
    compositeIndex: 1000,
    benchmarkIndex: 1000,
  },
  {
    time: '2020-01-06',
    compositeAccumulatedReturn: 0.124,
    benchmarkAccumulatedReturn: 0.123,
    compositeReturn: 0.124,
    benchmarkReturn: 0.123,
    compositeIndex: 1000,
    benchmarkIndex: 1000,
  },
  {
    time: '2020-01-07',
    compositeAccumulatedReturn: 0.124,
    benchmarkAccumulatedReturn: 0.123,
    compositeReturn: 0.124,
    benchmarkReturn: 0.123,
    compositeIndex: 1000,
    benchmarkIndex: 1000,
  },
  {
    time: '2020-01-08',
    compositeAccumulatedReturn: 0.124,
    benchmarkAccumulatedReturn: 0.123,
    compositeReturn: 0.124,
    benchmarkReturn: 0.123,
    compositeIndex: 1000,
    benchmarkIndex: 1000,
  },
];
