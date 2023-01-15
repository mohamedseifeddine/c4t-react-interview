/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, ReactElement, useEffect, useState } from 'react'

import { getMovieList } from '~/services/movie'

import { Movie, MovieContextType } from '~/types/Movie'

export const MovieContext = createContext<MovieContextType | null>(null)

const MovieProvider = ({ children }: { children: ReactElement }) => {
  const [movies, setMovies] = useState<Array<Movie>>([])
  useEffect(() => {
    getMovieList().then((res) => setMovies(res))
  }, [])

  return (
    <MovieContext.Provider
      value={{
        movies,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export default MovieProvider
