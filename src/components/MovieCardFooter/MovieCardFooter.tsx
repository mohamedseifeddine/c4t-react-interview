/* eslint-disable jsx-a11y/label-has-associated-control */
import Image from 'next/image'
import React from 'react'

const MovieCardFooter = () => (
  <div className="text-a mt-4 flex justify-between text-2xl font-bold">
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        value=""
        className="peer sr-only"
      />
      <div className="peer-focus:yellow-300 peer-focus:yellow-300 dark:peer-focus:yellow-300 peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-yellow-300 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700" />
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        Like
      </span>
    </label>
    <button
      type="button"
      className="text-lg font-bold lg:text-sm "
    >
      <Image
        width={20}
        height={40}
        className="ml-1  rounded-2xl "
        src="/icons/delete.svg"
        alt=""
      />
    </button>
  </div>
)

export default MovieCardFooter
