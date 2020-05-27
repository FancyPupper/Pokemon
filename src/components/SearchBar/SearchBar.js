import React, { useState } from 'react';
import ReactDOM from 'react';
import SearchResults from '../SearchResults';
import { buildQueries } from '@testing-library/react';
import TypeResults from '../TypeResults';

var show = true;
function SearchBar() {
    const [typedName, setName] = useState("");
    const [typedType, setType] = useState("");
    const [ showName, setShowName] = useState(true);
    const [ showType, setShowType] = useState(true);
    
    function search(event) {
        
        setName(event.target.value);
        setShowName(true);

    }

    function searchType(event) {
        
        setType(event.target.value);
        setShowType(true);

    }

    function showResults(event) {
        event.preventDefault();
        setShowName(false);
        console.log("entre");

    }

    function showResultsType(event) {
        event.preventDefault();
        setShowType(false);
        console.log("entre");

    }


    
    return (
    <div className="d-flex justify-content-center flex-column">
        <div className="row m-3 d-flex justify-content-center">
            <div className="col">
                <form>
                    <input type="text" className="form-control" value={typedName} onChange={search} placeholder="Search a Pokemon" />
                    <button type="button" className="btn btn-primary" onClick={showResults} >Search</button>
                </form>
                {showName ?
                    <>
                        <h1></h1>
                    </>
                    : (
                        <>
                        
                        <SearchResults className="m-5" name={typedName.toLowerCase()} showName={true} />
                       
                        </>
                    )
                }
              

            </div>

        </div>

        <div className="row m-3 auto-mx">
        <div className="col auto-mx">
            <form>
                <input type="text" className="form-control" value={typedType} onChange={searchType} placeholder="Search a type" />
                <button type="button" className="btn btn-primary" onClick={showResultsType} >Search</button>
            </form>
            {showType ?
                <>
                    <h1></h1>
                </>
                : (
                    <>
                    
                    <TypeResults className="m-5" type={typedType.toLowerCase()} showType={true} />
                   
                    </>
                )
            }
          

            </div>

        </div>
    </div>    
    );
}

export default SearchBar;