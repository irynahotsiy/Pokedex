import React, { useState } from 'react';
import {Row} from "./style";
import {PokemonsList} from "../PokemonsList/PokemonsList";
import {PokemonDetails} from "../PokemonDetails/PokemonDetails";

export function Main (props) {
  let [currentElement, setCurrentElement] = useState();

  //console.log(">>>>>>>>>>>>", currentElement)
  return (
    <Row>
      <PokemonsList list={props.list} onLoadMore={props.onLoadMore} isLoaded={props.isLoaded} 
         onCurrentElementClick={(el) => setCurrentElement(el)}/>
      <PokemonDetails element={currentElement}/>
    </Row>
  )
}