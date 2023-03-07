import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ onSearch }) => {

  const[term, setTerm] = useState('')

  const onChange = (e) => {
    console.log(e.target.value);
    setTerm(e.target.value);
  }

  const search = (event) => {
    event.preventDefault();
    onSearch(term);
  }

  return (
    <div>
      <h4>Add more repos!</h4>
      <form>
      Enter a github username: <input type='text' onChange={onChange}></input>
      <button onClick={search}> Add Repos </button>
      </form>
    </div>
  );
}

export default Search;