import moment from "moment";

export default class ToolClass {
  protected _range = (start: number, end: number) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  // @@Demo1 场景: 两个DatePicker 结束时间表单 校验 需要晚于 开始时间表单
  // const [form] = Form.useForm();
  // const transformFn = new ToolClass()
  // const disabledTime = (CurrentFormMoment: moment.MomentInput) => {
  //   const StartTime = form.getFieldValue('startTime')
  //   return transformFn.disabledTime(StartTime, CurrentFormMoment)
  // }
  // const disabledDate = (CurrentFormMoment: moment.MomentInput) => {
  //   const StartTime = form.getFieldValue('startTime')
  //   return transformFn.disabledDate(StartTime, CurrentFormMoment)
  // }
  //  <Form form={form}>
  //       <Form.Item name='startTime'>
  //         <DatePicker
  //           showToday={false}
  //           showTime
  //           showNow={false}
  //           onChange={() => form.setFieldsValue({ endTime: null })}
  //         />
  //       </Form.Item>
  //       <Form.Item name='endTime'>
  //         <DatePicker
  //           showToday={false}
  //           showTime={{
  //             hideDisabledOptions: true
  //           }}
  //           showNow={false}
  //           disabledDate={disabledStartTime}
  //           disabledTime={disabledTime}
  //         />
  //       </Form.Item>
  //     </Form>
  /**
   * 两个DatePicker: 开始时间和结束时间表单
   * function: 当结束时间表单时 小于开始时间的 年月日 disabled
   * @param startTime 开始时间表单的值 form.getFieldsValue('startTime’)
   * @param current 组件disabledDate方法的 current
   * @returns {boolean}
   */
  disabledDate = (
    startTime: moment.MomentInput,
    current: moment.MomentInput,
  ) => {
    if (startTime == undefined) {
      return false;
    }
    if (current) {
      return current < moment(startTime).startOf("days");
    }
    return false;
  };
  /**
   * 两个DatePicker: 开始时间和结束时间表单
   * function: 当结束时间表单时 小于开始时间的 时分秒 disabled
   * @param StartFormMoment 开始时间表单的值 form.getFieldsValue('startTime’)
   * @param CurrentFormMoment 当前表单的值:结束时间表单
   * @returns {}
   */
  disabledTime = (
    StartFormMoment: moment.MomentInput,
    CurrentFormMoment: moment.MomentInput,
  ) => {
    // startTimes
    const startHours = moment(StartFormMoment).hour();
    const startMinutes = moment(StartFormMoment).minute();
    const startSeconds = moment(StartFormMoment).second();
    const startDate = moment(StartFormMoment).date();
    // currentTimes
    const currentHours = moment(CurrentFormMoment).hour();
    const currentMinutes = moment(CurrentFormMoment).minute();
    const currentDate = moment(CurrentFormMoment).date();
    if (CurrentFormMoment == undefined) {
      return {};
    }
    if (CurrentFormMoment && currentDate === startDate) {
      if (currentHours === startHours) {
        if (currentMinutes === startMinutes) {
          return {
            disabledHours: () => this._range(0, startHours),
            disabledMinutes: (selectedHour: number) =>
              selectedHour >= startHours ? this._range(0, startMinutes) : [],
            disabledSeconds: (selectedHour: number, selectedMinute: number) =>
              selectedHour >= startHours && selectedMinute >= startMinutes
                ? this._range(0, startSeconds)
                : [],
          };
        }
        return {
          disabledHours: () => this._range(0, startHours),
          disabledMinutes: (selectedHour: any) =>
            selectedHour >= startHours ? this._range(0, startMinutes) : [],
          disabledSeconds: () => [],
        };
      } else {
        return {
          disabledHours: () => this._range(0, startHours),
          disabledMinutes: () => [],
          disabledSeconds: () => [],
        };
      }
    }
    return {};
  };

  // @@Demo2 场景: 两个RangePicker
  //                1.第一个表单的结束时间需要晚于第一个表单的开始时间
  //                2.第二个表单的开始时间需要晚于第一个表单的开始时间
  //                3.第二个表单的结束时间需要晚于第二个表单的开始时间
  /**
   * 两个RangePicker
   * 继续复用 ToolClass.disabledDate 和 ToolClass.disabledTime
   */
  // import { useState } from 'react'
  // import moment from 'moment'
  // import { Form, DatePicker } from 'antd'
  // const { RangePicker } = DatePicker;
  // import ToolClass from '../toolClass'
  // const Picker2 = () => {
  //   const [form] = Form.useForm();
  //   const transformFn = new ToolClass()
  //   const [disabledTimeDates1, setDisabledTimeDates1] = useState([]);
  //   const [disabledTimeDates2, setDisabledTimeDates2] = useState([]);
  //   // 将表单分为 startTime1 startTime2  endTime1 endTime2
  //   const disabledRangeTime1 = (CurrentFormMoment: moment.MomentInput, type: string) => {
  //     let StartTime1 = disabledTimeDates1?.[0];
  //     if (type === 'end') {
  //       return transformFn.disabledTime(StartTime1, CurrentFormMoment)
  //     }
  //     return {}
  //   };
  //   const disabledRangeTime2 = (CurrentFormMoment: moment.MomentInput, type: string) => {
  //     // startTime1
  //     let StartTime1 = form.getFieldValue('startTime')?.[0];
  //     // endTime1
  //     let endTime1 = disabledTimeDates2?.[0];
  //     if (type === 'start') {
  //       return transformFn.disabledTime(StartTime1, CurrentFormMoment)
  //     }
  //     if (type === 'end') {
  //       return transformFn.disabledTime(endTime1, CurrentFormMoment)
  //     }
  //     return {}
  //   };
  //   const disabledRangeDate = (CurrentFormMoment: moment.MomentInput) => {
  //     let StartTime = form.getFieldValue('startTime')?.[0];
  //     return transformFn.disabledDate(StartTime, CurrentFormMoment);
  //   }
  //   return (
  //     <>
  //       <h2>Picker2</h2>
  //       <Form form={form}>
  //         <Form.Item name='startTime'>
  //           <RangePicker
  //             onChange={() => form.setFieldsValue({ endTime: null })}
  //             onCalendarChange={(val: any) => setDisabledTimeDates1(val)}
  //             disabledTime={disabledRangeTime1}
  //             showTime={{
  //               hideDisabledOptions: true
  //             }}
  //           />
  //         </Form.Item>
  //         <Form.Item name='endTime'>
  //           <RangePicker
  //             onCalendarChange={(val: any) => setDisabledTimeDates2(val)}
  //             disabledDate={disabledRangeDate}
  //             disabledTime={disabledRangeTime2}
  //             showTime={{
  //               hideDisabledOptions: true
  //             }}
  //           />
  //         </Form.Item>
  //       </Form>
  //     </>
  //   )
  // }
  // export default Picker2
}
