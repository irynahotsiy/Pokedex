export function capitalize (str) {
  let firstLetter = str.slice(0, 1).toUpperCase();
  let rest = str.slice(1);
  return firstLetter.concat(rest);
}

export function styledID (id) {
  switch (id.toString().length) {
    case 1: 
      return `#00${id}`;
    case 2: 
      return `#0${id}`;
    default: 
      return `#${id}`;
  }
} 

export function getElementTypes (types) {
  let typesList = [];
  types.map(type =>
    typesList.push({type: type.type.name, slot: type.slot})
  )
  return typesList;
};

export function getStatScore (statName, stats) {
  let stat = stats.filter((stat) => stat.stat.name === statName);
  return stat[0].base_stat;
}

export function getTypeColor(type) {
  switch (type) {
    case "grass": 
      return ["#3ba03b", "#f9fdfe"];
    case "poison":
      return ["#7d35b3", "#d6ccde"];
    case "fire": 
      return ["#ea5d19", "#e6cabd"];
    case "flying":
      return ["#adecea", "#f7f9f9"];
    case "water": 
      return ["#2196f3", "#b8d0e2"];
    case "bug": 
      return ["#5f8698", "#b8d0e2"];
    case "electric": 
      return ["#f7e75e", "#f1ecc3"];
    case "fighting": 
      return ["#d61919", "#f1ecc3"];
    case "normal":
      return ["#CDDC39", "#eef1d1"];
    case "ground":
      return ["#b9b3b3", "#f1ecc3"]
    default: 
      return ["#009688", "#b9b3b3"]
  }
}


export function getSplitedArray(array) {
  let fullList = [];
  for(let i=0; i < array.length; i++ ){
    let items = [];
    for (let j=0; j < 3; j++) {
      items.push(array[i]);
      i++;
    }
    fullList.push(items);
  }
  return fullList;
}
