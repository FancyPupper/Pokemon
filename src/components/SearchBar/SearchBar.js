import React, { useState } from 'react';
import ReactDOM from 'react';
import SearchResults from '../SearchResults';
import { buildQueries } from '@testing-library/react';

var show = true;
function SearchBar() {
    const [typedText, setSearch] = useState("");
    const [ show, setShow] = useState(true);
    function search(event) {
        
        setSearch(event.target.value);
        setShow(true);

    }
    function showResults(event) {
        event.preventDefault();
        setShow(false);
        console.log("entre");

    }

    
    return (
        <div className="row m-3 auto-mx">
            <div className="col auto-mx">
                <form>
                    <input type="text" className="form-control" value={typedText} onChange={search} placeholder="search a Pokemon" />
                    <button onClick={showResults} >Search</button>
                </form>
                {show ?
                    <>
                        <h1></h1>
                    </>
                    : (
                        <>
                        
                        <SearchResults className="m-5" name={typedText.toLowerCase()} show={true} />
                       
                        </>
                    )
                }
              

            </div>

        </div>

    );
}

export default SearchBar;