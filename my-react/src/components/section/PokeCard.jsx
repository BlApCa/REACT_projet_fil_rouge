import React, { useEffect, useState } from 'react';
import PokeCardType from './PokeCardType';


const SectionPokeCard = ({pokemon, lang, onEnter, onLeave}) => {

  return (
    <div className="App-sec-card" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <span className="idPoke">No.{pokemon.id < 10? '00'+pokemon.id : pokemon.id < 100 ? '0'+pokemon.id : pokemon.id }</span>
      <h2 className="pokeName">{pokemon.name}</h2>
      <div id="Face">
        <div className="front" id={'Front'+pokemon.name}>
          <img className="pokePic" src={pokemon.image}/>
          <div>
            {pokemon.types.map(type => <span> {type[0]} </span>)}
          </div>
        </div>
        <div className="back" id={'Back'+pokemon.name}>
          <div><span>Taille : {pokemon.height}ft</span><span>Poid : {pokemon.weight}Kg</span></div>
          <div className="listeMove">
            {pokemon.moves.map(move => <div>{move}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPokeCard;
