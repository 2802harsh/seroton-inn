import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import TextFormat from "./TextFormat";

export default () => {
  const [editorState, changeEditorState] = useState(EditorState.createEmpty());
  const onChange = (val) => {
    changeEditorState(val);
  };

  /*The HTML element heirarchy
    profile-avatar
    compose__format
      compose__format-create
        div.toolbar
        div.DraftEditor-root      ------> Editor components start here
          div.DraftEditor-editorContainer
            \
             \
      compose__format-submit

  */
  //handles default key bindings defined by draft-js.
  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      changeEditorState(newState);
      return "handled";
    } else return "not-handled";
  };

  const toggleInlineStyle = (e) => {
    e.preventDefault();
    let style = e.currentTarget.getAttribute("data-style");
    onChange(RichUtils.toggleInlineStyle(editorState, style));
    // e.target.classList.toggle("selected");
  };

  return (
    <>
      <div className="compose__format">
        <div className="compose__format-create">
          <div className="toolbar">
            <TextFormat
              value="B"
              dataStyle="BOLD"
              handleMouseDown={toggleInlineStyle}
            />
            <TextFormat
              value="I"
              dataStyle="ITALIC"
              handleMouseDown={toggleInlineStyle}
            />
            <TextFormat
              value="U"
              dataStyle="UNDERLINE"
              handleMouseDown={toggleInlineStyle}
            />
          </div>
          <Editor
            placeholder = "Tell us something . . ."
            editorState={editorState}
            onChange={onChange}
            handleKeyCommand={handleKeyCommand}
          />
        </div>
        <div className="compose__format-submit"></div>
      </div>
    </>
  );
};
