import React from 'react';
import Sidemenu from './sideMenu';
import Content from './content';



const Container = ()=>{
return (
     <div className="local-container">
          <Sidemenu/>
          <Content/>
     </div>
)
}

export default Container;