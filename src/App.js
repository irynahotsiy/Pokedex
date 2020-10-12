import React, {useState, useEffect} from 'react';
import {Main} from "./components/Main/Main";
import {Title }from "./components/Title/Title";


import './App.css';

const firstPageURL = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=12`

function App() {
  let [pokemonsList, setPokemonsList] = useState([]);
  let [nextPageUrl, setNextPageUrl] = useState("");
  let [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    loadPokemonsList(firstPageURL);
  }, []);

  async function fetchAll(list) {
    try {
      let data = await Promise.all(list.map(item => 
       fetch(item.url)
      ));
      let detailsList = await Promise.all(data.map(res => res.json ? res.json() : res)); 
      return detailsList;
    } catch (err) {
      console.log(err)
    }
  }

  async function loadPokemonsList(url) {
    const response = await fetch(url);
    const data = await response.json();
    const list = data.results;
    const detailedList = await fetchAll(list);
    setPokemonsList([...pokemonsList, ...detailedList]);
    setNextPageUrl(data.next)
  }

  function checkIfLoadMore() {
    if (nextPageUrl === null) {
      setIsLoaded(true);
    } else {
      loadPokemonsList(nextPageUrl)
    }
  }

  return (
    <div className="App"> 
      <Title />
      <Main list={pokemonsList} onLoadMore={checkIfLoadMore} isLoaded={isLoaded}/>
    </div>
  );
}

export default App;
