import moment from 'moment';

type MomentTime = string | moment.MomentInput;

/**
 * 获取某个月份第一天是星期几
 * @see MomentTime
 * @param {string | moment.MomentInput} [time = moment()] 传入当前时间
 * @returns {number} days 天数
 */
export function getFirstWeekDay(time: MomentTime = moment()) {
  return moment(time)
    .startOf('month')
    .format('E');
}

/**
 * 获取某个月份一共有多少天
 * @see MomentTime
 * @param {string | moment.MomentInput} [time = moment()] 传入当前时间
 * @returns {number} days 天数
 */
export function getMonthDayCount(time: MomentTime = moment()) {
  return moment(time)
    .endOf('month')
    .date();
}

/**
 * 获取上个月剩余的天数
 * @see MomentTime
 * @param {string | moment.MomentInput} [time = moment()] 传入当前时间
 * @returns {number} restDays
 */
export function getLastMonthRestDays(time: MomentTime = moment()) {
  const days = ~~getFirstWeekDay(time);
  let lastDate = ~~getMonthDayCount(moment(time).subtract(1, 'month'));
  let restDays = [];
  while (restDays.length < days) {
    restDays.push(lastDate--);
  }
  restDays.reverse().shift();
  return restDays;
}

/**
 * 获取下个月剩余天数
 * @see MomentTime
 * @param {string | moment.MomentInput} [time = moment()] 传入当前时间
 * @returns {number} restDays
 */
export function getNextMonthRestDays(time: string | MomentTime = moment()) {
  const lastMonthRestDayCount = ~~getFirstWeekDay(time);
  const currentMonthDayCount = ~~getMonthDayCount(time);
  const nextMonthRestDayCount =
    42 - (lastMonthRestDayCount + currentMonthDayCount);
  let restDays = [];
  for (let i = 1; i <= nextMonthRestDayCount + 1; i++) {
    restDays.push(i);
  }
  return restDays;
}

/**
 * 格式化时间
 * @see MomentTime
 * @param {string | moment.MomentInput} [time = moment()] 传入当前时间
 * @param {string}  [format = 'YYYY-MM-DD']
 * @returns {string} 格式化后的时间
 */
function getFormatDate(
  time: MomentTime = moment(),
  format: string = 'YYYY-MM-DD',
) {
  return moment(time).format(format);
}

/**
 * 获取时间戳
 * @see MomentTime
 * @param {string | moment.MomentInput} [time = moment()] 传入当前时间
 * @returns {number} timestamp 时间戳
 */
function getTimestamp(time: MomentTime = moment()) {
  return moment(time).valueOf();
}

/**
 *
 * @param year 传入2022 转换为202x
 * @param replaceNumber
 * @returns
 */
export function getFirstAndEndYear(year: MomentTime, replaceNumber = '0') {
  let num: number = moment(year).get('year');
  let theUnit = parseInt(((num % 10) as unknown) as string);
  let tens = parseInt((((num % 100) / 10) as unknown) as string);
  let hundred = parseInt((((num % 1000) / 100) as unknown) as string);
  let thousand = parseInt((((num % 10000) / 1000) as unknown) as string);
  let resNum = '';
  if (theUnit !== 5) {
    if (thousand === 0) {
      resNum = hundred.toString() + tens.toString() + replaceNumber;
    } else {
      resNum =
        thousand.toString() +
        hundred.toString() +
        tens.toString() +
        replaceNumber;
    }
  }
  return moment(parseInt(resNum), 'YYYY');
}

/**
 * 获取当前年份的区间
 * @param startTime
 * @param endTime
 * @returns
 */
export function getCurrentYearArea(startTime: MomentTime, endTime: MomentTime) {
  let start = moment(startTime).get('year');
  let end = moment(endTime).get('year');
  let res = [];
  for (let i = start; i <= end; i++) {
    res.push(i);
  }
  // return res.map(item => moment(item, 'YYYY'))
  return res;
}
