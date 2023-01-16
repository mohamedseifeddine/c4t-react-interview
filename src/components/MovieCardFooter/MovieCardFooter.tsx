/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react'

import { MovieContext } from '~/context/UseMovie'

import { MovieContextType } from '~/types/Movie'

const MovieCardFooter = ({ id }: { id: number }) => {
  const { deleteMovie, likeMovie, dislikeMovie } = useContext(
    MovieContext,
  ) as MovieContextType
  const [isLiked, setLike] = useState(false)

  const toggleisLiked = () => {
    setLike((current) => !current)
    if (!isLiked) {
      likeMovie(id)
    } else {
      dislikeMovie(id)
    }
  }
  const handelClick = () => {
    deleteMovie(id)
  }
  return (
    <div className="text-a mt-4 flex justify-between text-2xl font-bold">
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          value="hhhhhhh"
          className="peer sr-only"
          onClick={toggleisLiked}
        />
        <div className="peer-focus:yellow-300 peer-focus:yellow-300 dark:peer-focus:yellow-300 peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-yellow-300 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700" />
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {!isLiked ? 'Like' : 'Dislike'}
        </span>
      </label>
      <button
        type="button"
        className="text-lg font-bold lg:text-sm "
        onClick={handelClick}
      >
        <img
          className="ml-1  rounded-2xl "
          src="/icons/delete.svg"
          alt="delete"
        />
      </button>
    </div>
  )
}
export default MovieCardFooter
