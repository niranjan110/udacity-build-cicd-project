import React, { useEffect, useState } from 'react';

export default function MovieList({ onMovieClick }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_MOVIE_API_URL || 'http://localhost:5000';

    fetch(`${apiUrl}/movies`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data.movies || []);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <button key={movie.id} type="button" onClick={() => onMovieClick(movie)}>
          {movie.title}
        </button>
      ))}
    </div>
  );
}
