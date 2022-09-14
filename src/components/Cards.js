
import Card from 'react-bootstrap/Card';


//src="holder.js/100px160"


function Cards(props) {

  
  return (
    <>
    <Card style={{ width: '18rem' }} className=' cardStyle text-center'>
      <Card.Img variant="top" src={props.dataAPI.url}
      width={260}
      height={400}
      />
      <Card.Body>
        <Card.Title className='cardTitle' >{
        
        props.dataAPI.title 
        }</Card.Title>
        {/* <Card.Text>
          {props.dataAPI.description}
        </Card.Text> */}
           <button className="content-btn" 
           onClick={()=>{props.handlebtn(props.dataAPI)}}>
           <i class="fa fa-arrow-circle-Up">  View</i>
         </button>
      </Card.Body>
    </Card>
    {

    }
    </>

  );
}

export default Cards;