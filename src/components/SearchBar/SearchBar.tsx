const SearchBar = () => (
    <form>

        <div className="flex">
            <div className="h-10 flex-shrink-0 z-10 inline-flex items-center py-2.5  text-sm font-medium text-center text-gray-900">
                <select className="w-full  border-gray-300  border border-gray-300 text-gray-500 bg-white  rounded-md shadow-sm outline-none appearance-none">
                    <option>All Categories</option>
                    <option>Comedy</option>
                    <option>Horror</option>
                    <option>Action</option>
                    <option>Drama</option>
                </select>

            </div>
            <div className="relative w-full">
                <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:yellow-300 focus:border-gray-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-yellow-300" placeholder="Search Movies..." required />
                <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-yellow-300 rounded-r-lg border border-yellow-300 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-gray-500 dark:bg-yellow-300 00 dark:hover:yellow-300 dark:focus:yellow-300">
                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <span className="sr-only">Search</span>
                </button>
            </div>
        </div>
    </form>
)

export default SearchBar

