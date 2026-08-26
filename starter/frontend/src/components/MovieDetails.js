import React from 'react';

export default function MovieDetails({ movie }) {
  if (!movie) {
    return null;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
    </div>
  );
}
