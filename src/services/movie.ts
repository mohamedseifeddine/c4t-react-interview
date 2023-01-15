import axios from 'axios'

export const getMovieList = async () =>
  axios
    .get('/movies')
    .then((res) => res.data)
    .catch((err) => err)
