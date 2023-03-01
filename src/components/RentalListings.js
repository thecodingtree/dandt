import React from 'react';
import { Row } from 'react-bootstrap';

import { HouseListing } from './HouseListing';

// Airbnb
import ocean_dreams from '../assets/houseImages/ocean_dreams.jpg';
import cielito_del from '../assets/houseImages/cielito_del.jpg';
import islote_beach from '../assets/houseImages/islote_beach.jpg';
import vok_beach from '../assets/houseImages/vok_beach.jpg';
import ocean_front from '../assets/houseImages/ocean_front.jpg';
import blue_nest from '../assets/houseImages/blue_nest.jpg';

// VRBO
import rose_nest from '../assets/houseImages/rose_nest.webp';
import playa_islote from '../assets/houseImages/playa_isolete.webp';
import canary_castle from '../assets/houseImages/canary_castle.webp';

export const RentalListings = () => {
  return (
    <Row>
      <HouseListing
        link='https://www.airbnb.com/rooms/49495823?adults=2&check_in=2023-05-10&check_out=2023-05-13&source_impression_id=p3_1670799974_GrlPngQ%2BiXdrAr16'
        title='Ocean Dreams House'
        price={492}
        img={ocean_dreams}
        source='Airbnb'
        sleeps={10}
      />
      <HouseListing
        link='https://www.airbnb.com/rooms/35007783?adults=2&check_in=2023-05-10&check_out=2023-05-13&source_impression_id=p3_1670800052_o%2B4W%2BvSjU1HETmbP'
        title='Cielito Del Mar'
        price={250}
        img={cielito_del}
        source='Airbnb'
        sleeps={6}
        unavailable={true}
      />
      <HouseListing
        link='https://www.airbnb.com/rooms/38125775?adults=2&check_in=2023-05-10&check_out=2023-05-13&source_impression_id=p3_1670800141_rPZPEUV6mjqmc5N5'
        title='Islote Beach Condo'
        price={208}
        img={islote_beach}
        source='Airbnb'
        sleeps={6}
      />
      <HouseListing
        link='https://www.vrbo.com/1833880?adultsCount=2&arrival=2023-05-10&departure=2023-05-13&unitId=2395390'
        title='Rose Nest'
        price={500}
        img={rose_nest}
        source='VRBO'
        sleeps={10}
        unavailable={true}
      />
      <HouseListing
        link='https://www.airbnb.com/rooms/39901102?adults=2&location=Map%20areaIslote%20road%20681%20Arecibo%2C%20Puerto%20Rico&check_in=2023-05-10&check_out=2023-05-13&federated_search_id=5551295d-d72c-45e4-869b-4fdf37418467&source_impression_id=p3_1670800512_7FvY0GR%2BnW5Nqggf'
        title='Vokadillo Beach House'
        price={155}
        img={vok_beach}
        source='Airbnb'
        sleeps={8}
      />
      <HouseListing
        link='https://www.airbnb.com/rooms/29987687?adults=2&location=Map%20areaIslote%20road%20681%20Arecibo%2C%20Puerto%20Rico&check_in=2023-05-10&check_out=2023-05-13&federated_search_id=318b0c1f-cba4-4595-8203-5710965ebc35&source_impression_id=p3_1670800661_B85KC7%2FqE4Z02fin'
        title='Ocean Front Suites'
        price={241}
        img={ocean_front}
        source='Airbnb'
        sleeps={7}
        unavailable={true}
      />
      <HouseListing
        link='https://www.airbnb.com/rooms/23285857?check_in=2023-05-10&check_out=2023-05-13&guests=1&adults=1&s=67&unique_share_id=5b014fb7-82ca-4d0e-96bb-706c9c5607c1&source_impression_id=p3_1670807086_m%2F5HhxE%2BpSlCtZUT'
        title='Blue Nest at the Beach'
        price={500}
        img={blue_nest}
        source='Airbnb'
        sleeps={10}
      />
      <HouseListing
        link='https://www.vrbo.com/1729893?adultsCount=2&arrival=2023-05-10&departure=2023-05-13&unitId=2291379'
        title='Playa Islote'
        price={208}
        img={playa_islote}
        source='VRBO'
        sleeps={6}
      />
      <HouseListing
        link='https://www.vrbo.com/4150924ha?adultsCount=2&arrival=2023-05-10&departure=2023-05-13&unitId=4552058'
        title='Canary Castle'
        price={325}
        img={canary_castle}
        source='VRBO'
        sleeps={8}
      />
    </Row>
  );
};
