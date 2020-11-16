import React from "react";

export default (props) => {
  return (
    <input
      className="textformat"
      type="button"
      data-style={props.dataStyle}
      value={props.value}
      onMouseDown={props.handleMouseDown}
    />
  );
};
