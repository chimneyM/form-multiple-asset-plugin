import React from "react";
import PropTypes from "prop-types";
import { getThemeStyle } from "../themeColor";
const Preview = ({ data, formConfig }) => {
  return <div style={getThemeStyle(formConfig.theme)}>{data}</div>;
};

Preview.propTypes = {
  data: PropTypes.string,
};

export default Preview;
