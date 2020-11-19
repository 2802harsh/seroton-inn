import React from "react";
import Editor from "./Editor";
import Avatar from "./Avatar";

export default () => {
  return (
    <div className="compose">
      <div className="compose__container">
        <Avatar />
        <Editor />
      </div>
    </div>
  );
};
