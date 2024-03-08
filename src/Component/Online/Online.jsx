import React from 'react'
import './Online.css'
const Online = ({user}) => {
  return (
    <li className="rightbarFrinds">
    <div className="rightBarProfileImageContiner">
      <img src={user.profilePicture} className="rightbarprofileIMg" alt="" />
      <span className="rightbarOnline"></span>
    </div>
    <span className="rightbarUsername">{user.username}</span>
  </li>
  )
}

export default Online
