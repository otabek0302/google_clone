import React, { useState } from 'react'

import Navbar from './Navbar'
import SearchInput from './Ui/SearchInput'
import { useNavigate } from 'react-router-dom'
import { useResultsContext } from '../context/ResultContextProvider'

const Content = ({dark, setDark}) => {
    const { setSearchTerm } = useResultsContext();
    const navigate = useNavigate();
    const [text, setText] = useState("");

    const handeSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(text)
        if(text.length > 0) navigate("/search");
    }
  return (
    <div>
        <Navbar dark={dark} setDark={setDark} />
        <div className='h-[83vh]'>
            <div className='h-[250px] flex justify-center items-center'>
                <a href="/" className='cursor-pointer'> <img src="./images/google.svg" alt="Google" className='h-[350px]' /></a>
            </div>
            <div>
                <div className='my-[10px] flex justify-center items-center'>
                    <SearchInput text={text} setText={setText} handeSubmit={handeSubmit}  />
                </div>
                <div className='my-[10px] flex justify-center items-center gap-[10px] pt-4'>
                    <button className='mx-1 my-1.5 px-[16px] py-2 text-sm rounded bg-gray-100 dark:bg-gray-500 dark:text-gray-200 dark:hover:text-gray-900' onClick={handeSubmit}>Search on Google</button>
                    <button className='mx-1 my-1.5 px-[16px] py-2 text-sm rounded bg-gray-100 dark:bg-gray-500 dark:text-gray-200 dark:hover:text-gray-900'>I'm lucky</button>
                </div>
                <p className='text-gray-800 dark:text-gray-200 text-sm font-normal text-center'>Google services are available in these languages: <a href="/" className='text-[#1a73e8] ml-2 hover:underline'>Uzbek</a></p>
            </div>
        </div>
    </div>
  )
}

export default Content