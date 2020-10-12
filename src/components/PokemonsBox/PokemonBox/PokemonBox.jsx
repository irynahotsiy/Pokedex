import React from 'react';
import {ElContainer, ElBorder, ImageContainer, Title, ContainerFlex} from "./style";

export function PokemonBox(props) {
  const {name, types, sprites} = props.el;
  return (
    <ElContainer onClick={() => props.onCurrentElementClick(props.el)}>
      <ElBorder>
        <ImageContainer >
          <img src={sprites.front_default} alt="Pokemon_image"></img>
        </ImageContainer>
        <Title>{name}</Title>
        <ContainerFlex style={{display: "flex"}}>
          {types.map(type =>
            <p key={type.slot} style={{padding: 3}}>{type.type.name}</p> )}
        </ContainerFlex>
      </ElBorder>
      
    </ElContainer>
  )
}