import moment from 'moment';
import { ITimesArr, MomentType } from './constant';

export const _removeUndefined = (arr: any[]) => {
  return arr.filter(item => item !== undefined);
};

export const _removeEmptyObject = (arr: any[]) => {
  return arr.filter(item => {
    return Object.keys(item).length > 0;
  });
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

export const _handleGetFormItemType = (dataIndex: string) => {
  let str = '';
  switch (dataIndex) {
    case 'section':
      str = 'rangePicker';
      break;
    default:
      str = 'input';
      break;
  }
  return str;
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
