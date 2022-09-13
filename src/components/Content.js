import { useLayoutEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
  import "./innerStyle/content.css";


  function Content(props){
  
 
    return (
   <div className='body' style={{ 
    backgroundImage: `url(${props.data.Background})` 
   }} >
   <Row className="content-box-content">
        <Col className="content-info">
          <div className='containerh1'>
            <h1 className="content-banner-movie">
              {props.data.Title}
              </h1> 
          </div>

      {

        props.data.Center &&  
        <div className="content-parent">

          <span className="content-item">&copy; NASA </span>
          <span className="content-item">
            <i className="content-item-edad">{`Location : ${props.data.Center}`}</i>
          </span>
          <br/>
          <span className="content-item">{`Date-Created : ${props.data.DateCreated}`}</span>

          <div className="content-div">
            {props.data.Description}
            </div>
        </div>
      }



        </Col>
      </Row>
   </div>
    );
  }
  
  export default Content ;