import React from 'react'

function MovieList({movies,favouriteComponent,handleFavouritesClick}) {
    const FavoriteComponent=favouriteComponent
  return (
    <>
        {movies && movies.map((movie,index)=>
           (
             <div className='d-flex justify-content-start m-3 image-container'>
                <img src={movie.Poster} alt="movie poster"></img>
                <div onClick={()=>handleFavouritesClick(movie)} className='overlay d-flex align-items-center justify-content-center'>
                    <FavoriteComponent/>
                </div>
            </div>
        ))}
    </>
  )
}

export default MovieList