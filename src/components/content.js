import React from 'react';
import {Dropdown,Container,Row,Col} from 'react-bootstrap';
import profile from '../profile.jpg';

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
const Content = ()=>{
     return ( 
          <div className="content">
               <Nav/>
               <PageTitle/>
               <div className="page">
                 <Container className="page-content">
                 <Row className="search-form">
                    <Col lg={12}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda ullam itaque nam labore aperiam impedit alias, architecto pariatur, modi necessitatibus delectus quisquam esse distinctio dolores temporibus qui tenetur odit non voluptatibus animi quidem veritatis? Vel optio explicabo doloribus numquam eum corporis culpa ipsam ullam ratione, debitis minus officia magnam. Libero vitae laboriosam illo aliquam eius fuga magnam tenetur, totam corrupti minus voluptatibus sint quasi ad, qui ipsum, voluptates dolor iure et reiciendis tempora corporis est modi. Autem quae doloribus dolorum ipsa at doloremque consequatur amet aut veniam officiis, quisquam vel maiores et beatae illum odio, facere, asperiores unde officia quo!</Col>
                    
                  </Row>
                  <Row className="search-results">
                    <Col lg={8}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero facere minima impedit exercitationem sed veniam cupiditate. Quae, atque et. Minus, in commodi. Maxime, itaque. Nulla repellat impedit quia? Eaque illo quibusdam, nihil pariatur dolorum vel officiis magni ipsa tenetur, id amet modi impedit suscipit at est corporis temporibus! Laudantium, sed.</Col>
                    <Col lg={4}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error autem placeat pariatur, labore ad at accusantium ea vel facilis aperiam laborum mollitia tempore et impedit voluptatem deserunt inventore quos optio.</Col>
                  </Row>
                </Container>
                 
               </div>
          </div>
     )
}

export default Content;