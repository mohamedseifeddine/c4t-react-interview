import { rest } from 'msw'

import { Movie, MovieCategory } from '~/types/Movie'

const movies = [
  {
    id: 1,
    title: 'Oceans 8',
    category: MovieCategory.Comedy,
    poster: '/images/1.jpg',
    likes: 4,
    dislikes: 1,
  },
  {
    id: 2,
    title: 'Midnight Sun',
    category: MovieCategory.Comedy,
    poster: '/images/2.jpg',
    likes: 2,
    dislikes: 0,
  },
  {
    id: 3,
    title: 'Les indestructibles 2',
    category: MovieCategory.Animation,
    poster: '/images/3.jpg',
    likes: 3,
    dislikes: 1,
  },
  {
    id: 4,
    title: 'Sans un bruit',
    category: MovieCategory.Thriller,
    poster: '/images/4.jpg',
    likes: 6,
    dislikes: 6,
  },
  {
    id: 5,
    title: 'Creed II',
    category: MovieCategory.Drama,
    poster: '/images/5.jpg',
    likes: 16,
    dislikes: 2,
  },
  {
    id: 6,
    title: 'Gone Girl',
    category: MovieCategory.Thriller,
    poster: '/images/6.jpg',
    likes: 22,
    dislikes: 12,
  },
  {
    id: 7,
    title: 'Pulp Fiction',
    category: MovieCategory.Thriller,
    poster: '/images/7.jpg',
    likes: 11,
    dislikes: 3,
  },
  {
    id: 8,
    title: 'Seven',
    category: MovieCategory.Thriller,
    poster: '/images/8.jpg',
    likes: 2,
    dislikes: 1,
  },
  {
    id: 9,
    title: 'Inception',
    category: MovieCategory.Thriller,
    poster: '/images/9.jpg',
    likes: 2,
    dislikes: 1,
  },
]

const handlers = [
  rest.get('/movies', (_req, res, ctx) =>
    res(ctx.delay(800), ctx.json<Movie[]>(movies)),
  ),
  rest.delete('/movies/:id', (req, res, ctx) => {
    const id = req.url.searchParams.get('id')
    const filtredMovies = movies.filter(
      (movie: Movie) => movie.id !== Number(id),
    )
    return res(
      ctx.json({
        filtredMovies,
      }),
    )
  }),
]

export default handlers
