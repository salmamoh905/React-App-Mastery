import SearchIcon from "./search.svg";
import './App.css';
import { useEffect, useState } from 'react';
import MovieCard from './Movie'

//
const API_URL = "http://www.omdbapi.com?apikey=12bf836b";

//const movie1 =  { Title: "Italian Spiderman", Year: "2007", imdbID: "tt2705436"}

function App() {
  const [movies, setMovies] = useState([])

  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies =async(title)=>{
    const response = await fetch (`${API_URL}&s=${title}`)
    const data = response.json()

    //console.log(data)
    setMovies(data.Search)
  }

  useEffect(()=>{
    searchMovies("Spiderman")

  }, [])
  return (
    <div className="app">
      <h1> MOVIE LAND</h1>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
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
     
      {/* <h1>Hello, {isNameShowing ? name :'somebody'} </h1>
      {name ? (
        <>
        whatsup
        </>
      ):(
        <h1>cannot access</h1>
      )} */}
    </div>
  );
}

export default App;
