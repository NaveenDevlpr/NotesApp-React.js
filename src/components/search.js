import React from "react"
import { MdSearch } from "react-icons/md";

const Search=({handleSearch})=>{
    return (
        <div className="SearchBar">
            <MdSearch className="search-icon" size='1.3em'/>

            <input type='text' onChange={(event)=>handleSearch(event.target.value)} placeholder="search..."></input>
        </div>
    )
}


export default Search;