import Image from 'next/image'
import React from 'react'

import { Movie } from '~/types/Movie'

import MovieCardFooter from '../MovieCardFooter'

const MovieCard = ({ movie }: { movie: Movie }) => {
  const { title, category, poster, likes, dislikes } = movie
  return (
    <div className="h-80 w-4/12 py-2 sm:mx-auto sm:max-w-xl">
      <div className="ml-2 flex  space-x-8 border border-gray-100 bg-white p-3 shadow-lg sm:rounded-3xl">
        <div className="h-60 w-5/12 overflow-visible">
          <Image
            width={100}
            height={70}
            className="h-40 w-40 rounded-2xl shadow-lg"
            src={poster}
            alt={title}
          />
          <div className="mt-3 ml-1 flex flex-row rounded-2xl text-lg text-gray-800 ">
            <div className="flex  flex-row">
              <p className="text-1xl text-black-400 mt-1">{likes}</p>
              <Image
                width={20}
                height={20}
                className="ml-1  rounded-2xl "
                src="/icons/like.svg"
                alt={title}
              />
            </div>
            <div className="flex flex-row">
              <p className="text-1xl text-black-400 ml-8 mt-1">{dislikes}</p>
              <Image
                width={20}
                height={18}
                className="ml-1 mt-1.5 rounded-2xl"
                src="/icons/dislike.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex w-7/12 flex-col ">
          <div className="flex h-40 flex-col items-start justify-between space-y-6">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="center w-40 rounded-2xl bg-yellow-300 p-2 text-center">
              {category}
            </p>
          </div>
          <MovieCardFooter />
        </div>
      </div>
    </div>
  )
}

export default MovieCard
