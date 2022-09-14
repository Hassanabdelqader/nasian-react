import { useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
  import "./innerStyle/content.css";


  function ContentVideo(props){
    const videoRef = useRef();
    
    useEffect(() => {    
      videoRef.current?.load();
    }, [props.data.thumb]);

  
 
    return (
   <div className='body' >

      <div className='videoDiv' >
    <video 
    id = "video"
    ref={videoRef}
    className='videoit' controls 
      poster={props.data.thumb}
       muted >
       <source src={props.data.url} type="video/mp4" />
            Error Message
      </video>

      <div className="overlayTitle">
        <p id="topText">{props.data.title} </p>
    </div>
   <Row className="content-box-contentvideo">
        <Col className="content-info">
          <div className='containerh1vid'>
         <h>{props.data.title} </h>
          </div>

      {

        true &&  
        <div className="content-parentvid">

          <span className="content-item">&copy; NASA </span>
          <span className="content-item">
            <i className="content-item-edad">{`Location : ${props.data.center}`}</i>
          </span>
          <br/>
          <span className="content-item">{`Date-Created : ${props.data.date_created}`}</span>

          { <div className="content-divds" dangerouslySetInnerHTML={{__html: props.data.description}}>
          
            

            </div> }
          
        </div>
      }



        </Col>
      </Row>
      </div>
    
   </div>
    );
  }
  
  export default ContentVideo ;