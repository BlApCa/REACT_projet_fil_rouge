import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import PokeListe from './PokeListe'

const PokeListePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonsListe, setPokemonsListe] = useState([])

  useEffect(() => {
    fetch('https://pokedex-jgabriele.vercel.app/pokemons.json')
    .then(res => res.json())
    .then((result)=> setPokemonsListe(result))

  },[])

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App-sec-PokeListePage">
      <SearchBar className="App-ht-searchbar"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <PokeListe liste={pokemonsListe} lang={"fr"} searchTerm={searchTerm}/>
    </div>
  );
};

export default PokeListePage;