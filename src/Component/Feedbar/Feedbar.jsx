import React from 'react'
import './Feedbar.css';
import Share from '../Share/Share';
import Post from '../Post/Post';
import {Posts} from '../../Data/Data'
const Feedbar = () => {
  return (
    <div className='Feedbar'>
      <div className="feedwrapper">
        <Share/>
       {Posts.map((p)=>(
         <Post key={p.id} post={p}/>
       ))}
      </div>
    </div>
  )
}

export default Feedbar
