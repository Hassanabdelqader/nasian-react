import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Content from './Content';


//src="holder.js/100px160"


function Cards(props) {
  
  return (
    <Card style={{ width: '18rem' }} className=' cardStyle text-center'>
      <Card.Img variant="top" src={props.dataAPI.Background}
      width={285}
      height={400}
      />
      <Card.Body>
        <Card.Title>{props.dataAPI.Title }</Card.Title>
        <Card.Text>
          {props.dataAPI.Description}
        </Card.Text>
        {/* window.scrollTo(0, 435) */}
           <button className="content-btn" onClick={()=>{props.handlebtn(props.dataAPI)}}>
           <i class="fa fa-arrow-circle-right">  Open</i>
         </button>
      </Card.Body>
    </Card>
  );
}

export default Cards;