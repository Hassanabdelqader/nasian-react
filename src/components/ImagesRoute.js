import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import ShowResult from './ShowResult';


function Images(props) {
    const [Search, setSearch] = useState("");
    const [Data, setData] = useState("");
    

    const getSearch = (e)=>{
        setSearch(e)
        
    }
    function fetchData(S){
        console.log(Search)
         setData(S.data)
         window.scrollTo(0, 1060)
    }
    
    return (
        <div>
            <>
            
         <SearchBar searchfunction={getSearch} 
         getData={fetchData } />
         {
            <ShowResult fetchedData ={Data} /> 
         }
        
            </>
        </div>
    );


}



export default Images;