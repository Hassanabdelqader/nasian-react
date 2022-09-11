import React, { useState } from 'react';
import { SearchBar } from './SearchBar';

function Images(props) {
    const [Search, setSearch] = useState("");

    const getSearch = (e)=>{
        setSearch(e)
    }

    return (
        <div>
         <SearchBar searchfunction={getSearch} />
         <span>
                  {Search}
                  </span>
         
        </div>
    );
}

export default Images;