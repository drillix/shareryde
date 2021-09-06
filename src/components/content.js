import React,{Component} from 'react';
import {Dropdown,Container,Row,Col,Form,Tabs,Tab,Collapse,Button} from 'react-bootstrap';
import profile from '../profile.jpg';
import  useState  from 'react';


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

const PageContent = ()=>{
  return(
    <div className="page">
      <PageTabs/>
    </div>
  )
}




const SearchForm = ()=>{
  return(
    <Row className="search-form justify-content-md-center">
    <Row  >
         <Col md>
         <Form.Group className="mb-1" >  
         <label >From:</label>                       
             <Form.Control type="text"  />                      
           </Form.Group>                     
         </Col>
         
         
         <Col md>
         <Form.Group className="mb-1">  
         <label >To:</label>                      
           <Form.Control type="text"  />                       
         </Form.Group>
         </Col>
       </Row> 
       <Row  >
         <Col md>
         <Form.Group className="mb-3" > 
         <label>Date:</label>                        
             <Form.Control type="text"  />                      
           </Form.Group>                     
         </Col>
         
         <Col md>
         <Form.Group className="mb-3" >    
         <label className="Htext">.</label>                     
           <Form.Control  type="button" value="Search"/>                       
         </Form.Group>
         </Col>
         
       </Row>                  
     </Row>
    
  )
}

const RidesFeeds = ()=>{
return(
  <Col lg={8}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero facere minima impedit exercitationem sed veniam cupiditate. Quae, atque et. Minus, in commodi. Maxime, itaque. Nulla repellat impedit quia? Eaque illo quibusdam, nihil pariatur dolorum vel officiis magni ipsa tenetur, id amet modi impedit suscipit at est corporis temporibus! Laudantium, sed.
  </Col>
)
}

const FeedView = ()=>{
  return (
    <Col className="feedView" lg={4}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error autem placeat pariatur, labore ad at accusantium ea vel facilis aperiam laborum mollitia tempore et impedit voluptatem deserunt inventore quos optio.</Col>
  )
}
const SearchRider = ()=>{
  return(
  <Container className="page-content">
    <SearchForm />
    <Row className="search-results" >
      <RidesFeeds/>
      <FeedView />
     </Row>
   </Container>
  )
}

const SearchPassenger = ()=>{
  return (
    <p>Search for passenger</p>
  )
}

const PageTabs = ()=>{
  return(
    <Tabs
    defaultActiveKey="riders"
    transition={false}
    id="noanim-tab-example"
    className="mb-2 mt-3"
    >
      <Tab eventKey="riders" title="All Ride Offers">
        <SearchRider/>
      </Tab>
      <Tab eventKey="passengers" title="Search Passenger">
      <SearchPassenger/>
      </Tab>
    
    </Tabs>
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