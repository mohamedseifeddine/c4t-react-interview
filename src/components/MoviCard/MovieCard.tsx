/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import MovieCardFooter from "../MovieCardFooter";

const MovieCard = () => (

    <div className="py-3 sm:max-w-xl sm:mx-auto">
        <div className="bg-white shadow-lg border-gray-100 border sm:rounded-3xl p-8 flex space-x-8">
            <div className="h-60 overflow-visible w-5/12">
                <img className="rounded-2xl shadow-lg h-60 w-80" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg" alt="" />
                <div className="flex flex-row mt-3 ml-1 text-lg text-gray-800 rounded-2xl ">
                    <div className="flex  flex-row">
                        <p className="mt-1 text-1xl text-black-400">1000</p>
                        <img className="ml-1  rounded-2xl " src="/icons/like.svg" alt="" />
                    </div>
                    <div className="flex flex-row">
                        <p className="text-1xl ml-8 mt-1 text-black-400">400</p>
                        <img className="ml-1 mt-1.5 rounded-2xl" src="/icons/dislike.svg" alt="" />
                    </div>

                </div>
            </div>
            <div className="flex flex-col w-7/12 ">
                <div className="flex flex-col h-60 justify-between items-start space-y-6">
                    <h2 className="text-3xl font-bold">First Movie</h2>
                    <p className="rounded-2xl bg-yellow-300 center w-20 p-2 text-center">Action</p>
                    <p className=" text-gray-400 max-h-40 overflow-y-hidden">Lorem ipsum d sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <MovieCardFooter />
            </div>
        </div>
    </div>

);

export default MovieCard;
