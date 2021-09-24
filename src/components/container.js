import React from 'react';
import Sidemenu from './sideMenu';
import Content from './content';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Account from '../pages/account';
import Community from '../pages/community';
import Offer from '../pages/offer';
import Notifications from '../pages/notifications';
import ErrorPage from '../pages/ErrorPage';


const Container = ()=>{
return (
     <div className="App-container">
               <BrowserRouter>
               <Sidemenu />
                  <Switch>
                        <Route path="/" exact  component={Content} />
                        <Route path="/pages/account" component={Account} />
                        <Route path="/pages/community" component={Community} />
                        <Route path="/pages/offer" component={Offer} />
                        <Route path="/pages/notifications" component={Notifications} />
                        <Route component={ErrorPage} />
                  </Switch>
                </BrowserRouter>
      
          
     </div>
)
}

export default Container;