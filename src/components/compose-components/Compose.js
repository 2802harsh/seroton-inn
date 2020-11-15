import React from "react";
import TextArea from "./TextArea";
import Avatar from './Avatar';

export default () => {
  return (
    <div className="compose">
      <div className="compose__container">
        {/* <div class="image-container">
          <img src="./name.png" alt="profilePicture"></img>
        </div> */}
        <Avatar />
        <TextArea />
      </div>
    </div>
  );
};
