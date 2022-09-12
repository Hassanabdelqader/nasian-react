import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//src="holder.js/100px160"


function Cards() {
  return (
    <Card style={{ width: '18rem' }} className=' cardStyle text-center'>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
      width={285}
      height={400}
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;