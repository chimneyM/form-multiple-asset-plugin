import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Select } from "antd";

import useDelegator from "../../UseDelegator";
import eventActionDefine from "../../msgCompConfig";
import { getThemeStyle } from "../themeColor";
const { Option } = Select;

const Add = ({
  data,
  onChange,
  formConfig,
  component,
  configuration: propsConfiguration,
  eventCenter,
  componentCenter,
}) => {
  const state2 = useRef(data);
  const [state, setState] = useState(data);
  const [configuration, setConfiguration] = useState({});

  useEffect(() => {
    setState(data)
  }, [data])

  useEffect(() => {
    try {
      setConfiguration(JSON.parse(propsConfiguration));
    } catch (error) {
      console.error("configuration解析错误", error);
    }
  }, []);

  const triggerEventCenter = async (targetValue) => {
    await eventCenter.triggerEventNew({
      objectId: formConfig?.id,
      componentId: component.id,
      type: "report",
      event: "change",
      payload: {
        value: targetValue,
      },
    });
  };

  const do_EventCenter_getValue = function () {
    console.log(state2.current);
    return {
      value: state2.current,
    };
  };

  const do_EventCenter_setValue = function ({ value }) {
    setState(value);
    // state2.current = value;
  };

  const Event_Center_getName = () => {
    return `${formConfig?.form_name}-${component.columnStyle.title}`;
  };

  // 事件中心注册挂载
  useDelegator(
    component.id,
    { Event_Center_getName, do_EventCenter_getValue, do_EventCenter_setValue },
    eventActionDefine,
    formConfig?.id,
    null,
    -1,
    { eventCenter, componentCenter }
  );

  return (
    <Select 
      style={getThemeStyle(formConfig.theme)}
      value={state ? Array.isArray(state) ? state : JSON.parse(state) : []}
      defaultValue={data ? Array.isArray(data) ? state:JSON.parse(data) : []}
      mode="multiple"
      allowClear
      onChange={(value) => {
        const str =value
        onChange(str);
        triggerEventCenter(str);
        state2.current = str;
        setState(str);
      }}
      {...configuration}
    >
      <Option value="1">选项1</Option>
      <Option value="2">选项2</Option>
      <Option value="3">选项3</Option>
    </Select>
  );
};

Add.propTypes = {
  data: PropTypes.string,
  onChange: PropTypes.func,
};

export default Add;
