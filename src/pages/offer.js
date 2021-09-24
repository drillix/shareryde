import React from 'react';
import Nav from '../components/navItems';

const PageTitle = ()=>{
   return(
     <div className="page-title">
          Offer Ride
     </div>
   )
 }
 
 

const Offer = ()=> {

   return ( 
    <div className="content">
      <Nav/>
      <PageTitle/>

    </div>
   )
}
  
 
 
 
export default Offer;