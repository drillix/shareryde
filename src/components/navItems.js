import React from 'react';
import {Dropdown} from 'react-bootstrap';
import profile from '../profile.jpg';
import { Link } from 'react-router-dom';



const Notifbtns = ()=>{
     return(
         
                <Link to="/pages/notifications" className="navi">
                <i className="material-icons">notifications</i>
                </Link>
          
     )
}

const DropdownList = ()=>{
     return(
          <Dropdown.Menu >
          <Dropdown.Item >
           <Link to="/profile">
           <i className="material-icons-outlined">account_circle</i>
            Edit Profile
           </Link>
          </Dropdown.Item>

          <Dropdown.Item >
          <Link  to="/About">
          <i className="material-icons-outlined">info</i>
            About
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
          <Link to="/FAQ">
          <i className="material-icons-outlined">help_outline</i>
            FAQ
          </Link>
          </Dropdown.Item>
          <Dropdown.Item >
          <Link to="/settings">
          <i className="material-icons-outlined">settings</i>
            Settings
          </Link>
         
          </Dropdown.Item>
          <Dropdown.Item >
          <Link to="/logout">
          <i className="material-icons-outlined">power_settings_new</i>
            Logout
          </Link>
          
          </Dropdown.Item>
        </Dropdown.Menu>
     )
}

const Mobilemenu = ()=>{
  return(
    <div className="mobile-menu">
        <Link to="/"> <i className="material-icons">menu</i> </Link>
    </div>
  )
}

  
const Dropdownmenu = ()=>{
let user = {
  firstname:'Kofi',
  lastname: 'Brefo'
}

let username = user.firstname +' '+ user.lastname;

  return (
    <div >
      <Dropdown className="Dropdown">
      <Notifbtns/>
      <img alt="avatasr" className="rounded-circle profile-pic" src={profile}/>
        <Dropdown.Toggle className="usertxt" variant="white">
          <span className="welcome">   Hi, {username}</span>
        </Dropdown.Toggle>
        <DropdownList/>
      </Dropdown>
    </div>
  );
}

const Nav = ()=>{
     return(
          <div className="top-nav">
               <Mobilemenu/>
               <Dropdownmenu/>
              
          </div>
     )
}


export default Nav;
 