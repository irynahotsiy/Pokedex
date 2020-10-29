import React from 'react';
import {ElContainer, ImageContainer, Title, TypesContainer} from "./style";
import {capitalize} from "../../../helpers";
import {Type} from "../../../helpers.style";

export function Item(props) {
  const {name, types, sprites} = props.el;
  
  return (
    <ElContainer onClick={() => props.onCurrentElementClick(props.el)}>
        <ImageContainer >
          <img src={sprites.front_default} alt="Pokemon_image"/>
        </ImageContainer>
        <Title>{capitalize(name)}</Title>
        <TypesContainer>
          {types.map(type =>
            <Type key={type.slot} type={type.type.name} >{capitalize(type.type.name)}</Type> )}
        </TypesContainer>
    </ElContainer>
  )
}