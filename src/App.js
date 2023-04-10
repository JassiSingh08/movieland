import React from 'react'
import { useEffect } from 'react';

// API key: 703a9680

const API_KEY = 'http://www.omdbapi.com?apikey=703a9680';

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_KEY}&s=${title}`)

    const data = await response.json();
    console.log(data.Search);
  }

  useEffect(()=>{
    searchMovies('spiderman');
  }, [])

  return (
    <h1>App</h1>
  );
}

export default App;