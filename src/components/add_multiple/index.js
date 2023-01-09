import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Input, Select } from "antd";
const { Option } = Select;
const Add = ({ data, onChange }) => {
  const [state, setState] = useState([]);
  const selectChange = (value) => {
    setState([value, state[1]]);
  };
  const inputChange = (e) => {
    setState([state[0], e.target.value]);
  };
  useEffect(() => {
    // * 如果是多字段组件，onChange需传递的值需要为数组，并且顺序要按照 confing.json assetColumnList 里设定的，每次调用会更改存储的值
    onChange(state);
  }, [state, onChange]);
  return (
    <Input.Group compact>
      <Select defaultValue={data[0]} onChange={selectChange}>
        <Option value="Zhejiang">Zhejiang</Option>
        <Option value="Jiangsu">Jiangsu</Option>
      </Select>
      <Input
        style={{ width: "50%" }}
        defaultValue={data[1]}
        onChange={inputChange}
      />
    </Input.Group>
  );
};

Add.propTypes = {
  data: PropTypes.string,
  onChange: PropTypes.func,
};

export default Add;
