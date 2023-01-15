import React, { useContext } from 'react'

import { MovieContext } from '~/context/UseMovie'

import { Movie, MovieContextType } from '~/types/Movie'

import MovieCard from '../MoviCard'

const MovieList = () => {
  const { movies } = useContext(MovieContext) as MovieContextType
  return (
    <div className=" flex  flex-row flex-wrap justify-between bg-gray-100 p-5">
      {movies.map((movie: Movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  )
}

export default MovieList
