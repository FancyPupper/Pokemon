import React, {useState, useEffect} from 'react';

import Card from '../Card';
import { getAllPokemon, getPokemon } from '../../services/pokemon';


function Catalog() {
    const [ pokemonData, setPokemonData] = useState([]);
    const [ nextUrl, setNextUrl] = useState('');
    const [ prevUrl, setPrevUrl] = useState('');
    const [ loading, setLoading] = useState(true);
    const initialUrl = 'https://pokeapi.co/api/v2/pokemon';
    const selectedCard = 0;
  
    useEffect(() => {
      async function fetchData() {
        let response = await getAllPokemon(initialUrl);
        setNextUrl(response.next);
        setPrevUrl(response.previous);
        await loadingPokemon(response.results);
        setLoading(false);
      }
      fetchData();
    }, []);
  
    const next =  async () => {
      setLoading(true);
      let data = await getAllPokemon(nextUrl)
      await loadingPokemon(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      setLoading(false);
    }
  
    const prev =  async () => {
      if(!prevUrl) return;
      setLoading(true);
      let data = await getAllPokemon(prevUrl)
      await loadingPokemon(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      setLoading(false);
    }
    
    const getDetail = async (i) => {
      localStorage.setItem("selectedCard", i);
      console.log("SELECTED CARD : " + localStorage.selectedCard);
      //this.props.history.push(`/Detail/${i}`);

    ;}
    
  
    const loadingPokemon = async (data) => {
      let _pokemonData = await Promise.all(
        data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
        })
      );
  
      setPokemonData(_pokemonData);

    };

    console.log(pokemonData);
    return(
      <div>
      { loading ? 
      <> 
      <h1>Loading ...</h1> 
      </>
      :(
      <>
        <div className="btn">
          <button onClick={prev}>Prev</button>
          <button onClick={next}>Next</button>
        </div>
        <div className="gridContainer">
          {pokemonData.map((pokemon, i) => {
            return <div onClick={() => getDetail(i)}><Card key={i} pokemon={pokemon}/></div>
          })}
        </div>
        <div className="btn">
          <button onClick={prev}>Prev</button>
          <button onClick={next}>Next</button>
        </div>  
      </>
      )
      }
    </div>  
    ); 
  };

  export default Catalog;
