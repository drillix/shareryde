import React from 'react';
import Sidemenu from './sideMenu';
import Content from './content';



const Container = ()=>{
return (
     <div className="App-container">
          <Sidemenu/>
          <Content/>
     </div>
)
}

export default Container;