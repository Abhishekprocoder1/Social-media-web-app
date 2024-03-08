import React from "react";
import "./Sidebar.css";
import { Bookmark, ChatSharp, Event, Group, HelpOutline, RssFeed, School, VideoCall, WorkOutline } from "@mui/icons-material";
import p2 from '../../Image/person/2.jpeg';
import  { Users } from '../../Data/Data'
import CLoseFrind from "../CloseFrind/CLoseFrind";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidbarwarapper">
        <ul className="sidebarLists">
          <li className="sidebarlist">
         <RssFeed className="sidebarIcon"/>
         <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarlist">
         <ChatSharp className="sidebarIcon"/>
         <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarlist">
         <VideoCall className="sidebarIcon"/>
         <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarlist">
         <Group className="sidebarIcon"/>
         <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarlist">
         <Bookmark className="sidebarIcon"/>
         <span className="sidebarListItemText">Booksmark</span>
          </li>
          <li className="sidebarlist">
         <HelpOutline className="sidebarIcon"/>
         <span className="sidebarListItemText">Question</span>
          </li>
          <li className="sidebarlist">
         <WorkOutline className="sidebarIcon"/>
         <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarlist">
         <Event className="sidebarIcon"/>
         <span className="sidebarListItemText">Event</span>
          </li>
          <li className="sidebarlist">
         <School className="sidebarIcon"/>
         <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarbutton">Show More</button>
      <hr className="sidebarhr"/>
      <ul className="sidebarfriendslist">
      {Users.map(u=>(
            <CLoseFrind key={u.id} user={u} />
          ))}
      </ul>
      </div>
    </div>
  );
};

export default Sidebar;
