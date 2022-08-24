import type moment from "moment";
import { Form, DatePicker } from "antd";
import ToolClass from "../toolClass";
const Picker1 = () => {
  const [form] = Form.useForm();
  const transformFn = new ToolClass();
  const disabledTime = (CurrentFormMoment: moment.MomentInput) => {
    const StartTime = form.getFieldValue("startTime");
    return transformFn.disabledTime(StartTime, CurrentFormMoment);
  };
  const disabledDate = (CurrentFormMoment: moment.MomentInput) => {
    const StartTime = form.getFieldValue("startTime");
    return transformFn.disabledDate(StartTime, CurrentFormMoment);
  };
  return (
    <>
      <h2>Picker1</h2>
      <Form form={form}>
        <Form.Item name="startTime">
          <DatePicker
            style={{ minWidth: "100%" }}
            showToday={false}
            showTime
            showNow={false}
            onChange={() => form.setFieldsValue({ endTime: null })}
          />
        </Form.Item>
        <Form.Item name="endTime">
          <DatePicker
            style={{ minWidth: "100%" }}
            showToday={false}
            showTime={{
              hideDisabledOptions: true,
            }}
            showNow={false}
            disabledDate={disabledDate}
            disabledTime={disabledTime}
          />
        </Form.Item>
      </Form>
    </>
  );
};
export default Picker1;
