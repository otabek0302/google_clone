import React from 'react'

const Switch = ({ dark, setDark }) => {
    const handleToggle = () => {
        setDark(!dark);
    }
    return (
        <button className={`w-16 h-5 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow-lg theme-${dark ? 'dark' : 'light'}`} onClick={handleToggle}>
            <div className={`w-8 h-8 relative rounded-full  transition duration-500 transform ${dark ? 'bg-gray-700 translate-x-full' : 'bg-yellow-500 translate-x'} p-1 text-white`}>
                {dark ? <img src='./images/moon.svg' alt="Dark" /> : <img src='./images/sun.svg' alt="Dark" />}
            </div>
        </button>
    )
}

export default Switch