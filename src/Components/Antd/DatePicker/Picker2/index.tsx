import { useState } from "react";
import type moment from "moment";
import { Form, DatePicker } from "antd";
const { RangePicker } = DatePicker;
import ToolClass from "../toolClass";
const Picker2 = () => {
  const [form] = Form.useForm();
  const transformFn = new ToolClass();
  const [disabledTimeDates1, setDisabledTimeDates1] = useState([]);
  const [disabledTimeDates2, setDisabledTimeDates2] = useState([]);
  // 将表单分为 startTime1 startTime2  endTime1 endTime2
  const disabledRangeTime1 = (
    CurrentFormMoment: moment.MomentInput,
    type: string,
  ) => {
    const StartTime1 = disabledTimeDates1?.[0];
    if (type === "end") {
      return transformFn.disabledTime(StartTime1, CurrentFormMoment);
    }
    return {};
  };
  const disabledRangeTime2 = (
    CurrentFormMoment: moment.MomentInput,
    type: string,
  ) => {
    // startTime1
    const StartTime1 = form.getFieldValue("startTime")?.[0];
    // endTime1
    const endTime1 = disabledTimeDates2?.[0];
    if (type === "start") {
      return transformFn.disabledTime(StartTime1, CurrentFormMoment);
    }
    if (type === "end") {
      return transformFn.disabledTime(endTime1, CurrentFormMoment);
    }
    return {};
  };
  const disabledRangeDate = (CurrentFormMoment: moment.MomentInput) => {
    const StartTime = form.getFieldValue("startTime")?.[0];
    return transformFn.disabledDate(StartTime, CurrentFormMoment);
  };
  return (
    <>
      <h2>Picker2</h2>
      <Form form={form}>
        <Form.Item name="startTime">
          <RangePicker
            onChange={() => form.setFieldsValue({ endTime: null })}
            onCalendarChange={(val: any) => setDisabledTimeDates1(val)}
            disabledTime={disabledRangeTime1}
            showTime={{
              hideDisabledOptions: true,
            }}
          />
        </Form.Item>
        <Form.Item name="endTime">
          <RangePicker
            onCalendarChange={(val: any) => setDisabledTimeDates2(val)}
            disabledDate={disabledRangeDate}
            disabledTime={disabledRangeTime2}
            showTime={{
              hideDisabledOptions: true,
            }}
          />
        </Form.Item>
      </Form>
    </>
  );
};
export default Picker2;
