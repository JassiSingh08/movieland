import React from "react";
import { useState, useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// API key: 703a9680

const API_KEY = "http://www.omdbapi.com?apikey=703a9680";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_KEY}&s=${title}`);

    const data = await response.json();
    setMovies(data.Search);
  };

  const enterSearch = (e) => {
    if ( e.key === "Enter"){
      searchMovies(searchTerm)
    }
  };


  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  const movie1 = {
    Title: "The Amazing Spiderman 2 Webb Cut",
    Year: "2021",
    imdbID: "tt18351128",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg",
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
          onKeyDown={enterSearch}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;