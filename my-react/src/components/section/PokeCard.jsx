import React, {Box} from 'react';

const SectionPokeCard = ({pokemon, lang, onEnter, onLeave}) => {



  return (
    <div className="App-sec-card" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <span class="idPoke">No.{pokemon.id < 10? '00'+pokemon.id : pokemon.id < 100 ? '0'+pokemon.id : pokemon.id }</span>
      <h2 class="pokeName">{pokemon.names[lang]}</h2>
      <div id="Face">
        <div class="front" id={'Front'+pokemon.names[lang]}>
          <img className="pokePic" src={pokemon.image}/>
          <div>
            {pokemon.types.map(type => <span> {type} </span>)}
          </div>
        </div>
        <div className="back" id={'Back'+pokemon.names[lang]}>
          <div><span>Taille : {pokemon.height}ft</span><span>Poid : {pokemon.weight}Kg</span></div>
          <div class="listeMove">
            {pokemon.moves.map(move => <div>{move}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPokeCard;
