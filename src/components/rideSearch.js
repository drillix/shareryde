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
//import driverPic from '../driver.png';

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
                Bus stops
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

const Ride = () =>{

let Rides = [
  {
    img: "driverPic",
    name: "Foster Asafo",
    location: {
      from: "Kumasi",
      to: "Tamale",
    },
    duration: {
      departure: "16:00am",
      arrival: "3:00pm",
    },
    details: {
      price: 120,
      seatsAvailable: 5,
    },
    addons: ['wifi','horizontal_distribute','luggage'],
  },
  {
    img: "driverPic",
    name: "Kojo Oppong",
    location: {
      from: "Accra",
      to: "Takoradi",
    },
    duration: {
      departure: "6:00am",
      arrival: "12:00pm",
    },
    details: {
      price: 80,
      seatsAvailable: 12,
    },
    addons: ['luggage','smoke_free','luggage','horizontal_distributed'],
  },
  {
    img: "driverPic",
    name: "Jeff Bezoz",
    location: {
      from: "Koforidua",
      to: "Accra",
    },
    duration: {
      departure: "3:00pm",
      arrival: "7:00pm",
    },
    details: {
      price: 25,
      seatsAvailable: 10,
    },
    addons: ['pets','smoke_free','ac_unit'],
  },
  {
    img: "driverPic",
    name: "Brefo Gyamera",
    location: {
      from: "Nsawam",
      to: "Accra",
    },
    duration: {
      departure: "11:00am",
      arrival: "2:00pm",
    },
    details: {
      price: 10,
      seatsAvailable: 15,
    },
    addons: ['stop_circle','usb','female','smoke_free'],
  },
];

  return(
    <>
   {Rides.map(ride=>(
    <div className="rideItem">
      <img src={ride.img} alt="img" />
      <div className="details">
    
        <p className="Dname">{ride.name}</p>
        <p className="Tlocation">{ride.location?.from} - {ride.location?.to} </p>
        <p className="Tduration">{ride.duration?.departure} - {ride.duration?.arrival}</p>
  
      </div>
      <div className="details2">
      <div className="price">{ride.details?.price}<sup className="sup">GHS</sup></div>
      <div className="seat">{ride.details?.seatsAvailable} Seats</div>
      </div>
     
      <div className="specs">
        <span>{ride.addons.map(addon=>(<i className="material-icons-outlined">{addon}</i>))}</span>
      </div> 
    </div>
   ))}
      
    </>
   
  )
}
const RidesFeeds = () => {
  return (
    <Col lg={7} >
    <div className="rideHeaders">
     <div className="date"><i className="material-icons-outlined">calendar_today</i>  Tuesday, 14 December 2021. </div>
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
