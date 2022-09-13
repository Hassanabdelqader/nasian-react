import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import ShowResult from './ShowResult';
import ScrollToTop from "react-scroll-to-top";


function Images(props) {
    const [Search, setSearch] = useState("");

    const getSearch = (e)=>{
        setSearch(e)
    }

    return (
        <div>
            <>
            
         <SearchBar searchfunction={getSearch} />
            <ShowResult /> 
        
            </>
        </div>
    );
}

export default Images;