import React from "react";

export default (props) => {
  return (
    <input
      className={"textformat"+" "+props.dataStyle}
      type="button"
      data-style={props.dataStyle}
      value={props.value}
      onMouseDown={props.handleMouseDown}
    />
  );
};
