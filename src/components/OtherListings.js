import React from 'react';
import { Col } from 'react-bootstrap';

import { AirbnbListing } from './AirbnbListing';
import { VrboListing } from './VrboListing';

export const OtherListings = () => {
  return (
    <>
      <Col md={6}>
        <AirbnbListing id='49495823' title='Ocean Dreams House PR' />
      </Col>
      <Col md={6}>
        <AirbnbListing
          id='35007783'
          title='Cielito Del Mar 3 bd/2ba Penthouse'
        />
      </Col>
      <Col md={6}>
        <AirbnbListing id='38125775' title='A bit of Paradise, Islote Beach' />
      </Col>
      <Col md={6}>
        <AirbnbListing id='39901102' title='Vokadillo Beach House' />
      </Col>
      <Col md={6}>
        <AirbnbListing
          id='29987687'
          title='OFS b202 Ocean Front Suites 2nd Floor'
        />
      </Col>
      <Col md={6}>
        <AirbnbListing id='23285857' title='Blue Nest at the Beach' />
      </Col>
      <Col xs={12}>
        <p>
          <b>VRBO</b>
        </p>
        <p>
          <VrboListing
            link='https://www.vrbo.com/1833880?adultsCount=2&arrival=2023-05-10&departure=2023-05-13&unitId=2395390'
            title='Rose Nest Puerto Rico'
          />
        </p>
        <p>
          <VrboListing
            link='https://www.vrbo.com/1729893?adultsCount=2&arrival=2023-05-10&departure=2023-05-13&unitId=2291379'
            title='Arecibo, Puerto Rico (Playa Islote)'
          />
        </p>
        <p>
          <VrboListing
            link='https://www.vrbo.com/4150924ha?adultsCount=2&arrival=2023-05-10&departure=2023-05-13&unitId=4552058'
            title='Canary Castle, Your Seaside Retreat!'
          />
        </p>
      </Col>
    </>
  );
};
