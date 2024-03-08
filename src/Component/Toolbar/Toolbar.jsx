import React from "react";
import "./Toolbar.css";
import A1 from "../../Image/person/A1.jpg";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
const Toolbar = () => {
  return (
    <div className="toolbarContiner">
      <div className="toolbarleft">
        <span className="logo">Abhishek</span>
      </div>

      <div className="toolbarcenter">
        <div className="serachbar">
          <Search className="searchicon" />
          <input placeholder="search for frind,poor" className="searchinput" />
        </div>
      </div>

      <div className="toolbarright">
        <div className="topbarLink">
          <span className="topbarLink">Homepage</span>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbariconeBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbariconeBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbariconeBadge">3</span>
          </div>
        </div>
        <img src={A1} className="topbarimg" />
      </div>
    </div>
  );
};

export default Toolbar;
