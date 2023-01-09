import React from "react";
import PropTypes from "prop-types";
import { getThemeStyle } from "../themeColor";
const Table = ({ data, formConfig }) => {
  return <div style={getThemeStyle(formConfig.theme)}>{data}</div>;
};

Table.propTypes = {
  data: PropTypes.string,
};

export default Table;
