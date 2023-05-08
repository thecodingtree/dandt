import { useEffect, useRef, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './App.css';

import map_preview from './assets/map_preview.png';
import program_preview from './assets/program_preview.png';
import schedule_preview from './assets/schedule_preview.png';
import photo_preview from './assets/photo_preview.png';

// import { MapPreview } from './components/MapPreview';
import { UsGallery } from './components/UsGallery';
import { InfoCard } from './components/InfoCard';

function App() {
  const [showGoToTop, setShowGoToTop] = useState(false);

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

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navArea = useRef(null);

  const getDaysUntilWedding = () => {
    const now = new Date();
    const weddingDate = new Date('2023-05-12');
    const timezoneOffset = now.getTimezoneOffset() * 60 * 1000; // convert minutes to milliseconds
    return Math.ceil(
      (weddingDate - now + timezoneOffset) / (1000 * 60 * 60 * 24)
    );
  };

  let daysTillWedding = getDaysUntilWedding();
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
            <h1 className='text'>D & T</h1>
          </Col>
        </Row>
        <Row>
          <Col className='d-none d-md-block'>
            <UsGallery />
          </Col>
        </Row>
        <Row>
          <Col className='col-10 m-auto'>
            <Row>
              <Col sm={12} className='content-block'>
                <h2 className='text'>{daysTillWeddingLabel}</h2>
                <p>
                  We are so excited that you are joining us for our wedding day
                  in beautiful Arecibo, PR!
                </p>
                <p>
                  ALL GUESTS are invited to join us at Atlantic Sands Oasis for
                  the duration of our stay. We are going to be providing
                  breakfast, lunch and dinner to all of our guests both Thursday
                  and Friday. We will have full access to the pool, hot tub,
                  beach and other amenities of Atlantic Sands Oasis. Below we
                  have attached the week schedule, and wedding program.
                </p>
                <p>
                  As you may know, we have never been to Puerto Rico before so
                  there will undoubtedly be some learning curves. We appreciate
                  your patience as we embrace island life, slow down, and go
                  with the flow. We are so aware of the cost both financially
                  and in time and energy to come be with us on our special day
                  and we want to thank you again for being here with us, we hope
                  you have a wonderful time.
                </p>
              </Col>
            </Row>
            <Row>
              {/* WHERE */}
              <Col sm={12} lg={4} className='content-block'>
                <InfoCard image={map_preview}>
                  <p>
                    <b>Atlantic Sands Oasis</b>
                  </p>
                  <p>
                    Carr #681, Bo.Islote, Sector Jarealitos # 5 calle principal
                  </p>
                  <p>Arecibo, Puerto Rico 00612</p>
                </InfoCard>
              </Col>
              {/* SCHEDULE */}
              <Col sm={12} lg={4} className='content-block'>
                <InfoCard image={schedule_preview}>
                  <a
                    className='w-100 btn btn-primary'
                    href='https://docs.google.com/spreadsheets/d/1oml3opHKmW8hmgmC9bKUQGp3EV_HWsX9huX5Ez2QtuI/edit?usp=share_link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    view schedule
                  </a>
                </InfoCard>
              </Col>
              {/* PROGRAM */}
              <Col sm={12} lg={4} className='content-block'>
                <InfoCard image={program_preview}>
                  <a
                    className='w-100 btn btn-primary'
                    href='https://drive.google.com/file/d/1iHQauxvWbSamB0ysvX_EuPs03A0dSWC8/view?usp=share_link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    view program
                  </a>
                </InfoCard>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={4} className='content-block mx-auto'>
                {/* ONE COL LAYOUT */}
                <InfoCard image={photo_preview}>
                  <a
                    className='w-100 btn btn-primary'
                    href='https://weduploader.com/upload/SqJusmnWKcBgPcVr'
                    target='_blank'
                    rel='noreferrer'
                  >
                    share your photos with us!
                  </a>
                </InfoCard>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
