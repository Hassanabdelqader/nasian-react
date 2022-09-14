import React, { useState } from 'react';
import CardsVideo from './CardsVideo';
import ContentVideo from './ContentVideo';

function ShowResultVideo(props) {
    // 
    const [content , setContent] = useState()
   
    const handlebtn = (e)=>{
        console.log(e)
        setContent(e)
        window.scrollTo(0, 400)
         props.setflag()
        }

    

    return (
       
        <>

            {
                content &&
                <ContentVideo data={content}/>
            }

                <div className='CardsContainer'>
                { props.data &&
                        props.data.map((element,key)=>{
                            return <CardsVideo key={key} data={element} Reset={setContent} handlebtn={handlebtn}  dataAPI = {element}/>
                })
                
                }
        </div>
        
        </>

);
}

export default ShowResultVideo;