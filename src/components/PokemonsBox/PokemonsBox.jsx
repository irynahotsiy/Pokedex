import React from 'react';
import {PokemonBox} from "./PokemonBox/PokemonBox";
import {Container, WrappedContainer} from "./style";
import {Button} from "../Button/Button";


export function PokemonsBox(props) {
  return (
    <Container>
      <WrappedContainer>
      {props.list.map(el => 
        <PokemonBox key={el.id} el={el} elementDetails={props.elementDetails} onCurrentElementClick={props.onCurrentElementClick}/>
      )}
      </WrappedContainer>
     <Button onLoadMore={props.onLoadMore} isLoaded={props.isLoaded}/> 
    </Container>
  )
}