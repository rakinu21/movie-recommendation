import React from 'react'
import { useMovieContext } from '../context/MovieContext'
import '../css/favorite.css';
import { MovieCards } from '../components/MovieCards'
export const Favorite = () => {

  const { favorites} = useMovieContext();

   if(favorites){
    return     <div className='grid-fav'>
              {favorites.length > 0 ? (
                favorites.map((movie) => <MovieCards movie={movie} key={movie.id} />)
              ) : (
                <p>No movies found.</p>
              )}
            </div>
   }
  return (

      <div className="favorites">
        <h2>no favorite movies yet</h2>
      </div>
  )
}
