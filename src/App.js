import React  from 'react';

import Navbar from './components/Navbar';
import './App.css';



function App() {
  return(
    <div>
      <Navbar></Navbar>
    </div>
  )
  
};

// const Home = () => {
//   return(
//     <Router>
//       <div>
//         <Switch>
//           <Route exact path='/'>
//             <Catalog/>
//           </Route>
//           <Route exact path='/detail/:id' component={Detail}>
//           </Route>
//         </Switch>
//       </div> 
//     </Router>
//   ) 
// };

// const Catalog = () => {
//   const [ pokemonData, setPokemonData] = useState([]);
//   const [ nextUrl, setNextUrl] = useState('');
//   const [ prevUrl, setPrevUrl] = useState('');
//   const [ loading, setLoading] = useState(true);
//   const initialUrl = 'https://pokeapi.co/api/v2/pokemon'

//   useEffect(() => {
//     async function fetchData() {
//       let response = await getAllPokemon(initialUrl);
//       setNextUrl(response.next);
//       setPrevUrl(response.previous);
//       await loadingPokemon(response.results);
//       setLoading(false);
//     }
//     fetchData();
//   }, []);

//   const next =  async () => {
//     setLoading(true);
//     let data = await getAllPokemon(nextUrl)
//     await loadingPokemon(data.results);
//     setNextUrl(data.next);
//     setPrevUrl(data.previous);
//     setLoading(false);
//   }

//   const prev =  async () => {
//     if(!prevUrl) return;
//     setLoading(true);
//     let data = await getAllPokemon(prevUrl)
//     await loadingPokemon(data.results);
//     setNextUrl(data.next);
//     setPrevUrl(data.previous);
//     setLoading(false);
//   }


//   const loadingPokemon = async (data) => {
//     let _pokemonData = await Promise.all(
//       data.map(async pokemon => {
//       let pokemonRecord = await getPokemon(pokemon.url);
//       return pokemonRecord;
//       })
//     );

//     setPokemonData(_pokemonData);
//   };

//   console.log(pokemonData);
//   return(
//     <div>
//     { loading ? 
//     <> 
//     <h1>Loading ...</h1> 
//     </>const Home = () => {
//   return(
//     <Router>
//       <div>
//         <Switch>
//           <Route exact path='/'>
//             <Catalog/>
//           </Route>
//           <Route exact path='/detail/:id' component={Detail}>
//           </Route>
//         </Switch>
//       </div> 
//     </Router>
//   ) 
// };

// const Catalog = () => {
//   const [ pokemonData, setPokemonData] = useState([]);
//   const [ nextUrl, setNextUrl] = useState('');
//   const [ prevUrl, setPrevUrl] = useState('');
//   const [ loading, setLoading] = useState(true);
//   const initialUrl = 'https://pokeapi.co/api/v2/pokemon'

//   useEffect(() => {
//     async function fetchData() {
//       let response = await getAllPokemon(initialUrl);
//       setNextUrl(response.next);
//       setPrevUrl(response.previous);
//       await loadingPokemon(response.results);
//       setLoading(false);
//     }
//     fetchData();
//   }, []);

//   const next =  async () => {
//     setLoading(true);
//     let data = await getAllPokemon(nextUrl)
//     await loadingPokemon(data.results);
//     setNextUrl(data.next);
//     setPrevUrl(data.previous);
//     setLoading(false);
//   }

//   const prev =  async () => {
//     if(!prevUrl) return;
//     setLoading(true);
//     let data = await getAllPokemon(prevUrl)
//     await loadingPokemon(data.results);
//     setNextUrl(data.next);
//     setPrevUrl(data.previous);
//     setLoading(false);
//   }


//   const loadingPokemon = async (data) => {
//     let _pokemonData = await Promise.all(
//       data.map(async pokemon => {
//       let pokemonRecord = await getPokemon(pokemon.url);
//       return pokemonRecord;
//       })
//     );

//     setPokemonData(_pokemonData);
//   };

//   console.log(pokemonData);
//   return(
//     <div>
//     { loading ? 
//     <> 
//     <h1>Loading ...</h1> 
//     </>
//     :(
//     <>
//       <div className="btn">
//         <button onClick={prev}>Prev</button>
//         <button onClick={next}>Next</button>
//       </div>
//       <div className="gridContainer" onClick={e => console.log("Clicked")}>
//         {pokemonData.map((pokemon, i) => {
//           return <Card key={i} pokemon={pokemon}/>
//         })}
//       </div>
//       <div className="btn">
//         <button onClick={prev}>Prev</button>
//         <button onClick={next}>Next</button>
//       </div>  
//     </>
//     )
//     }
//   </div>  
//   ); 
// };

// function Detail(props) {
//   let {id} = useParams();
//   return (
//     <div>
//       <h1>Detalle pokemon : {id}</h1>
//       <Link to="/"> volver</Link>
//     </div>
//   );
// }
//     :(
//     <>
//       <div className="btn">
//         <button onClick={prev}>Prev</button>
//         <button onClick={next}>Next</button>
//       </div>
//       <div className="gridContainer" onClick={e => console.log("Clicked")}>
//         {pokemonData.map((pokemon, i) => {
//           return <Card key={i} pokemon={pokemon}/>
//         })}
//       </div>
//       <div className="btn">
//         <button onClick={prev}>Prev</button>
//         <button onClick={next}>Next</button>
//       </div>  
//     </>
//     )
//     }
//   </div>  
//   ); 
// };

// function Detail(props) {
//   let {id} = useParams();
//   return (
//     <div>
//       <h1>Detalle pokemon : {id}</h1>
//       <Link to="/"> volver</Link>
//     </div>
//   );
// }

export default App;
