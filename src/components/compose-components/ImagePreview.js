import React from "react";
import { HighlightOff } from "@material-ui/icons";
export default (props) => (
  <div>
    <button onClick={() => props.remove(props.id)}>
      <HighlightOff />
    </button>
    <img
      src={props.src}
      alt="preview"
      style={{ width: "15rem", height: "15rem" }}
    />
  </div>
);
