/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import ReactPlayer from 'react-player';

import { useResultsContext } from '../context/ResultContextProvider';
import Loading from './Ui/Loading';

const Results = ({ location }) => {

    const { getResults, results, loading, searchTerm } = useResultsContext();

    useEffect(() => {
        if (searchTerm !== "") {
            getResults(`${location}`)
        }
    }, [searchTerm, location])
    // don't push getResults in hooks 

    if (loading) return <Loading />

    switch (location) {
        case "search":
            return (
                <div className="w-[1024px] mx-auto overflow-hidden py-2 block h-full">
                    {results.organic?.map(({ link, title, snippet }, index) => (
                        <div key={index} className=' max-w-[700px]'>
                            <a href={link} target="_blank" rel="noreferrer"><h3 className='inline-block text-xl mt-[12px] hover:underline text-[#1a0dab] dark:text-gray-50'>{title}</h3></a>
                            <a href={link} target="_blank" rel="noreferrer"><span className='inline-block w-full text-[12px] relative top-[-4px] dark:text-[#1a73e8]'>{link}</span></a>
                            <a href={link} target="_blank" rel="noreferrer"><p className='inline-block w-full text-[15px] text-[#4d5156] dark:text-gray-400'>{snippet}</p></a>
                        </div>
                    ))}
                </div>
            )
        case "images":
            return (
                <div className="flex flex-wrap gap-2 justify-between">
                    {results?.images?.map(({ title, imageUrl, source, link, position }) => (
                        <div className="p-1" key={position}>
                            <div className='w-[300px] h-[250px] rounded-lg overflow-hidden'>
                                <img alt="gallery" className="h-full w-full object-cover object-center" src={imageUrl} />
                            </div>
                            <div className='px-1'>
                                <a href={link} target="_blank" rel="noreferrer"><span className='inline-block w-full text-[14px] hover:underline'>{source.length > 20 ? source.slice(0, 15) : source}...</span></a>
                                <a href={link} target="_blank" rel="noreferrer"><p className='inline-block text-[16px] text-[#4d5156] dark:text-gray-400'>{title.length > 30 ? title.slice(0, 20) : title}</p></a>
                            </div>
                        </div>
                    ))}
                </div>
            );
        case "videos":
            return (
                <div className="w-[1024px] mx-auto overflow-hidden py-2 block h-full">
                    {results?.videos?.map(({ title, link, snippet, date }, index) => (
                        <div key={index} className="p-2 my-2">
                            <div className='inline-block'>
                                <a href={link} target="_blank" rel="noreferrer"><p className='text-black text-[14px] font-normal dark:text-gray-400'>{link}<span className='text-[#5f6368]'>› watch</span> - <span className='text-[#1a0dab] dark:text-[#1a73e8]'>Go to website</span></p></a>
                                <a href={link} target="_blank" rel="noreferrer"><h3 className='text-[#1a0dab] text-[20px] font-normal mb-1 dark:text-gray-50'>{title}</h3></a>
                            </div>
                            <div className='flex flex-wrap'>
                                <div className='rounded-md overflow-hidden mr-4'>
                                    <ReactPlayer url={link} controls width="168px" height="87px" />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-[#5f6368] text-[14px] font-normal dark:text-gray-400'>{snippet.length > 50 ? snippet.slice(0, 150) : snippet}...</p>
                                    <p className='text-[#5f6368] mt-2 dark:text-gray-400'>{date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        case "news":
            return (
                <div className="w-[1024px] mx-auto overflow-hidden py-2 block h-full">
                    {results?.news?.map(({ title, link, snippet, date, source, imageUrl }, index) => (
                        <div key={index} className="p-2 my-2 border-b">
                            <div className='inline-block'>
                                <a href={link} target="_blank" rel="noreferrer"><p className='text-black text-[14px] font-normal dark:text-[#1a73e8]'>{source}</p></a>
                            </div>
                            <div className='flex flex-wrap'>
                                <div className='flex-1'>
                                    <a href={link} target="_blank" rel="noreferrer"><h3 className='text-[#1a0dab] text-[20px] font-normal mb-1 dark:text-gray-50'>{title}</h3></a>
                                    <p className='text-[#5f6368] text-[14px] font-normal dark:text-gray-400'>{snippet.length > 50 ? snippet.slice(0, 150) : snippet}...</p>
                                    <p className='text-[#5f6368] mt-2 dark:text-gray-400'>{date}</p>
                                </div>
                                <div className='rounded-md overflow-hidden mr-4'>
                                    <img src={imageUrl} alt="" width="92px" height="92px" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );

        default:
            return "ERROR"
    }
}

export default Results