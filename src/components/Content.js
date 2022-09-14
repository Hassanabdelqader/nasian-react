import { Col, Row } from 'react-bootstrap';
  import "./innerStyle/content.css";


  function Content(props){
  
 
    return (
   <div className='body' style={{ 
    backgroundImage: `url(${props.data.url})` 
   }} >
   <Row className="content-box-content">
        <Col className="content-info">
          <div className='containerh1'>
            <h1 className="content-banner-movie">
              {props.data.title}
              </h1> 
          </div>

      {

        props.data.center &&  
        <div className="content-parent">

          <span className="content-item">&copy; NASA </span>
          <span className="content-item">
            <i className="content-item-edad">{`Location : ${props.data.center}`}</i>
          </span>
          <br/>
          <span className="content-item">{`Date-Created : ${props.data.date_created}`}</span>

          <div className="content-divds" dangerouslySetInnerHTML={{__html: props.data.description}}>
            {/* {} */}
            

            </div>
          
        </div>
      }



        </Col>
      </Row>
    
   </div>
    );
  }
  
  export default Content ;