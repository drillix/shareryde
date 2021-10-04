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
    /*
      TODO
      FILTER PARAMS
      Time - timepicker
      highway - switch
      women - switch
      pets - switch
      commercial - switch
      fee range - ranger slider
    */
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
          <Col lg={6}>
            <Form.Group as={Row}>
              <Col xs="4">
                <Form.Label>
                  Price Range
                </Form.Label>
              </Col>
              <Col xs="7">
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

          <Col lg={6} className="px-lg-5">
            <Row>
              <Form.Group>
              <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="highway"
              />
              <label className="form-check-label" for="highway">
                Use Highway
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="commercial"
              />
              <label className="form-check-label" for="commercial">
                Commercial{" "}
              </label>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="pets" />
              <label className="form-check-label" for="pets">
                Pets Allowed
              </label>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="women" />
              <label className="form-check-label" for="women">
                Women Only
              </label>
            </div>
              </Form.Group>
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

const RidesFeeds = () => {
  return (
    <Col lg={7}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero facere
      minima impedit exercitationem sed veniam cupiditate. Quae, atque et.
      Minus, in commodi. Maxime, itaque. Nulla repellat impedit quia? Eaque illo
      quibusdam, nihil pariatur dolorum vel officiis magni ipsa tenetur, id amet
      modi impedit suscipit at est corporis temporibus! Laudantium, sed.
    </Col>
  );
};

const FeedView = () => {
  return (
    <Col className="feedView" lg={5}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error autem
      placeat pariatur, labore ad at accusantium ea vel facilis aperiam laborum
      mollitia tempore et impedit voluptatem deserunt inventore quos optio.
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
