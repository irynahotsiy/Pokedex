import React from 'react';
import {Item} from "./Item/Item";
import {Container, WrappedContainer, Column} from "./style";
import {Button} from "../Button/Button";
import {getSplitedArray} from "../../helpers";


export function PokemonsList(props) {
  return (
    <Container>
     <Column>
      {getSplitedArray(props.list).map((array) => 
        <WrappedContainer key={array[0].id}>
          {array.map((el) => 
             <Item key={el.id} el={el} elementDetails={props.elementDetails} onCurrentElementClick={props.onCurrentElementClick}/>
          )}
        </WrappedContainer>
      )}
      </Column>
     <Button onLoadMore={props.onLoadMore} isLoaded={props.isLoaded}/> 
    </Container>
  )
}