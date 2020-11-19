import React from "react";
import {
  FormatBold,
  FormatUnderlined,
  FormatItalic,
  Image,
} from "@material-ui/icons";

export default (props) => {
  const setIcon = () => {
    switch (props.value) {
      case "B":
        return <FormatBold />;
      case "I":
        return <FormatItalic />;
      case "U":
        return <FormatUnderlined />;
      case "IMG":
        return <Image />;
      default:
        return "";
    }
  };
  return (
    <span
      className={"textformat " + props.dataStyle}
      type="button"
      data-style={props.dataStyle}
      value={props.value}
      onMouseDown={props.handleMouseDown}
    >
      {setIcon()}
    </span>
  );
};
