import React from "react";
import TextArea from "./TextArea";

export default () => {
  return (
    <div class="compose">
      <div>
        <div class="image-container">
          <img src="./name.png" alt="profilePicture"></img>
        </div>
        <TextArea />
      </div>
    </div>
  );
};
