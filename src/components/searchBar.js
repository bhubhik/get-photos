import React, { useState } from 'react';
import { Button } from 'react-bulma-components';
import { Form } from 'react-bulma-components';

const SearchBar = ({ onSubmit, disabled }) => {
  const { Input } = Form;
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userInput);
    setUserInput('');
  };

  return (
    <div className='searchBox'>
      <form className='searchForm' onSubmit={handleSubmit}>
        <div className='searchText'>
          <Input
            className='input '
            type='text'
            placeholder='Type here the picture you are looking for'
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          ></Input>
        </div>
      </form>
      <div className='searchButton'>
        <Button color='primary' className='button btn' onClick={handleSubmit}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
