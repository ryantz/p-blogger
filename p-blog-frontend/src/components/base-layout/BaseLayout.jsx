import Login from "../buttons/Login";
import UserPostArea from "../user-post-area/UserPostArea";
import AddPost from "../add-post/AddPost";
import "./baseLayout.css";

const BaseLayout = () => {
  return (
    <>
      <div className="top-panel">
        <AddPost />
        <Login />
      </div>

      <div className="main-panel">
        <UserPostArea />
      </div>
    </>
  );
};

export default BaseLayout;
