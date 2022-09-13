import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Cards from './Cards';
import Modals from './Content';
import Content from './Content';
{/* <h1>Show it itititi{props.data}</h1> */}

function ShowResult(props) {
    
    const [content , setContent] = useState({
        Background : "https://wallpapercave.com/wp/wp8144363.jpg",
        Title : "",
        Center : "",
        DateCreated : "",
        Description:"",
    })
    
    const [Data , setData] = useState({
        Background : "https://cdn.saffire.com/images.ashx?t=ig&rid=TheBigE&i=xfinity_arena_-_Featured_Photo.jpg",
        Title : "Sun Shines in High-EnergyHigh-EnergyHigh-EnergyHigh-EnergyHigh-EnergyHigh-Energy X-rays",
        Center : "JPL",
        DateCreated : "`2014-12-22T18:53:13Z`",
        Description:"Sun Shines in High-EnergyHigh-EnergyHigh-EnergyHigh-EnergyHigh-EnergyHigh-Energy X-rays",
        
       
    })
    
    useEffect(() => {
        if(content){
            console.log(content)
            window.scrollTo(0, 0) 
        }else{
            console.log(content)
            window.scrollTo(0, 435)
        }
    });


   const handlebtn = (e)=>{
    setContent(e)
    }

    return (
        <>
        
        {   content &&
                <Content data={content}/>

        }
        <div className='CardsContainer'>
        {
        
        [1,2,3,4,5,6,7,8,9,10].map((element,key)=>{
             return <Cards key={key} data={element} handlebtn={handlebtn}  dataAPI = {Data}/>
        })
        
        }
        </div>
        
        </>

);
}

export default ShowResult;