import React, {  useState } from 'react';
import Cards from './Cards';
import Content from './Content';

function ShowResult(props) {
    // 
    const [content , setContent] = useState({
        url : "https://wallpapercave.com/wp/wp8144363.jpg",
        title : "Disclaimer: We would like to disclaim all responsibility, as all this data was brought from the NASA website and it belongs to the NASA website, and this project has been used for non-commercial purposes",
        center : "",
        date_created : "",
        description:"",
    })
   
    const handlebtn = (e)=>{
        setContent(e)
        window.scrollTo(0, 435)

    }

    return (
        <>
        
        {   content &&
                <Content data={content}/>

        }
        <div className='CardsContainer'>
        {
        props.fetchedData &&
        props.fetchedData.map((element,key)=>{
             return <Cards key={key} data={element} handlebtn={handlebtn}  dataAPI = {element}/>
        })
        
        }
        </div>
        
        </>

);
}

export default ShowResult;