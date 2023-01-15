import MovieProvider from '~/context/UseMovie'

import MovieList from '~/components/MoviList'
import Pagination from '~/components/Pagination'
import SearchBar from '~/components/SearchBar'

const Home = () => (
  <MovieProvider>
    <div className="flex min-h-screen  flex-col space-y-4 bg-gray-100 p-10">
      <SearchBar />
      <MovieList />
      <Pagination />
    </div>
  </MovieProvider>
)

export default Home
