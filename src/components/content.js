import React from 'react';
import {Dropdown} from 'react-bootstrap';
import profile from '../profile.jpg';
import PageContent from './rideSearch';



const Notifbtns = ()=>{
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

const Mobilemenu = ()=>{
  return(
    <div className="mobile-menu">
        <a href="#"> <i className="material-icons">menu</i> </a>
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

const PageTitle = ()=>{
  return(
    <div className="page-title">
      <a href ="#"><i className="material-icons">west</i>Search</a>
    </div>
  )
}




const Content = ()=>{
     return ( 
          <div className="content">
               <Nav/>
               <PageTitle/>
               <PageContent/>
          </div>
     )
}

export default Content;