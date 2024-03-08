import React from 'react'
import Toolbar from '../../Component/Toolbar/Toolbar';
import Sidebar from '../../Component/Sidebar/Sidebar';
import Feedbar from '../../Component/Feedbar/Feedbar';
import Rightbar from '../../Component/Rightbar/Rightbar';
import './Home.css';
const Home = () => {
  return (
    <>
      <Toolbar/>
      <div className='homeContainer'>
         <Sidebar/>
         <Feedbar/>
         <Rightbar/>
      </div>
    </>
  )
}

export default Home
