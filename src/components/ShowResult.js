import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Cards from './Cards';
{/* <h1>Show it itititi{props.data}</h1> */}

function ShowResult(props) {
    return (
        <div className='CardsContainer'>
        {
        
        [1,2,3,4,5,6,7,8,9,10].map(element=>{
             return <Cards />
        })
        
        }
        </div>
    );
}

export default ShowResult;