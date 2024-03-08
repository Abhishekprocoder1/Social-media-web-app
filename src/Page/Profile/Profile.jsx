import React from "react";
import "./Profile.css";
import Toolbar from "../../Component/Toolbar/Toolbar";
import Sidebar from "../../Component/Sidebar/Sidebar";
import Feedbar from "../../Component/Feedbar/Feedbar";
import Rightbar from "../../Component/Rightbar/Rightbar";
const Profile = () => {

  return (
    <>
      <Toolbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
            <div className="profileCover">
            <img className="profilecoverImg" src="assets/Post/3.jpeg" />
            <img className="profileUserImg" src="assets/Person/7.jpeg" />
          </div>
          <div className="profileInfo">
            <h4 className="ProfileINfoName">Abhishek kumar</h4>
            <span className="profileINfoDesc">Hello my frinds</span>
          </div>
            </div>
          <div className="profileRightBottom">
            <Feedbar />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
