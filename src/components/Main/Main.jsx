import React, { useState } from 'react';
import {Row} from "./style";
import {PokemonsBox} from "../PokemonsBox/PokemonsBox";
import {DetailsBox} from "../DetailsBox/DetailsBox";

export function Main (props) {
  let [currentElement, setCurrentElement] = useState();

  //console.log(">>>>>>>>>>>>", currentElement)
  return (
    <Row>
      <PokemonsBox list={props.list} onLoadMore={props.onLoadMore} isLoaded={props.isLoaded} 
         onCurrentElementClick={(el) => setCurrentElement(el)}/>
      <DetailsBox element={currentElement}/>
    </Row>
  )
}