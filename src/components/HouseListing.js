import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export const HouseListing = ({ link, title, img, price, source, sleeps }) => {
  return (
    <Col sm={12} md={6} lg={4} className='mb-4'>
      <Card className='text-start w-100 h-100'>
        <a href={link} target='_blank' rel='noreferrer'>
          <Card.Img variant='top' src={img} />
          <Card.Body className='text-sm'>
            <p>{title}</p>
            <div className='d-flex justify-content-between mb-2'>
              <div>
                <b>{`$${price}`}</b>
                {'/night '}
              </div>
              <div>
                sleeps: <b>{sleeps}</b>
              </div>
            </div>
          </Card.Body>
          <Card.Footer className='bg-white text-start'>
            View on {source}
          </Card.Footer>
        </a>
      </Card>
    </Col>
  );
};
