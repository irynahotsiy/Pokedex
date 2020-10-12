import React from 'react';


import {Container, DetailsBox, Table, Title, NoDataMessage, Type} from "./style";
import {capitalize, styledID, getElementTypes, getStatScore, getTypeColor} from "../../helpers";



  
export function PokemonDetails(props) {
  if (props.element) {
      let { stats, types, name, id, sprites, weight, moves} = props.element;

        const el_name = capitalize(name);
        const el_image = sprites.front_default;
        const el_id = id;
        const el_types = getElementTypes(types);
        const el_attack = getStatScore("attack", stats);
        const el_defense = getStatScore("defense", stats);
        const el_hp = getStatScore("hp", stats);
        const el_special_attack = getStatScore("special-attack", stats);
        const el_special_defense = getStatScore("special-defense", stats);
        const el_speed = getStatScore("speed",stats);
        const el_weight = weight;
        const el_moves = moves.length;
    
    return (
      <Container>
        <DetailsBox>
          <img src={el_image} alt="PokemonImage"/>
          <Title>{el_name} {styledID(el_id)}</Title>
          <Table>
            <tbody>
              <tr>
                <td>Type</td>
                <td>
                  {el_types.map(type => 
                  <Type key={type.slot} color={getTypeColor(type.type)}>{capitalize(type.type)} </Type>
                  )}</td>
              </tr>
              <tr>
                <td>Attack</td>
                <td>{el_attack}</td>
              </tr>
              <tr>
                <td>Defense</td>
                <td>{el_defense}</td>
              </tr>
              <tr>
                <td>HP</td>
                <td>{el_hp}</td>
              </tr>
              <tr>
                <td>SP Attack</td>
                <td>{el_special_attack}</td>
              </tr>
              <tr>
                <td>SP Defense</td>
                <td>{el_special_defense}</td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>{el_speed}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{el_weight}</td>
              </tr>
              <tr>
                <td>Moves</td>
                <td>{el_moves}</td>
              </tr>
            </tbody>
          </Table>
        </DetailsBox>
      </Container>
    )
  }
  return (
    <Container>
      <NoDataMessage>Please, select a pokemon to get more details</NoDataMessage>
    </Container>
  )
}