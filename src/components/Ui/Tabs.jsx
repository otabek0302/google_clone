import React from 'react'

const Tabs = ({ handleChange }) => {
    return (
        <div className="flex space-x-4 mt-4">
            <button className="text-gray-700 dark:text-gray-100 font-semibold px-2 py-1 focus:outline-none transition duration-200 border-b-2 border-transparent hover:border-blue-500 focus:border-blue-500" onClick={() => handleChange("search")} >
                🔎 All
            </button>
            <button className="text-gray-700 dark:text-gray-100 font-semibold px-2 py-1 focus:outline-none transition duration-200 border-b-2 border-transparent hover:border-blue-500 focus:border-blue-500" onClick={() => handleChange("images")} >
                📸 Pictures
            </button>
            <button className="text-gray-700 dark:text-gray-100 font-semibold px-2 py-1 focus:outline-none transition duration-200 border-b-2 border-transparent hover:border-blue-500 focus:border-blue-500" onClick={() => handleChange("videos")} >
                📺 Videos
            </button>
            <button className="text-gray-700 dark:text-gray-100 font-semibold px-2 py-1 focus:outline-none transition duration-200 border-b-2 border-transparent hover:border-blue-500 focus:border-blue-500" onClick={() => handleChange("news")} >
                📰 News
            </button>
        </div>
    )
}

export default Tabs