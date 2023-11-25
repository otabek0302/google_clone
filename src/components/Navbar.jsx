import React from 'react'
import Switch from './Ui/Switch'

const Navbar = ({dark, setDark}) => {
  return (
    <div className='px-[30px] flex justify-end items-center gap-3 dark:border-gray-700'>
        <a href="/" className='text-gray-800 dark:text-white font-normal text-sm'>Gmail</a>
        <a href="/" className='text-gray-800 dark:text-white font-normal text-sm'>Picture</a>
        <Switch dark={dark} setDark={setDark} />
        <button className='text-md text-white bg-[#1a73e8] border-none rounded px-5 py-1.5 hover:shadow-lg'>
            <a href="/">
                Sing In
            </a>
        </button>
    </div>
  )
}

export default Navbar