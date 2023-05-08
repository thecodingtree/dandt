import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const InfoCard = ({ title, image, children }) => {
  return (
    <Card className='w-100 h-100'>
      <Card.Img variant='top' src={image} style={{ height: '20em' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{children}</Card.Text>
      </Card.Body>
    </Card>
  );
};
