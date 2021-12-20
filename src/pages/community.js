import React from 'react';
import Nav from '../components/navItems';

const PageTitle = ()=>{
   return(
     <div className="page-title">
     Community
     </div>
   )
 }
 
 

const Community = ()=> {

   return ( 
    <div className="content">
      <Nav/>
      <PageTitle/>

    </div>
   )
}
  
 
 
 
export default Community;