import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";

import useDelegator from "../../UseDelegator";
import eventActionDefine from "../../msgCompConfig";

const Set = (props) => {
  const Event_Center_getName = () => {
    return `${props.formConfig?.form_name}-${props.component.columnStyle.title}`;
  };
  useDelegator(
    props.component.id,
    { Event_Center_getName },
    eventActionDefine,
    props.formConfig?.id,
    props.child_id,
    props.index,
    { eventCenter: props.eventCenter, componentCenter: props.componentCenter }
  );
  return <Input />;
};

Set.propTypes = {
  data: PropTypes.string,
  onChange: PropTypes.func,
};

export default Set;
