import React from 'react'

const SearchInput = ({ handeSubmit, text, setText }) => {
    return (
        <form onSubmit={handeSubmit}>
            <div className='block mx-auto border rounded-full shadow-sm outline-none p-1 px-4 hover:shadow-lg'>
                <div className='w-full flex item-center justify-normal'>
                    <img src="./images/search.svg" alt="Search" />
                    <input
                        value={text}
                        type="text"
                        className='w-[582px] h-[46px] text-black mx-1 focus:border-none focus:outline-none dark:bg-transparent dark:peer-valid:text-gray-400 dark:text-gray-100'
                        placeholder='Search Google or type URL'
                        onChange={(e) => setText(e.target.value)}
                    />
                    {
                        text !== "" && (
                            <button type='button' className='px-2 border-r-[1.5px]' onClick={() => setText("")} >
                                <img src="./images/clean.svg" alt="Clean" />
                            </button>
                        )
                    }
                    <button className='mx-2'>
                        <img src="./images/keyboard.svg" alt="Keyboard" />
                    </button>
                    <button className='mx-2'>
                        <img src="./images/photo.svg" alt="Keyboard" />
                    </button>
                </div>
            </div>
        </form>
    )
}

export default SearchInput