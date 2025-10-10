
import React, { useState } from 'react'
import { MovieCards } from '../components/MovieCards'


export const Home = () => {

    const movies = [
        {
            id:1,
            title:'movie1',
            release_date:'2024'
        },
         {
            id:2,
            title:'movie1',
            release_date:'2024'
        },
         {
            id:3,
            title:'movie1',
            release_date:'2024'
        },

    ]

    const handleSearch =(e)=>{
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery('')
    }

    const [searchQuery , setSearchQuery] = useState('')
    
  return (
    <div className='home'>

        <form onSubmit={handleSearch} className='search-form'>
            <input type="text"  
                    placeholder='search for movies...' 
                    className='search-input'
                    value={searchQuery}
                    onChange={(e)=> setSearchQuery(e.target.value)}/>
            <button type='submit' className='search-button'>search</button>
        </form>

        <div className="grid">
            {movies.map(movie =>(<MovieCards movie={movie} key={movie.id}/>) )};
        </div>
    </div>
  )
}
