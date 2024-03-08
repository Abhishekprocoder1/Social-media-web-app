import React from 'react'
import './CloseFrind.css'
const CLoseFrind = ({user}) => {
  return (
    <div>
        <li className="sidefrinds">
                <img className="sidebarimg" src={user.profilePicture} />
                <span className="siderbarfrinds">{user.username}</span>
        </li>
    </div>
  )
}

export default CLoseFrind
