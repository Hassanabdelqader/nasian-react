import React, { useState } from 'react';
import { SearchBarVideo } from './SearchBarVideo';
import ShowResultVideo from './ShowResultVideo';

function VideoRouter(props) {
    const [flag, setFlag] = useState(false);
    const [Data, setData] = useState();
    

    const getFlag = (e)=>{
        setFlag(true)
        
    }
    function fetchData(S){
        console.log(S)
         setData(S.data)
         if(flag){
            window.scrollTo(0, 900)

         }else{
             window.scrollTo(0, 400)
         }
    }
    return (
        <div>

        <SearchBarVideo getData={fetchData } />  
            
        { Data&&
            <ShowResultVideo data = {Data} setflag = {getFlag}  />
        }

        </div>
    );
}

export default VideoRouter;