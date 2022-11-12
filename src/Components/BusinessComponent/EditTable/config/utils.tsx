import moment from 'moment';
import {
  DATE_OPTIONS,
  HISTORY_DATA_SOURCE,
  IFormValues,
  ITimesArr,
  MomentType,
} from './constant';

// 移除数组中的Undefined
export const _removeUndefined = (arr: any[]) => {
  return arr.filter(item => item !== undefined);
};

export const flattenDeep: any = (arr: any) =>
  Array.isArray(arr)
    ? arr.reduce((a, b) => [...a, ...flattenDeep(b)], [])
    : [arr];

export const _findAllMessage = (originArr: any, keyArr: any) => {
  const arr: any[] = [];
  keyArr.forEach((item: any) => {
    arr.push(originArr.filter((ele: any) => ele.key == item));
  });
  return flattenDeep(arr);
};

// 当前产品组合的数据
export const handleFetchCurrentData = async (): Promise<any | IFormValues> => {
  // return await INIT_FORM_VALUES
  return await [];
};

// 历史数据的dataSource
export const handleFetchHistoryData = async (
  date: any = '',
): Promise<any[]> => {
  return await HISTORY_DATA_SOURCE;
};

// 历史数据日期select的options
export const handleFetchDateOptions = async (): Promise<any[]> => {
  return await DATE_OPTIONS;
};

export const _removeEmptyObject = (arr: any[]) => {
  return arr.filter(item => {
    return Object.keys(item).length > 0;
  });
};

// 检查是否跨区间操作
export const _checkIsBetweenSection = (
  arr: ITimesArr[],
  startTime: MomentType,
  endTime: MomentType,
) => {
  const minStartTime = moment(startTime).startOf('day');
  const maxEndTime = moment(endTime).endOf('day');
  const result = arr.find(
    (item: any) =>
      moment(item.startTime).isBetween(minStartTime, maxEndTime) ||
      moment(item.endTime).isBetween(minStartTime, maxEndTime),
  );
  const isExist = typeof result == 'object' ? true : false;
  return isExist;
};

// 禁用选过的时间区间
export const _disabledDateHasListScope = (
  arr: ITimesArr[],
  currentDate: MomentType = moment(),
) => {
  function getIsExitSection() {
    if (arr.length == 0) return false;
    const result = arr.find(
      (item: ITimesArr) =>
        !(currentDate! <= item.startTime! || currentDate! >= item.endTime!),
    );
    const isExist = typeof result == 'object' ? true : false;
    return isExist;
  }
  const isExist = !!getIsExitSection();
  return currentDate && isExist;
};
