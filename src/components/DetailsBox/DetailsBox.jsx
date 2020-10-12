import React from 'react';


import {RowDirection} from "./style"



  
export function DetailsBox(props) {
  if (props.element) {
   
      let { stats, types, name, id, sprites, weight, moves} = props.element;
    
    
      function getElementTypes () {
        let typesList = [];
        types.map(type =>
          typesList.push({type: type.type.name, slot: type.slot})
        )
        return typesList;
      };
    
      function getStatScore (statName) {
        let stat = stats.filter((stat) => stat.stat.name === statName);
        return stat[0].base_stat;
      }


        const el_name = name;
        const el_image = sprites.front_default;
        const el_id = id;
        const el_types = getElementTypes();
        const el_attack = getStatScore("attack");
        const el_defense = getStatScore("defense");
        const el_hp = getStatScore("hp");
        const el_special_attack = getStatScore("special-attack");
        const el_special_defense = getStatScore("special-defense");
        const el_speed = getStatScore("speed");
        const el_weight = weight;
        const el_moves = moves.length;
    
        return (
      <RowDirection>
      <img src={el_image} alt="ImageP"/>
    <p>{el_name}</p>
    <p>#{el_id}</p>
    <div><span>type </span>
        {el_types.map(type => 
          <span key={type.slot}>{type.type} </span>
        )}
      </div>
      <p>attack {el_attack}</p>
      <p>deffence {el_defense}</p>
      <p>hp {el_hp}</p>
      <p>special_attack {el_special_attack}</p>
      <p>special_defense {el_special_defense}</p>
      <p>speed {el_speed}</p>
      <p>weight {el_weight}</p>
      <p>moves {el_moves}</p>
      </RowDirection>
    )
  }
  return (
    <RowDirection>
    </RowDirection>
  )
}