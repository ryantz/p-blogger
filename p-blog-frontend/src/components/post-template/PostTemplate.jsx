import React from "react";
import "./postTemplate.css";

const PostTemplate = () => {
  return (
    <>
      <div className="post-wrapper">
        <input type="text" className="post-title"></input>
        <input type="text" className="post-body"></input>

        <button type="submit">submit</button>
        <button type="submit">cancel</button>
      </div>
    </>
  );
};

export default PostTemplate;
