
import Card from 'react-bootstrap/Card';




function CardsVideo(props) {

  
  return (
    <>
    <Card style={{ width: '18rem' }} className=' cardStyle text-center'>
      <video width="260" height="160" controls 
      poster={`${props.data.thumb}`} 
      autoplay muted preload
      >
            <source src={`${props.data.url}`} type="video/mp4" />
            Error Message
            </video>
      <Card.Body>
        <Card.Title>{`${props.data.title}`} </Card.Title>
        <Card.Text>
        {/* {`${props.description}`}  */}
        </Card.Text>
           <button className="content-btn" 
           onClick={()=>{
            props.Reset()
            props.handlebtn(props.dataAPI)
          }}
          >
           <i class="fa fa-arrow-circle-Up">  View</i>
         </button>
      </Card.Body>
    </Card>
    {

    }
    </>

  );
}

export default CardsVideo;