import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import profile from '../profile.jpg';

const Natifbtns = ()=>{
     return(
         
                <a href="#" className="navi">
                <i className="material-icons">notifications</i>
                </a>
          
     )
}

const DropdownList = ()=>{
     return(
          <Dropdown.Menu >
          <Dropdown.Item href="#" >
          <i className="material-icons-outlined">account_circle</i>
            Edit Profile
            
          </Dropdown.Item>
          <Dropdown.Item href="#">
          <i className="material-icons-outlined">info</i>

            About
          </Dropdown.Item>
          <Dropdown.Item href="#">
          <i className="material-icons-outlined">help_outline</i>
            FAQ
          </Dropdown.Item>
          <Dropdown.Item href="#">
          <i className="material-icons-outlined">settings</i>
            Settings
          </Dropdown.Item>
          <Dropdown.Item href="#">
          <i className="material-icons-outlined">power_settings_new</i>
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
     )
}

  
const Dropdownmenu = ()=>{
  return (
    <div >
      <Dropdown className="Dropdown">
      <Natifbtns/>
      <img alt="avatasr" className="rounded-circle profile-pic" src={profile}/>
        <Dropdown.Toggle className="usertxt" variant="white">
          Hi, Kofi  Brefo
        </Dropdown.Toggle>
        <DropdownList/>
      </Dropdown>
    </div>
  );
}

const Nav = ()=>{
     return(
          <div className="nav justify-content-end">
               <Dropdownmenu/>
              
          </div>
     )
}

const Content = ()=>{
     return (
          <div className="content">
               <Nav/>
               Search
          </div>
     )
}

export default Content;