import React from 'react';
import logo from '../logo.svg'


const Logo =()=>{
     return(
          <img className="logo" src={logo} alt="logo" />
     )
}

const Menu = ()=>{
     return (
        <div>
          <ul className="menu">
             <a href="#"><li className="activated"><i className="material-icons">flip</i> Search</li></a>
             <a href="#"><li><i className="material-icons-outlined">person</i> Accounts</li></a>
             <a href="#"><li><i className="material-icons-outlined">forum</i> Community</li></a>
             <a href="#"><li className="menuBtn"><i className="material-icons">album</i> Offer Ride</li></a>     
          </ul>
        </div>
          
     )
}

const Sidemenu = ()=>{
     return(
          <div className="side-menu">
               <Logo/>
               <Menu/>
          </div>
     )
}

export default Sidemenu;