import React from "react";
import "./Rightbar.css";
import Img from "../../Image/gift.png";
import Img1 from "../../Image/ad (1).png";
import p3 from "../../Image/person/6.jpeg";
import Online from "../Online/Online";
import { Users } from "../../Data/Data";
const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="bithdayContiner">
          <img className="bithdayImg" alt="" src={Img} />
          <span className="birthdayText">
            <b>polo Foster</b>and<b> 3 other friends</b>have a birhday today.
          </span>
        </div>
        <img src={Img1} className="rightbarAd" />
        <h4 className="rightbartext">Online Friends</h4>
        <ul className="rightbarFreindsList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInformation">
          <div className="rightbarInforItem">
            <span className="rightbarInforkey">city</span>
            <span className="rightbarInforValue">India</span>
          </div>
          <div className="rightbarInforItem">
            <span className="rightbarInforkey">Form</span>
            <span className="rightbarInforValue">Bihar</span>
          </div>
          <div className="rightbarInforItem">
            <span className="rightbarInforkey">Relationship</span>
            <span className="rightbarInforValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarfollowings">
          <div className="rightbarfollowing">
            <img src="assets/Person/1.jpeg" className="rightbarFollowingImg" />
            <span className="rightbarfollowingNamr">Abhishek kumar</span>
          </div>
          <div className="rightbarfollowing">
            <img src="assets/Person/2.jpeg" className="rightbarFollowingImg" />
            <span className="rightbarfollowingNamr">Abhishek kumar</span>
          </div>
          <div className="rightbarfollowing">
            <img src="assets/Person/3.jpeg" className="rightbarFollowingImg" />
            <span className="rightbarfollowingNamr">Abhishek kumar</span>
          </div>
          <div className="rightbarfollowing">
            <img src="assets/Person/4.jpeg" className="rightbarFollowingImg" />
            <span className="rightbarfollowingNamr">Abhishek kumar</span>
          </div>
          <div className="rightbarfollowing">
            <img src="assets/Person/5.jpeg" className="rightbarFollowingImg" />
            <span className="rightbarfollowingNamr">Abhishek kumar</span>
          </div>
          <div className="rightbarfollowing">
            <img src="assets/Person/6.jpeg" className="rightbarFollowingImg" />
            <span className="rightbarfollowingNamr">Abhishek kumar</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> :<HomeRightbar/>}
      </div>
    </div>
  );
};
export default Rightbar;
