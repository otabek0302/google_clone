import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='bg-[#f2f2f2] dark:bg-transparent'>
            <div className='flex justify-start items-center border-b border-gray-300'>
                <h3 className='text-[14px] px-[30px] py-[15px] dark:text-gray-200'>Uzbekistan</h3>
            </div>
            <div className='flex justify-between items-center px-[15px]'>
                <h3 className='text-[14px] text-gray-800 dark:text-gray-400 p-[15px]'>All about Google</h3>
                <h3 className='text-[14px] text-gray-800 dark:text-gray-400 p-[15px]'>Advertisement</h3>
                <h3 className='text-[14px] text-gray-800 dark:text-gray-400 p-[15px]'>For Business</h3>
                <h3 className='text-[14px] text-gray-800 dark:text-gray-400 p-[15px]'>How Google Search works</h3>
            </div>
            <div className='flex justify-evenly items-center flex-wrap'>
                <h3 className='text-[14px] text-gray-800 dark:text-gray-400 p-[15px]'>Confidential</h3>
                <h3 className='text-[14px] text-gray-800 dark:text-gray-400 p-[15px]'>Terms & Conditions</h3>
                <h3 className='text-[14px] text-gray-800 dark:text-gray-400 p-[15px]'>Settings</h3>
            </div>
        </div>
    </div>
  )
}

export default Footer