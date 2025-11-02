import React, { useState, useEffect } from 'react';
import { MovieCards } from '../components/MovieCards';
import '../css/home.css';
import { getPopularMovies, searchMovies } from '../services/api.js';

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        setError('Failed to load movies...');
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (error) {
      setError('Failed to search movies');
    } finally {
      setLoading(false);
    }
    setSearchQuery('');
  };

  return (
    <div className='home'>
      <form onSubmit={handleSearch} className='search-form'>
        <input
          type='text'
          placeholder='Search for movies...'
          className='search-input'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type='submit' className='search-button'>
          Search
        </button>
      </form>

      {loading ? (
        <div className='loading'>Loading...</div>
      ) : error ? (
        <div className='error'>{error}</div>
      ) : (
        <div className='grid'>
          {movies.length > 0 ? (
            movies.map((movie) => <MovieCards movie={movie} key={movie.id} />)
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      )}
    </div>
  );
};
