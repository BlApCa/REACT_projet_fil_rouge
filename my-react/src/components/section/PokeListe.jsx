import React, { useState } from 'react';
import PokeCard from './PokeCard';

const SectionPokeListe = ({liste, searchTerm}) => {
  const [newListe, setNewListe] = useState([])

  const flip = (pokemonName) => { 
    const front = document.getElementById('Front'+pokemonName);
    const back = document.getElementById('Back'+pokemonName);

    back.style.transform = 'rotateY(0deg)'
    back.style.zIndex = 10
    front.style.transform = 'rotateY(-180deg)'
    front.style.zIndex = 9
  }
  const unflip = (pokemonName) => {
    const front = document.getElementById('Front'+pokemonName);
    const back = document.getElementById('Back'+pokemonName);

    front.style.transform = 'rotateY(0deg)'
    front.style.zIndex = 10
    back.style.transform = 'rotateY(-180deg)'
    back.style.zIndex = 9
  }
  
  const filteredListe = () => {
    console.log('in '+searchTerm)
    const tab = []
    liste.forEach(pokemon => {
      if(pokemon.name.toLowerCase().includes(searchTerm)){
        console.log(pokemon)
        tab.push(pokemon)
      }
      else {
        pokemon.types.map(type => {
          if(type[0].toLowerCase().includes(searchTerm)){
            console.log(pokemon)
            tab.push(pokemon)
          }
        })
      }
    })
    return tab
  }

  return (
    <div className="App-sec-liste">
      {!searchTerm ? liste.map(pokemon => <PokeCard onEnter={()=>{flip(pokemon.name)}} onLeave={()=>{unflip(pokemon.name)}} key={pokemon.id} pokemon={pokemon}/>) 
        : filteredListe().map(pokemon => <PokeCard onEnter={()=>{flip(pokemon.name)}} onLeave={()=>{unflip(pokemon.name)}} key={pokemon.id} pokemon={pokemon}/>)
      }
    </div>
  );
};

export default SectionPokeListe;