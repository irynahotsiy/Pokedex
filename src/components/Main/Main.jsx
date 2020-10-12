import React, { useState } from 'react';
import {Row} from "./style";
import {PokemonDetails} from "../PokemonDetails/PokemonDetails";
import {PokemonsList} from "../PokemonsList/PokemonsList";

export function Main (props) {
  let [currentElement, setCurrentElement] = useState();

  return (
    <Row>
      <PokemonsList list={props.list} onLoadMore={props.onLoadMore} isLoaded={props.isLoaded} 
         onCurrentElementClick={(el) => setCurrentElement(el)}/>
      <PokemonDetails element={currentElement}/>
    </Row>
  )
}