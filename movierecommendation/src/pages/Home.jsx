
import React, { useState, useEffect } from 'react'
import { MovieCards } from '../components/MovieCards'
import '../css/home.css'
import { getPopularMovies, searchMovies } from '../services/api.js'

export const Home = () => {

     const [searchQuery , setSearchQuery] = useState('');
     const [movies, setMovies] = useState([]);
     const[error, setError]= useState('null');
     const [loading, setLoading] = useState(true);






    useEffect(()=>{
      const loadPapularMovies = async ()=>{

        try {
             const popularMovies  = await getPopularMovies();
             setMovies(popularMovies)
        } catch (error) {
            setError('Failed to load movies...')
        }

        finally{
            setLoading(false)
        }
      }

      loadPapularMovies()
    },[])


    const handleSearch =(e)=>{
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery('')
    }

   
    
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
            {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) && 
            (<MovieCards movie={movie} key={movie.id}/>) )}
        </div>
    </div>
  )
}
