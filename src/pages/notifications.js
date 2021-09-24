import React from 'react';
import Nav from '../components/navItems';


const PageTitle = ()=>{
   return(
     <div className="page-title">
     Notifications
     </div>
   )
 }
 
 

const Notifications = ()=> {

   return ( 
    <div className="content">
      <Nav/>
      <PageTitle/>

    </div>
   )
}
  
 
 
 
export default Notifications;