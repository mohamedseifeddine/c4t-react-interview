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

  const deleteMovie = (id: number) => {
    const filtredMovies = movies.filter((movie: Movie) => movie.id !== id)
    setMovies(filtredMovies)
  }
  const likeMovie = (id: number) => {
    const targetMovies = movies.map((movie: Movie) => {
      if (movie.id === id) {
        return {
          ...movie,
          likes: movie.likes + 1,
          dislikes: movie.dislikes !== 0 ? movie.dislikes - 1 : 0,
        }
      }
      return movie
    })
    setMovies(targetMovies)
  }
  const dislikeMovie = (id: number) => {
    const targetMovies = movies.map((movie: Movie) => {
      if (movie.id === id) {
        return {
          ...movie,
          likes: movie.likes !== 0 ? movie.likes - 1 : 0,
          dislikes: movie.dislikes + 1,
        }
      }
      return movie
    })
    setMovies(targetMovies)
  }
  return (
    <MovieContext.Provider
      value={{
        movies,
        deleteMovie,
        likeMovie,
        dislikeMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export default MovieProvider
