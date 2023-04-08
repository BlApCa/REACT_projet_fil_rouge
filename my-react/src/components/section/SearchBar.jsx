import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
      <input className="App-ht-searchbar"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
  );
};

export default SearchBar;