import React,{useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import {SidebarData, SidevarData} from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import Owner from '../Owner';
import Pic from '../assets/icons/profilepic.jpg'

function Navbar() {
  
  const [sidebar, setSidebar]= useState(false);
  var user = sessionStorage.getItem("User");
  const showSidebar = ()=> setSidebar(!sidebar)
  return (
    <>
    
    <IconContext.Provider value={{color:'#fff'}}>
    <div className='navbar'>
       <Link to="#" className='menu-bars' >
        <FaIcons.FaBars onClick={showSidebar}/>
       </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      
      <ul className='nav-menu-items' onClick={showSidebar}>
      
        <li className="navbar-toggle">
          
          <Link to="#" className='menu-bars'>
            <AiIcons.AiOutlineClose/>
          </Link>
        </li>
        <center>
      <div>
        <div className='profile'>
        <img src={Pic} alt='' className='profilepic' />
        </div>
        <div className='username'>Username</div>
      </div>
      </center>
      

      {
      SidebarData[user].map((item, index) =>{
        return (
          <li key={index} className ={item.cName}>
            <Link to={item.path}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        )
      })}
      </ul>
    </nav>
    </IconContext.Provider>
    </>
  );
}

export default Navbar