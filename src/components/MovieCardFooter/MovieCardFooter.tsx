/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

const MovieCardFooter = () => (

    <div className="flex text-2xl font-bold text-a justify-between mt-4">
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:yellow-300 peer-focus:yellow-300 dark:peer-focus:yellow-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-300" />
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Like</span>
        </label>
        <button type="button" className="text-lg lg:text-sm font-bold ">
            <img className="ml-1  rounded-2xl " src="/icons/delete.svg" alt="" />
        </button>
    </div>

);

export default MovieCardFooter;
