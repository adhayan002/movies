import 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react';
import MovieList from './components/MovieList';
import "./App.css"
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';
import RemoveFavourite from './components/RemoveFavourite';

function App() {
  const [movies,setMovies]=useState([])
  const [favourites,setFavourites]=useState([])
  const [searchValue,setSearchValue]=useState('')

  const getMovieRequest=async(searchValue)=>{
    const url=`http://www.omdbapi.com/?s=${searchValue}&apikey=d38e7913`
    
    const response=await fetch(url)
    const responseJson=await response.json()

    if(responseJson.Search){
      setMovies(responseJson.Search)
    }
    
  }

  useEffect(()=>{
    getMovieRequest(searchValue)
  },[searchValue])

  const saveToLocalStorage=(items)=>{
    localStorage.setItem('react-movie-app-favourites',JSON.stringify(items))
  }

  const addFavouriteMovie = (movie)=>{
    const newFavouriteList=[...favourites,movie]
    setFavourites(newFavouriteList)
    saveToLocalStorage(newFavouriteList)
  }

  const removeFaouriteMovie=(movie)=>{
   const FavouritesList=favourites.filter((favourite)=>favourite.imdbID!==movie.imdbID)
   setFavourites(FavouritesList)
   saveToLocalStorage(FavouritesList)
  }

  return (
     <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
      <MovieList movies={movies} favouriteComponent={AddFavorites} handleFavouritesClick={addFavouriteMovie}/>
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Favourites'/>
      </div>
      <div className='row'>
      <MovieList movies={favourites} favouriteComponent={RemoveFavourite} handleFavouritesClick={removeFaouriteMovie}/>
      </div>
    </div>
  );
}

export default App;
