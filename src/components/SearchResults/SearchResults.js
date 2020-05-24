import React, {useState, useEffect} from 'react';

import Card from '../Card';
import { getAllPokemon, getPokemon } from '../../services/pokemon';


function SearchResults(props) {
    // console.log(props.show);
    const [ pokemonData, setPokemonData] = useState([]);
    const [ loading, setLoading] = useState(true);
    const initialUrl = `https://pokeapi.co/api/v2/pokemon/${props.name}`;
    console.log(initialUrl);
   
   
    useEffect(() => {
      async function fetchData() {
        let response = await getAllPokemon(initialUrl);
        //console.log(response);
        
        await loadingPokemon(response);
        setLoading(false);
      }
      fetchData();
    }, []);
  
   
  
    const loadingPokemon = async (data) => {
      
      setPokemonData(data);
    };
  
    console.log(pokemonData);


       
   return (
        
        <div>
        { loading ? 
        <> 
        <h1>No existe ese pokemon ...</h1> 
        </>
        :(
        <>
          {/* <div className="btn">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div> */}
          <div className="gridContainer m-5" onClick={e => console.log("Clicked")}>
            
             <Card pokemon={pokemonData}/>
            
          </div>
          {/* <div cleassName="btn">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>   */}
        </>
        )
        }
      </div>  
    );
   

    
  }

export default SearchResults;