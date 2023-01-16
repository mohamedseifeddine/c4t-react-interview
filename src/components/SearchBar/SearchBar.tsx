import { useContext } from 'react'

import { MovieContext } from '~/context/UseMovie'

import { MovieContextType } from '~/types/Movie'

const SearchBar = () => {
  const { movies } = useContext(MovieContext) as MovieContextType

  const categories = movies.map((movie) => movie.category)
  const removedCategoriesDuplication = categories.filter(
    (element, index) => categories.indexOf(element) === index,
  )
  return (
    <form className="mt-2 flex justify-center">
      <div className="flex">
        <div className="z-10 inline-flex h-10 flex-shrink-0 items-center py-2.5  text-center text-sm font-medium text-gray-900">
          <select className="w-full  appearance-none  rounded-md border border-gray-300 border-gray-300  bg-white text-gray-500 shadow-sm outline-none">
            <option>All Categories</option>
            {removedCategoriesDuplication.map((category, index) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="focus:yellow-300 z-20 block w-full rounded-r-lg border border-l-2 border-gray-300 border-l-gray-50 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-500 dark:border-gray-600 dark:border-l-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-yellow-300"
            placeholder="Search Movies..."
            required
          />
          <button
            type="submit"
            className="00 dark:hover:yellow-300 dark:focus:yellow-300 absolute top-0 right-0 rounded-r-lg border border-yellow-300 bg-yellow-300 p-2.5 text-sm font-medium text-white hover:bg-yellow-300 focus:outline-none focus:ring-4 focus:ring-gray-500 dark:bg-yellow-300"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  )
}

export default SearchBar
