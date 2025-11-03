import React from 'react'
import '../css/MovieCard.css'

import { useMovieContext } from '../context/MovieContext'
export const MovieCards = ({movie}) => {

   const { addMovies, removeFromFavorites, isFavorite} = useMovieContext()
  
   const favorite = isFavorite(movie.id)

    function onFavoriteClick(e){
       e.preventDefault();
       if(favorite) removeFromFavorites(movie.id);
       else{
        addMovies(movie)
       }
    }
  return (
    <div className='movie-card'>
         <div className="movie-poster">
            <img src= {`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} className='image'/>
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? 'active' : ''}`} onClick={onFavoriteClick}> 🤍</button>
            </div>
         </div>

         <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
         </div>
    </div>

  )
}
