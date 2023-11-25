import React, { useState } from 'react'

import SearchInput from './Ui/SearchInput'
import Switch from './Ui/Switch'
import Tabs from './Ui/Tabs'
import Results from './Results'
import Footer from './Footer'
import { useResultsContext } from '../context/ResultContextProvider'
import { useDebounce } from 'use-debounce'

const Direction = ({ dark, setDark }) => {
    const { setSearchTerm, searchTerm } = useResultsContext();


    const [location, setLocation] = useState("search") // as default
    const [text, setText] = useState(searchTerm);
    const [debuanceValue] = useDebounce(text, 1000);

    const handeSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(debuanceValue)
    }
    const handleChange = (value) => {
        setLocation(value)
    }
    return (
        <div>
            <div className='p-4'>
                <div className='flex items-center py-2'>
                    <div className='w-[150px] h-[37px] flex justify-center items-center'>
                        <a href="/" className='cursor-pointer'> <img src="./images/google.svg" alt="Google" className='w-[100px]' /></a>
                    </div>
                    <div className='pl-[27px]'>
                        <SearchInput text={text} setText={setText} handeSubmit={handeSubmit} />
                    </div>
                    <div className='flex ml-auto gap-10 items-center'>
                        <Switch dark={dark} setDark={setDark} />
                        <button className='text-md text-white bg-[#1a73e8] border-none rounded px-5 py-1.5 hover:shadow-lg'>
                            <a href="/">Sing In</a>
                        </button>
                    </div>
                </div>
                <div className='w-[1024px] mx-auto -mb-[2px]'>
                    <div className='w-full'>
                        <Tabs handleChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className='px-2 py-4 w-full block'>
                <Results location={location} />
            </div>
            <Footer />
        </div>
    )
}

export default Direction