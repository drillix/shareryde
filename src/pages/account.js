import React from 'react';
import Nav from '../components/navItems';


const PageTitle = ()=>{
   return(
     <div className="page-title">
     Accounts
     </div>
   )
 }
 
 

const Account = ()=> {

   return ( 
    <div className="content">
      <Nav/>
      <PageTitle/>

    </div>
   )
}
  
 
 
 
export default Account;