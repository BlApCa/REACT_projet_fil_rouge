import React from 'react';

const SearchBar = ({value, onChange}) => {


  return (
      <input className="App-ht-searchbar"
        type="text"
        placeholder="Search by name, type..."
        value={value}
        onChange={onChange}
      />
  );
};

export default SearchBar;