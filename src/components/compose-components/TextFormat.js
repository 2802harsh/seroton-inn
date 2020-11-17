import React from "react";
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';

export default (props) => {
  const setIcon = () => {
    switch(props.value){
      case 'B':
        return <FormatBoldIcon />
        break;
      case 'I':
        return <FormatItalicIcon />
        break;
      case 'U':
        return <FormatUnderlinedIcon />
        break;
      default:
        return ""
    }
  }
  return (
    <span
      className={"textformat"+" "+props.dataStyle}
      type="button"
      data-style={props.dataStyle}
      value={props.value}
      onMouseDown={props.handleMouseDown}
    >
      {setIcon()}
    </span>
  );
};
