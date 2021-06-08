import React from 'react';
import Home from './components/homeComponents';
import SearchBar from './components/searchBar';

function App() {
  return (
    <div className='App'>
      <h1 className='titleDisplay'>Look for the magic in every moment.</h1>

      <Home />
      <SearchBar />
    </div>
  );
}

export default App;
