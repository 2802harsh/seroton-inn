import React, { useState, useEffect } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import TextFormat from "./TextFormat";
import ImagePreview from "./ImagePreview";
import { IconButton, Button } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import SendIcon from "@material-ui/icons/Send";
import { v4 as uuid } from "uuid";
import "draft-js/dist/Draft.css";

export default () => {
  const [editorState, changeEditorState] = useState(EditorState.createEmpty());
  const [src, setSrc] = useState([]);

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

  useEffect(() => {
    document.getElementById("icon-button-file").value = null;
    console.log(src);
  }, [src]);

  const onImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const imageArray = [...src];
      for (let file of e.target.files) {
        let img = new Image();
        img.src = URL.createObjectURL(file);
        img.title = file.name;
        let newObject = { image: img, id: uuid() };
        imageArray.push(newObject);
      }
      setSrc(imageArray);
    }
  };

  const remove = (id) => {
    setSrc(src.filter((data) => data.id !== id));
  };

  //Just for not going to search for it again
  // const getSelectedText = () => {
  //   var text = "";
  //   if (typeof window.getSelection != "undefined") {
  //     text = window.getSelection().toString();
  //   } else if (
  //     typeof document.selection != "undefined" &&
  //     document.selection.type === "Text"
  //   ) {
  //     text = document.selection.createRange().text;
  //   }
  //   return text;
  // };

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
            placeholder="Tell us something . . ."
            editorState={editorState}
            onChange={onChange}
            handleKeyCommand={handleKeyCommand}
          />
          <div className="imagePreviewContainer">
            {src.map((data) => (
              <ImagePreview
                image={data.image}
                key={data.id}
                id={data.id}
                remove={remove}
              />
            ))}
          </div>
        </div>
        <div className="compose__format-submit">
          <input
            accept="image/*"
            multiple
            id="icon-button-file"
            type="file"
            disabled={src.length >= 4}
            onChange={onImageUpload}
            style={{ display: "none" }}
          />
          <label htmlFor="icon-button-file">
            <IconButton component="span" style={{ padding: "0" }}>
              <ImageIcon
                style={
                  src.length < 4
                    ? { color: "black" }
                    : { color: "gray", ":hover": { cursor: "arrow" } }
                }
              />
            </IconButton>
          </label>

          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon></SendIcon>}
          >
            POST
          </Button>
        </div>
      </div>
    </>
  );
};
