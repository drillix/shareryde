import React from 'react';
import  Nav  from './navItems';
import PageContent from './rideSearch';




const PageTitle = ()=>{
  return(
    <div className="page-title">
      Search
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