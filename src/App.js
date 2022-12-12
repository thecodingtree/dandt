import { useEffect, useRef, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import main_image from './assets/main_image.jpg';
import { MapPreview } from './components/MapPreview';
import { OtherListings } from './components/OtherListings';

function App() {
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('scroll', () => {
      console.log('Scrolling');
      const isAtTop = window.scrollY > navArea.current.offsetTop;

      if (isAtTop) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    });
  }, []);

  const navArea = useRef(null);

  return (
    <div className='App'>
      <Container fluid>
        <Row>
          <Col sm={12} md={4} className='offset-md-4'>
            <a name='top'></a>
            {showGoToTop && (
              <a href='#top'>
                <span className='float'>
                  <i className='fa-solid fa-arrow-up'></i>
                </span>
              </a>
            )}
            <Navbar bg='bg-white' expand='lg' ref={navArea} className=''>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='align-items-center justify-content-between flex-fill'>
                  <Nav.Link href='#when'>
                    <span className='nav-icon'>
                      <i className='fa-solid fa-calendar-days'></i>
                    </span>
                    <span className='d-md-none nav-item-text'>When</span>
                  </Nav.Link>
                  <Nav.Link href='#where'>
                    <span className='nav-icon'>
                      <i className='fa-solid fa-map-location-dot'></i>
                    </span>
                    <span className='d-md-none nav-item-text'>Where</span>
                  </Nav.Link>
                  <Nav.Link href='#lodging'>
                    <span className='nav-icon'>
                      <i className='fa-solid fa-hotel'></i>
                    </span>
                    <span className='d-md-none nav-item-text'>Lodging</span>
                  </Nav.Link>
                  <Navbar.Brand href='#home'>
                    <h1 className='text d-none d-md-block'>D & T</h1>
                  </Navbar.Brand>
                  <Nav.Link href='#flights'>
                    <span className='nav-icon'>
                      <i className='fa-solid fa-plane-departure'></i>
                    </span>
                    <span className='d-md-none nav-item-text'>Flights</span>
                  </Nav.Link>
                  <Nav.Link href='#transportation'>
                    <span className='nav-icon'>
                      <i className='fa-solid fa-van-shuttle'></i>
                    </span>
                    <span className='d-md-none nav-item-text'>
                      Transportation
                    </span>
                  </Nav.Link>
                  <Nav.Link href='#other-notes'>
                    <span className='nav-icon'>
                      <i className='fa-solid fa-asterisk'></i>
                    </span>
                    <span className='d-md-none nav-item-text'>Other Notes</span>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
        <Row>
          <img src={main_image} className='main-image' alt='logo' />
        </Row>
        <Row>
          <Col sm={12} md={8} className='content-block offset-md-2'>
            <h2 className='text'>we're getting married!</h2>
            <p>
              Welcome! We are so excited to invite you to our wedding in Puerto
              Rico this coming May 12th, 2023, as someone who is an important
              part of our lives we are hoping you can join us on this special
              day. After discovering we both have a love for exploring new
              places and being at the beach, we decided a small destination
              wedding would be an amazing way to start our marriage. We can’t
              wait to exchange vows in a beautiful place at an intimate ceremony
              with some of our dearest friends and family.{' '}
            </p>
            <p>
              We are so excited to invite you to join us in Puerto Rico to
              celebrate our marriage and to explore and enjoy all this beautiful
              location has to offer. We understand that a destination wedding
              can pose some challenges since everyone will need to travel to our
              location. We are hoping to use this website to make this process
              as simple and seamless as possible, as we would love to help host
              everyone as well as we can while learning and exploring a new
              place! We hope you find most of the answers to your questions here
              but if you have more questions please feel free to email us:
            </p>
            <p>
              <a href='mailto:dmitchek@gmail.com'>dmitchek@gmail.com</a> /
              <a href='mailto:tashmor@mail.regent.edu'>
                tashmor@mail.regent.edu
              </a>
            </p>
            <p>
              We also understand that a destination wedding may pose some
              challenges for some people and everyone may not be able to join us
              for a multitude of reasons. We are planning to host a reception in
              Kentucky and would love for you to join us there if you are not
              able to come to the wedding.
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={8} className='content-block offset-md-2'>
            {/* ONE COL LAYOUT */}
            <Col>
              <a name='when'></a>
              <span className='header-icon'>
                <i className='fa-solid fa-calendar-days'></i>
              </span>
            </Col>
            <Col>
              <h4 className='text'>when</h4>
            </Col>
            <Col className='mt-4'>
              <p>
                <i>Wednesday, May 10th, 2023 to Saturday, May 13th, 2023</i>
              </p>
              <p>
                <b>Rehearsal dinner:</b> Thursday, May 11th, 2023
              </p>
              <p>
                <b>Wedding:</b> Friday, May 12th, 2023.
              </p>
              <a href='#'>add to calendar</a>
            </Col>
          </Col>
        </Row>
        <Row>
          {/* TWO COL LAYOUT */}
          <Col sm={12} md={8} className='content-block offset-md-2'>
            <Row>
              <Col xs={12} className='mb-4'>
                <Col>
                  <a name='where'></a>
                  <span className='header-icon'>
                    <i className='fa-solid fa-map-location-dot'></i>
                  </span>
                </Col>
                <Col>
                  <h4 className='text'>where?</h4>
                </Col>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Col>
                  <p>
                    <b>Atlatic Sand Oasis</b>
                  </p>
                  <p>
                    Carr #681, Bo.Islote, Sector Jarealitos # 5 calle principal
                    Arecibo, Puerto Rico 00612
                  </p>
                  <p>
                    We will be renting the above VRBO home in Arecibo, Puerto
                    Rico from 4pm on Wednesday, May 10th to 11am on Satuday, May
                    13th, 2023. The home is 1 hour and 4 minutes from the main
                    airpot in San Juan: Luis Munoz Marin International Airport
                    (Airport code: SJU). We will be staying at the VRBO the days
                    leading up to the wedding. The happy couple will be leaving
                    Friday evening after the wedding for another location,
                    however, guests at the home will have access to the house
                    till 11am on Saturday. You are invited to join us for all or
                    part of those days. VRBO house policy allowing (still
                    working out the details on that) we are also hoping to
                    invite you for meals and to join us at the pool and beach at
                    the house the day before the wedding.
                  </p>
                </Col>
                {/* <div>
                  <img
                    src='https://picsum.photos/300/200'
                    style={{ width: '100%' }}
                  />
                </div> */}
              </Col>
              <Col sm={12} md={6}>
                <MapPreview />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={8} className='content-block offset-md-2'>
            {/* ONE COL LAYOUT */}
            <Col>
              <a name='lodging'></a>
              <span className='header-icon'>
                <i className='fa-solid fa-hotel'></i>
              </span>
            </Col>
            <Col>
              <h4 className='text'>lodging</h4>
            </Col>
            <Col className='mt-4'>
              <p>
                Here are some rental homes within walking distance of the
                Atlantic Sands Oasis. Full disclosure these were briefly
                researched and added because of their proximity to Atantic sands
                but please be sure to double check that they look like a place
                you’d want to stay(Ie ratings, hosts, etc):{' '}
              </p>
            </Col>
            <Row>
              <OtherListings />
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={8} className='content-block offset-md-2'>
            {/* ONE COL LAYOUT */}
            <Col xs={12}>
              <a name='flights'></a>
              <span className='header-icon'>
                <i className='fa-solid fa-plane-departure'></i>
              </span>
            </Col>
            <Col sm={12}>
              <h4 className='text'>flights</h4>
            </Col>
            <Col sm={12} className='mt-4'>
              <p>
                We recommend you fly into the main Puerto Rico airport in San
                Juan:
              </p>
              <p>
                <b>Luis Munoz Marin International</b>
              </p>
              <p>
                Airport Airport code: <b>SJU</b>
              </p>
              <p>
                Though we are giving you this information as soon as possible;
                we are hoping flight prices will be lower in January and
                February and recommend you look then.
              </p>
              <p>
                For those traveling from Kentucky, we will be flying on
                <b> Southwest Airlines</b> from <b>Louisville</b> to{' '}
                <b>San Juan</b> on the below flights:
              </p>
              <p>
                Departure: <b>SDF, Southwest #153 @ 6:15am</b>
              </p>
              <p>
                Arrival: <b>SJU, Southwest #1096 @ 3:45pm</b>
              </p>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={8} className='content-block offset-md-2'>
            {/* ONE COL LAYOUT */}
            <Col>
              <a name='transportation'></a>
              <span className='header-icon'>
                <i className='fa-solid fa-van-shuttle'></i>
              </span>
            </Col>
            <Col>
              <h4 className='text'>transportation</h4>
            </Col>
            <Col className='mt-4'>
              <p>
                Our location in Arecibo is about 1 hour from the airport in San
                Juan. We understand that guests may come to Puerto Rico for
                varying lenghs of time. Our hope is that for those of you who do
                not want to rent a car for personal use during your time that we
                will be able to provide transportation (most likely a few rental
                vans) to transport us from San Juan to Arecibo and back. If you
                are interested in group transportation we are hoping to
                coordinate flight times. Please let us know when you are
                planning to fly in and we will do our best to coordinate.{' '}
              </p>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={8} className='content-block offset-md-2'>
            {/* ONE COL LAYOUT */}
            <Col>
              <a name='other-notes'></a>
              <span className='header-icon'>
                <i className='fa-solid fa-asterisk'></i>
              </span>
            </Col>
            <Col>
              <h4 className='text'>other notes</h4>
            </Col>
            <Col className='mt-4'>
              <p>
                We are so looking forward to enjoying the beauty of Puerto Rico
                with you all and to get the opportunity to celebrate together!
                We wanted you to have all this information ahead of time to make
                arrangements as you likes Here are some notes to keep in mind as
                you prepare for your trip! Feel free to reach out with any
                questions, and if we can provide more information, we hope to
                make the process as smooth as possible.
              </p>
            </Col>
            <Col>
              <ul className='text-start'>
                <li>
                  We wanted you to have all this information ahead of time to
                  make arrangements as you like, however, we will be sending out
                  a formal invitation in the spring so you have time to decide
                  if joining us is something that you are able to do and can
                  RSVP then!
                </li>
                <li>
                  Apparently sand fleas/ mosquitos can be an issue near this
                  property so we will do our best to deal with that but bringing
                  bug repellent options is a great idea.
                </li>
                <li>
                  People refer to the house as a “Big Blue House” so if you have
                  any issues tracking it on google, look for the big blue house!
                  Lol
                </li>
                <li>
                  The area is more of a local scene and isn’t super touristy,
                  but has some restaurants and grocery stores within walking
                  distance and is noted to be very safe by all the information
                  we’ve seen.
                </li>
                <li>
                  Also, your presence is all we want, so no gift required!
                </li>
              </ul>
            </Col>
          </Col>
        </Row>
        {/* <Row>
          <Col sm={12} className='content-block'>
            <Col>
              <span className='header-icon'>
                <i className='fa-solid fa-reply'></i>
              </span>
            </Col>
            <Col>
              <h4 className='text'>RSVP</h4>
            </Col>

            <p>tell us you're coming!</p>
            <a href='#'>relevant link</a>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default App;
