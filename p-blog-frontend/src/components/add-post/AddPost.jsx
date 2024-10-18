import "./addPost.css";
import PostTemplate from "../post-template/PostTemplate";
import React, { useState } from "react";

const AddPost = () => {
  const [plusClick, setPlusClick] = useState(false);

  const handleClick = () => {
    setPlusClick((plusClick) => !plusClick);
  };

  return (
    <>
      <button onClick={handleClick}> + </button>
      {plusClick ? <PostTemplate /> : null}
    </>
  );
};

export default AddPost;
