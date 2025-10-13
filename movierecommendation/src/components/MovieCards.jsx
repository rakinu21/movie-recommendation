import React from 'react'
import '../css/MovieCard.css'
export const MovieCards = ({movie}) => {

    function onFavoriteClick(){
        alert('clicked')
    }
  return (
    <div className='movie-card'>
         <div className="movie-poster">
            <img src={movie.url} alt={movie.title} className='image'/>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}> 🤍</button>
            </div>
         </div>

         <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
         </div>
    </div>

  )
}
