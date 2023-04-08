import React, { useState } from 'react';
import PokeCard from './PokeCard';

const SectionPokeListe = ({liste, lang, searchTerm}) => {
  console.log(!searchTerm);
  const flip = (pokemonName) => {
    console.log('fliped '+pokemonName)
    const front = document.getElementById('Front'+pokemonName);
    const back = document.getElementById('Back'+pokemonName);

    back.style.transform = 'rotateY(0deg)'
    back.style.zIndex = 10
    front.style.transform = 'rotateY(-180deg)'
    front.style.zIndex = 9
  }
  const unflip = (pokemonName) => {
    console.log('unfliped '+pokemonName)
    const front = document.getElementById('Front'+pokemonName);
    const back = document.getElementById('Back'+pokemonName);

    front.style.transform = 'rotateY(0deg)'
    front.style.zIndex = 10
    back.style.transform = 'rotateY(-180deg)'
    back.style.zIndex = 9
  }

  return (
    <div className="App-sec-liste">
      {!searchTerm ? liste.map(pokemon => <PokeCard onEnter={()=>{flip(pokemon.names[lang])}} onLeave={()=>{unflip(pokemon.names[lang])}} key={pokemon.id} pokemon={pokemon} lang={lang} />) : console.log(searchTerm)}
    </div>
  );
};

export default SectionPokeListe;