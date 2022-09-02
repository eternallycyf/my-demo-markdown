/* eslint-disable react/jsx-key */
import moment, { MomentInput } from 'moment';
import React, {
  useState,
  useImperativeHandle,
  useRef,
  useEffect,
  Fragment,
} from 'react';
import { WEEK_DAY, MONTH } from './constant';
import styles from './index.less';
import * as transformFn from './utils';
import { Tag, Button, Row, Col } from 'antd';

interface Iprops {
  /**传入初始化的时间 */
  time: moment.MomentInput | string;
  /**待整理 */
  otherProps: any;
  [props: string]: any;
}

type IPickerType = 'year' | 'month' | 'date';
type ClickEvent = React.MouseEvent<HTMLTableRowElement>;

const Calendar = (props: Iprops) => {
  const { time: newTime = moment().format('YYYY-MM-DD') } = props;
  const [time, setTime] = useState(newTime);
  const [pickerType, setPickerType] = useState<IPickerType>('date');
  const [selectDays, setSelectDays] = useState<moment.MomentInput[]>([
    moment().format('YYYY-MM-DD'),
  ]);

  const createRestDaysTD = (restDays: number[], type = 'first') => {
    const subMonth = (e: ClickEvent) => {
      const currentDate =
        (e.target as HTMLElement).innerText.length >= 2
          ? (e.target as HTMLElement).innerText
          : 0 + (e.target as HTMLElement).innerText;
      let classNameNames: string[] = (e.target as Element).className.split(' ');
      if (
        classNameNames.includes(styles['current-day']) &&
        !classNameNames.includes(styles['selected']) &&
        pickerType == 'date'
      ) {
        (e.target as Element).className += ` ${styles.selected}`;
      } else {
        (e.target as Element).className = (e.target as Element).className.replace(
          styles['selected'],
          '',
        );
      }
      if (pickerType == 'date') {
        (e.target as Element).setAttribute(
          'data-date',
          moment(time).format(`YYYY-MM-[${currentDate}]`),
        );
      }

      if (type == 'first') {
        let newTime =
          moment(time)
            .subtract(1, 'month')
            .format('YYYY-MM') +
          '-' +
          currentDate;
        setTime(moment(newTime));
      } else {
        let newTime =
          moment(time)
            .add(1, 'month')
            .format('YYYY-MM') +
          '-' +
          currentDate;
        setTime(moment(newTime));
      }
    };
    return (
      <Fragment>
        {restDays?.map((item, index) => (
          <td
            onClick={(e: ClickEvent) => subMonth(e)}
            key={Math.random()}
            className={`${styles.day} ${styles['rest-day']}`}
          >
            {item}
          </td>
        ))}
      </Fragment>
    );
  };

  const createCurrentYearsTD = (
    currentYears: number[],
    time: moment.MomentInput,
  ) => {
    const currentDay = moment(time).get('year');
    return (
      <Fragment>
        {currentYears.map((item, index) => (
          <td
            key={Math.random()}
            className={`${styles.day} ${styles['current-day']} ${currentDay ==
              index + 1 && styles.current}`}
          >
            {item + 1}
          </td>
        ))}
      </Fragment>
    );
  };

  const createCurrentMonthTD = (
    currentMonths: number[],
    time: moment.MomentInput,
  ) => {
    const currentDay = moment(time).get('month');
    return (
      <Fragment>
        {currentMonths.map((item, index) => (
          <td
            key={Math.random()}
            className={`${styles.day} ${styles['current-day']} ${currentDay ==
              index + 1 && styles.current}`}
          >
            {item}
          </td>
        ))}
      </Fragment>
    );
  };

  const createCurrentDaysTD = (
    currentDays: number,
    time: moment.MomentInput,
  ) => {
    const currentTimeArr = Array.from(
      { length: currentDays },
      (item, index) => index,
    );
    const currentDay = moment(time).date();
    console.log(selectDays);
    return (
      <Fragment>
        {currentTimeArr?.map((item, index) => (
          <td
            key={Math.random()}
            className={`${styles.day} ${selectDays.includes(
              moment(time)
                .date(index + 1)
                .format('YYYY-MM-DD'),
            ) && styles.selected} ${styles['current-day']} ${currentDay ==
              index + 1 && styles.current}`}
            data-date={moment(time)
              .date(index + 1)
              .format('YYYY-MM-DD')}
          >
            {item + 1}
          </td>
        ))}
      </Fragment>
    );
  };

  const createDateTrs = (
    element: JSX.Element[],
    count: number,
    time: moment.MomentInput,
    pickerType = 'date',
  ) => {
    const trCount = ~~(element.length / count);

    const clickTime = (e: ClickEvent) => {
      const currentDate =
        (e.target as HTMLElement).innerText.length >= 2
          ? (e.target as HTMLElement).innerText
          : 0 + (e.target as HTMLElement).innerText;
      let classNameNames: string[] = (e.target as Element).className.split(' ');

      if (
        classNameNames.includes(styles['current-day']) &&
        !classNameNames.includes(styles['selected']) &&
        pickerType == 'date'
      ) {
        (e.target as Element).className += ` ${styles.selected}`;
        const currentDateString = moment(time).format(
          `YYYY-MM-[${currentDate}]`,
        );
        const newCurrentDateString = [
          ...new Set([...selectDays, currentDateString]),
        ];
        setSelectDays(newCurrentDateString);
      } else {
        (e.target as Element).className = (e.target as Element).className.replace(
          styles['selected'],
          '',
        );
        const currentDateString = moment(time).format(
          `YYYY-MM-[${currentDate}]`,
        );
        const newCurrentDateString = selectDays.filter(
          item => item != currentDateString,
        );
        setSelectDays(newCurrentDateString);
      }

      if (pickerType == 'date') {
        (e.target as Element).setAttribute(
          'data-date',
          moment(time).format(`YYYY-MM-[${currentDate}]`),
        );
      }

      if (pickerType == 'year') {
        (e.target as Element).setAttribute(
          'data-date',
          moment(time).format(`YYYY`),
        );
        const currentYear = moment((e.target as HTMLElement).innerText, 'YYYY');
        setTime(currentYear);
        setPickerType('date');
      }

      if (pickerType == 'month') {
        (e.target as Element).setAttribute(
          'data-date',
          moment(time).format(`MM`),
        );
        const currentMonth = moment((e.target as HTMLElement).innerText, 'MM');
        setTime(currentMonth);
        setPickerType('date');
      }
    };

    return (
      <>
        {Array.from({ length: trCount }, (item, index) => (
          <Fragment key={Math.random()}>
            <tr onClick={(e: ClickEvent) => clickTime(e)}>
              {element.slice(index * count, (index + 1) * count)}
            </tr>
          </Fragment>
        ))}
      </>
    );
  };

  const lastMonthRestDays = transformFn.getLastMonthRestDays(time);
  const currentMonthDayCount = transformFn.getMonthDayCount(time);
  const nextMonthRestDays = transformFn.getNextMonthRestDays(time);
  const lastMonthRestDaysTD = createRestDaysTD(lastMonthRestDays, 'first');
  const currentMonthDaysTD = createCurrentDaysTD(currentMonthDayCount, time);
  const nextMonthRestDaysTD = createRestDaysTD(nextMonthRestDays, 'end');

  const lastRestYears = [
    moment(transformFn.getFirstAndEndYear(time, '0'))
      .subtract(1, 'year')
      .get('year'),
  ];
  const currentYearCount = transformFn.getCurrentYearArea(
    moment(transformFn.getFirstAndEndYear(time, '0')),
    moment(transformFn.getFirstAndEndYear(time, '9')),
  );
  const nextRestYear = [
    moment(transformFn.getFirstAndEndYear(time, '9'))
      .add(1, 'year')
      .get('year'),
  ];
  const lastRestYearsTD = createRestDaysTD(lastRestYears);
  const currentYearCountTD = createCurrentYearsTD(currentYearCount, time);
  const nextRestYearTD = createRestDaysTD(nextRestYear);

  const currentMonthCountTD = createCurrentMonthTD(MONTH, time);
  return (
    <>
      <div>
        <h3>当前选中的日期</h3>
        <Row>
          {selectDays.map((item, index) => (
            <Fragment key={index}>
              <Tag color={'purple'}> {item}</Tag>
            </Fragment>
          ))}
        </Row>
        <Row>
          <Button
            style={{ margin: '20px 0' }}
            onClick={() => setSelectDays([])}
            type="primary"
          >
            clear
          </Button>
        </Row>
        <div className="ant-picker-panel-container">
          <div tabIndex={-1} className="ant-picker-panel">
            <div className="ant-picker-date-panel">
              {pickerType == 'date' && (
                <Fragment>
                  <div className="ant-picker-header">
                    <button
                      type="button"
                      tabIndex={-1}
                      className="ant-picker-header-super-prev-btn"
                      onClick={() => setTime(moment(time).subtract(1, 'year'))}
                    >
                      <span className="ant-picker-super-prev-icon"></span>
                    </button>
                    <button
                      type="button"
                      tabIndex={-1}
                      className="ant-picker-header-prev-btn"
                      onClick={() => setTime(moment(time).subtract(1, 'month'))}
                    >
                      <span className="ant-picker-prev-icon"></span>
                    </button>
                    <div className="ant-picker-header-view">
                      <button
                        type="button"
                        tabIndex={-1}
                        className="ant-picker-year-btn"
                        onClick={() => setPickerType('year')}
                      >
                        {moment(time).format('YYYY')}年
                      </button>
                      <button
                        type="button"
                        tabIndex={-1}
                        className="ant-picker-month-btn"
                        onClick={() => setPickerType('month')}
                      >
                        {moment(time).format('MM')}月
                      </button>
                    </div>
                    <button
                      type="button"
                      tabIndex={-1}
                      className="ant-picker-header-next-btn"
                      onClick={() => setTime(moment(time).add(1, 'month'))}
                    >
                      <span className="ant-picker-next-icon"></span>
                    </button>
                    <button
                      type="button"
                      tabIndex={-1}
                      className="ant-picker-header-super-next-btn"
                      onClick={() => setTime(moment(time).add(1, 'year'))}
                    >
                      <span className="ant-picker-super-next-icon"></span>
                    </button>
                  </div>
                  <div className="ant-picker-body">
                    <table
                      className={`${styles['my-calendar']} ant-picker-content`}
                    >
                      <thead>
                        <tr className={styles['week-day']}>
                          {WEEK_DAY.map((item, index) => (
                            <td key={index}>{item}</td>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {createDateTrs(
                          [
                            ...lastMonthRestDaysTD.props.children,
                            ...currentMonthDaysTD.props.children,
                            ...nextMonthRestDaysTD.props.children,
                          ],
                          7,
                          time,
                          'date',
                        )}
                      </tbody>
                    </table>
                  </div>
                </Fragment>
              )}
              {pickerType == 'year' && (
                <Fragment>
                  <div className="ant-picker-header">
                    <button
                      type="button"
                      tabIndex={-1}
                      className="ant-picker-header-super-prev-btn"
                      onClick={() => setTime(moment(time).subtract(10, 'year'))}
                    >
                      <span className="ant-picker-super-prev-icon"></span>
                    </button>
                    <div className="ant-picker-header-view">
                      <button type="button" className="ant-picker-decade-btn">
                        <>
                          {moment(
                            transformFn.getFirstAndEndYear(time, '0'),
                          ).format('YYYY')}
                          -
                          {moment(
                            transformFn.getFirstAndEndYear(time, '9'),
                          ).format('YYYY')}
                        </>
                      </button>
                    </div>
                    <button
                      type="button"
                      tabIndex={-1}
                      className="ant-picker-header-super-next-btn"
                      onClick={() => setTime(moment(time).add(10, 'year'))}
                    >
                      <span className="ant-picker-super-next-icon"></span>
                    </button>
                  </div>
                  <div className="ant-picker-body">
                    <table
                      className={`${styles['my-calendar']} ant-picker-content`}
                    >
                      <thead></thead>
                      <tbody>
                        {createDateTrs(
                          [
                            ...lastRestYearsTD.props.children,
                            ...currentYearCountTD.props.children,
                            ...nextRestYearTD.props.children,
                          ],
                          3,
                          time,
                          'year',
                        )}
                      </tbody>
                    </table>
                  </div>
                </Fragment>
              )}
              {pickerType == 'month' && (
                <Fragment>
                  <div className="ant-picker-header">
                    <button
                      type="button"
                      tabIndex={-1}
                      className="ant-picker-header-super-prev-btn"
                      onClick={() => setTime(moment(time).subtract(1, 'year'))}
                    >
                      <span className="ant-picker-super-prev-icon"></span>
                    </button>
                    <div className="ant-picker-header-view">
                      <button
                        type="button"
                        className="ant-picker-decade-btn"
                        onClick={() => setPickerType('year')}
                      >
                        {moment(time).format('YYYY')}年
                      </button>
                    </div>
                    <button
                      type="button"
                      tabIndex={-1}
                      className="ant-picker-header-super-next-btn"
                      onClick={() => setTime(moment(time).add(1, 'year'))}
                    >
                      <span className="ant-picker-super-next-icon"></span>
                    </button>
                  </div>
                  <div className="ant-picker-body">
                    <table
                      className={`${styles['my-calendar']} ant-picker-content`}
                    >
                      <thead></thead>
                      <tbody>
                        {createDateTrs(
                          [...currentMonthCountTD.props.children],
                          3,
                          time,
                          'month',
                        )}
                      </tbody>
                    </table>
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
