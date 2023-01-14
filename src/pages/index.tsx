import Pagination from '~/components/Pagination'
import SearchBar from '~/components/SearchBar'

import MovieList from '../components/MoviList'

const Home = () => (
  <div className="min-h-screen bg-gray-100 py-6 flex flex-row flex-wrap justify-center sm:py-8">
    <SearchBar />
    <MovieList />
    <Pagination />
  </div>
)

export default Home
