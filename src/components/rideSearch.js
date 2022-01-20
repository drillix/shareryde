import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Tabs,
  Tab,
  Button,
  Collapse,
} from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import Rides from "../API/ryde-api"

const PageContent = () => {
  return (
    <div className="page">
      <PageTabs />
    </div>
  );
};

function FilterSearch() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(7);
  const [ finalValue, setFinalValue ] = useState(null);

  return (
    
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="filterbtn"
      >
        <i className="material-icons-outlined">candlestick_chart</i> Add Filter
      </Button>
      <Collapse in={open}>
        <Row id="example-collapse-text" className="filterForm">
          <Col lg={4}>
            <Form.Group as={Row}>
              <Col xs="4">
                <Form.Label>
                  Price Range
                </Form.Label>
              </Col>
              <Col xs="8">
                <RangeSlider
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  tooltipLabel={currentValue => `GHS ${currentValue}`}
                  size="sm"
                  variant='warning'
                  min={0}
                  step = {7}
                  max={252}
                  tooltipPlacement='top'
                  onAfterChange={e => setFinalValue(e.target.value)}
                  
                />
                <p className="priceRange">Selected price limit per head: <span>GHS {finalValue}</span></p>
              </Col>
              
            </Form.Group>
            
          </Col>

          <Col lg={8} className="px-lg-5" >
            <Row>
            <Col lg={6} >
            <Form.Group>
              <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="highway"
              />
              <label className="form-check-label" htmlFor="highway">
                Use Highway
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="commercial"
              />
              <label className="form-check-label" htmlFor="commercial">
                Commercial{" "}
              </label>
            </div>
            
              </Form.Group>
            </Col>
            <Col lg={6} >
            <Form.Group>
              
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="pets" />
              <label className="form-check-label" htmlFor="pets">
                Pets Allowed
              </label>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="women" />
              <label className="form-check-label" htmlFor="women">
                Bus Stops
              </label>
            </div>
              </Form.Group>
            </Col>
              
            </Row>
          </Col>
        </Row>
      </Collapse>
    </>
  );
}

const SearchForm = () => {
  return (
    <Row className="search-form justify-content-center">
      <Row>
        <Col md>
          <Form.Group className="mb-1">
            <label>From:</label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>

        <Col md>
          <Form.Group className="mb-1">
            <label>To:</label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md>
          <Form.Group className="mb-3">
            <label>Date:</label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>

        <Col md>
          <Form.Group className="mb-3">
            <label className="Htext">.</label>
            <Form.Control type="button" value="🔍 Search" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <FilterSearch />
      </Row>
    </Row>
  );
};



const RideItem =(props)=>{
  
   
 
  
  return(
    <div className="rideItem" id = {props.id} onClick={
      (e) => {
        e.preventDefault();

        alert('clicked ride '+props.id);
    }}>
      <img src={props.img} alt="img" />

      <div className="details">
        <p className="Dname">{props.name}</p>
        <p className="Tlocation">{props.location?.from} - {props.location?.to} </p>
        <p className="Tduration">{props.duration?.departure} - {props.duration?.arrival}</p>
      </div>

      <div className="secondDetails">
      <div className="price">{props.details?.price}<sup className="sup">GHS</sup></div>
      <div className="seat">{props.details?.seatsAvailable} Seats</div>
      </div>
     
      <div className="specs">
        <span>{props.addons.map(addon=>(<i className="material-icons-outlined" title={addon}>{addon}</i>))}</span>
      </div> 

    </div>
  )

}

const Ride = () =>{

 

  return(
    <>
   {Rides.map(ride=>(

    <RideItem 
    id ={ride.id} 
    img={ride.img} 
    name={ride.name} 
    location={ride.location} 
    duration={ride.duration}
    details={ride.details}
    addons={ride.addons} 
   
     /> 

   ))}
      
    </>
   
  )
}

const RidesFeeds = () => {
  return (
    <Col lg={7} >
    <div className="rideHeaders">
     <div className="date"><i className="material-icons-outlined">calendar_today</i>  Friday, 14 January 2022. </div>
     <div className="location">Top Locations</div>
    </div>

    <div className="rideContainer">
      <Ride/>
    </div>
      
    </Col>
  );
};

const FeedView = () => {


  return (
    <Col className="feedView" lg={5}>
   


    </Col>
  );
};




const SearchRider = () => {
  return (
    <Container className="page-content">
      <SearchForm />
      <Row className="search-results">
        <RidesFeeds />
        <FeedView />
      </Row>
    </Container>
  );
};

const SearchPassenger = () => {
  return <p>Search for passenger</p>;
};

const PageTabs = () => {
  return (
    <Tabs
      defaultActiveKey="riders"
      transition={false}
      id="noanim-tab-example"
      className="mb-2 "
    >
      <Tab eventKey="riders" title="Drivers">
        <SearchRider />
      </Tab>
      <Tab eventKey="passengers" title="Passengers">
        <SearchPassenger />
      </Tab>
    </Tabs>
  );
};

export default PageContent;
