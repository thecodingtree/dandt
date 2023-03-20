import { useEffect, useRef, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { motion, useScroll } from 'framer-motion';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import main_image from './assets/main_image.jpg';
import { MapPreview } from './components/MapPreview';
import { RentalListings } from './components/RentalListings';
import { UsGallery } from './components/UsGallery';

function App() {
  const { scrollYProgress } = useScroll();
  const [showGoToTop, setShowGoToTop] = useState(false);

  const [mainImgHeight, setMainImgHeight] = useState(60);
  const [mainImgOpacity, setMainImgOpacity] = useState(1);

  useEffect(() => {
    //console.log('useEffect');
    window.addEventListener('scroll', () => {
      //console.log('Scrolling: ', window.scrollY);
      const isAtTop = window.scrollY > navArea.current.offsetTop;

      if (isAtTop) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    });
  }, []);

  const navArea = useRef(null);

  const daysTillWedding = Math.ceil(
    (new Date('2023-05-12') - new Date()) / (1000 * 60 * 60 * 24)
  );

  let daysTillWeddingLabel = '';
  if (daysTillWedding === 0) {
    daysTillWeddingLabel = "we're getting married today!";
  } else if (daysTillWedding === 1) {
    daysTillWeddingLabel = "we're getting married tomorrow!";
  } else if (daysTillWedding < 0) {
    daysTillWeddingLabel = 'we got married!';
  } else {
    daysTillWeddingLabel = `we're getting married in ${daysTillWedding} days!`;
  }

  return (
    <div className='App mb-5'>
      <Container fluid>
        <Row>
          <Col sm={12} md={4} className='offset-md-4'>
            <a name='top'></a>
            {showGoToTop && (
              <a href='#top' className='d-none d-md-block'>
                <span className='float'>
                  <i className='fa-solid fa-arrow-up'></i>
                </span>
              </a>
            )}
            <Navbar bg='bg-white' expand='lg' ref={navArea} className=''>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='align-items-md-center justify-content-between flex-fill'>
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
                  <Nav.Link href='#flights'>
                    <span className='nav-icon'>
                      <i className='fa-solid fa-plane-departure'></i>
                    </span>
                    <span className='d-md-none nav-item-text'>Flights</span>
                  </Nav.Link>
                  <Navbar.Brand href='#home'>
                    <h1 className='text d-none d-md-block'>D & T</h1>
                  </Navbar.Brand>
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
                  <Nav.Link href='#rsvp'>
                    <span className='nav-icon'>
                      <i className='fa-solid fa-reply'></i>
                    </span>
                    <span className='d-md-none nav-item-text'>RSVP</span>
                  </Nav.Link>
                  <Nav.Link href='#registry'>
                    <span className='nav-icon'>
                      <i className='fa-solid fa-gift'></i>
                    </span>
                    <span className='d-md-none nav-item-text'>Registry</span>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <img
              src={main_image}
              className='main-image d-none d-md-block'
              alt='logo'
            /> */}
            <UsGallery />
            <h1 className='text d-block d-md-none'>D & T</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={8} className='content-block offset-md-2'>
            <h2 className='text'>{daysTillWeddingLabel}</h2>
            <p>
              Welcome! We are so excited to share with you about our plans for
              our wedding in Puerto Rico this coming May 12th, 2023. After
              discovering we both have a love for exploring new places and being
              at the beach, we decided a small destination wedding would be an
              amazing way to start our marriage. We can’t wait to exchange vows
              in a beautiful place at an intimate ceremony with some of our
              dearest friends and family.
            </p>
            <p>
              Unfortunately having a destination wedding does limit our guest
              list. Because of this, we are planning to host at least one if not
              several receptions next summer and are excited to have the
              opportunity to celebrate with everyone.
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
              <a
                target='_blank'
                href='https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=XzY0cjNlYzlrNnNvMzhjcGg2b3FqZWI5ajZncmo4ZTIwZDVobTJyMWVkbGduNHRiNGR0cTJzb3JmZGsgZG1pdGNoZWtAbQ&amp;tmsrc=dmitchek%40gmail.com'
              >
                add to calendar
              </a>
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
                  <h4 className='text'>where</h4>
                </Col>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Col>
                  <p>
                    <b>Atlantic Sands Oasis</b>
                  </p>
                  <p>
                    Carr #681, Bo.Islote, Sector Jarealitos # 5 calle principal
                    Arecibo, Puerto Rico 00612
                  </p>
                  <p>
                    We will be renting the above VRBO home in Arecibo, Puerto
                    Rico from 4pm on Wednesday, May 10th to 11am on Satuday, May
                    13th, 2023. The home is 1 hour and 4 minutes from the main
                    airport in San Juan. We will be staying at the VRBO the days
                    leading up to the wedding. The happy couple will be leaving
                    Friday evening after the wedding for another location,
                    however, guests at the home will have access to the house
                    till 11am on Saturday. VRBO house policy allowing (still
                    working out the details on that) we are also hoping to
                    invite our guests for meals and to join us at the pool and
                    beach at the house the day before the wedding.
                  </p>
                </Col>
                <Col>
                  <p>
                    Check out the house on VRBO{' '}
                    <a
                      href='https://www.vrbo.com/330575ha?adultsCount=15&noDates=true&unitId=3092742'
                      target='_blank'
                    >
                      Atlantic Sands Oasis
                    </a>{' '}
                    or jump directly to a video preview on{' '}
                    <a
                      href='https://www.youtube.com/watch?v=ScbZ5rEJD6o&t=28s'
                      target='_blank'
                    >
                      YouTube
                    </a>
                    {'.'}
                  </p>
                </Col>
                <Col></Col>
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
                but we recommend guests review the details of the rental before
                booking.
              </p>
            </Col>
            <Row>
              <RentalListings />
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
                We recommend guests fly into the main Puerto Rico airport in San
                Juan:
              </p>
              <p>
                <b>Luis Munoz Marin International</b>
              </p>
              <p>
                Airport Airport code: <b>SJU</b>
              </p>
              <p>
                Though we are getting information out as soon as possible; we
                are hoping flight prices will be lower in January and February
                and recommend guests look then.
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
                varying lengths of time. Our hope is that for those guests who
                do not want to rent a car for personal use during their time
                that we will be able to provide transportation (most likely a
                few rental vans) to transport our party from San Juan to Arecibo
                and back. If guests are interested in group transportation we
                are hoping to coordinate flight times. Any guests interested can
                let us know when they are planning to fly in and we will do our
                best to coordinate.
              </p>
              <p>
                Uber is another option that is available, for around $100 one
                way (up to six people).
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
                and to get the opportunity to celebrate! We wanted the
                information sent out ahead of time so that guests can make
                arrangements as they would like.
              </p>
              <p>
                Here are some notes for guests to keep in mind as they prepare
                for the trip! They can feel free to reach out with any
                questions, or if they would like more information. We hope to
                make the process as smooth as possible.
              </p>
            </Col>
            <Col>
              <ul className='text-start'>
                {/* <li>
                  <b>Invitation:</b> We will be sending out a formal invitation
                  in the spring so our guests can have time to decide if joining
                  us is something that they are able to do and will be able to
                  RSVP then!
                </li> */}
                <li>
                  <b>Puerto Rico:</b> Some fast facts about the island of Puerto
                  Rico. It is a US territory so you will not need a passport to
                  visit if you are a US citizen. Also important to note that the
                  first language is Spanish, though most people speak some
                  English, be aware not everyone will be fluent. The island uses
                  US currency. The tap water should be drinkable due to being
                  treated similar to that on the US mainland. It also sounds
                  like most cell phones should work without any need for
                  international phone plans. In May, Puerto Rico will be on the
                  same time as Eastern Standard time though they usually are one
                  hour ahead of us, and should be a balmy 70-80 degrees
                  fahrenheit. From all accounts the island is really safe and
                  should be a great place to visit. You can find more info on
                  the island here: https://www.discoverpuertorico.com/island
                </li>
                <li>
                  <b>Arecibo, PR:</b> From reading many of the house reviews and
                  reading up on Arecibo, it sounds like it is more local and
                  less touristy, ie less tourists, and tourist activities, more
                  spanish speaking, and a little more run down looking than San
                  Juan, however, from all accounts the natural beauty and
                  beaches cannot be beat and are less busy than some of the more
                  touristy areas. There also should be some restaurants and
                  grocery stores within walking distance of the VRBO house area.
                </li>
                <li>
                  <b>Atlantic Sands Oasis VRBO:</b> Apparently sand fleas/
                  mosquitos can be an issue near this property so bringing bug
                  repellent options is a great idea. It sounds like the house
                  can sometimes be difficult to find via google so it is good to
                  note that it is referred to as the “Big Blue House”, so if you
                  can’t find its exact local look for a big blue two story
                  house!
                </li>
                <li>
                  <b>Registry:</b> We understand weddings are an event people
                  like to celebrate with gifts, so we are adding a registry,
                  however, the presence of our guests is our priority and we are
                  not expecting gifts!
                </li>
              </ul>
            </Col>
          </Col>
        </Row>
        <Row>
          <a name='rsvp'></a>
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
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSczAStyUwVcOA_cU_zuH2DwK-JVgIaoh6Yww2ze78-_hPtVww/viewform?usp=sharing'
              target='_blank'
            >
              click here to RSVP
            </a>
          </Col>
        </Row>
        <Row>
          <a name='registry'></a>
          <Col sm={12} className='content-block'>
            <Col>
              <span className='header-icon'>
                <i className='fa-solid fa-gift'></i>
              </span>
            </Col>
            <Col>
              <h4 className='text'>Registry</h4>
            </Col>
            <a
              href='https://www.myregistry.com/wedding-registry/tasha-mortimer-and-david-mitchell-lexington-ky/3609521'
              target='_blank'
            >
              click here for our registry
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
