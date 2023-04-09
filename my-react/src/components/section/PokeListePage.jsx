import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import PokeListe from './PokeListe'

const PokeListePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonsListe_raw, setPokemonsListe_raw] = useState([])
  const [pokemonsTypes_raw, setPokemonsTypes_raw] = useState([])
  const lang = "fr"

  useEffect(() => {
    fetch('https://pokedex-jgabriele.vercel.app/pokemons.json')
    .then(res => res.json())
    .then((result)=> setPokemonsListe_raw(result))
  },[])

  useEffect(() => {
    fetch('https://pokedex-jgabriele.vercel.app/types.json')
    .then(res => res.json())
    .then((result)=> setPokemonsTypes_raw(result))
  },[])

  const handleChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const createPokemonsListe = () => {
    const pokemonsListe = []

    
    pokemonsListe.push(
      pokemonsListe_raw.map(pokemon =>{
        const Poke = new Object()
        Poke['types'] = []
        Poke['createPokeType'] = (type, colorType) => {
          return[type, colorType]
        }
        
        Object.entries(pokemonsTypes_raw).forEach(type => {
          const typeChecked = []
          pokemon.types.forEach(pokeType => {
            if (!typeChecked.includes(pokeType)){
              pokeType === type[0] ? Poke.types.push(Poke.createPokeType(type[1].translations[lang], type[1].backgroundColor)) : typeChecked.push(pokeType)
            }
          })
        })
      Poke['id'] = pokemon.id
      Poke['name'] = pokemon.names[lang]
      Poke['moves'] = pokemon.moves
      Poke['image'] = pokemon.image
      Poke['height'] = pokemon.height
      Poke['weight'] = pokemon.weight
      return Poke
    }))
    return pokemonsListe
  }
  const test = createPokemonsListe()

  return (
    <div className="App-sec-PokeListePage">
      <SearchBar 
        value={searchTerm}
        onChange={handleChange}
      />
      <span>{searchTerm}</span>
      <PokeListe liste={test[0]} searchTerm={searchTerm}/>
    </div>
  );
};

export default PokeListePage;