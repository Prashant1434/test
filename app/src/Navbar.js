import React,{useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import {SidebarData, SidevarData} from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import Logo from './assets/icons/logo black line.png'
import Pic from "../src/assets/icons/profilepic.jpg";
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function Navbar(props) {
  const history = useHistory();
  const SignOut = () => {
    history.push("/");
  }
  const [sidebar, setSidebar]= useState(false);
  //var user = sessionStorage.getItem("User");
  const showSidebar = ()=> setSidebar(!sidebar)
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
    <div className='navbar'>
       <Link to="#" className='menu-bars' >
        <FaIcons.FaBars onClick={showSidebar}/>
       </Link>
       
       <div>
          <div>
                <img src={Logo} alt='' className='logonav' />
          </div>
          <p className='navName' style={{marginLeft : 500 , marginTop : 30 , fontSize : 30 , fontStyle : 'italic' , color : 'aqua'}}>Urban Property Management
       </p>
       <button type="button" class="btn btn-danger" style={{marginLeft : 1400 , marginTop : -80}} onClick={SignOut} >LogOut</button>
       
        </div>       
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
      SidebarData[props.user].map((item, index) =>{
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