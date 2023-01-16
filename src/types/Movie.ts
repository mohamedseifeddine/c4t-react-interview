export enum MovieCategory {
  Animation = 'Animation',
  Comedy = 'Comedy',
  Drama = 'Drama',
  Thriller = 'Thriller',
}

export interface Movie {
  id: number
  title: string
  category: MovieCategory
  poster: string
  likes: number
  dislikes: number
}

export interface MovieContextType {
  movies: Array<Movie>
  likeMovie: (id: number) => void
  dislikeMovie: (id: number) => void
  deleteMovie: (id: number) => void
}
