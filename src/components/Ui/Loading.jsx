import React from 'react'
import { RotatingLines } from 'react-loader-spinner'


const Loading = () => {
  return (
    <div className='py-32 flex justify-center items-center'>
      <RotatingLines 
        strokeColor='#00BFFF'
        strokeWidth='5'
        animationDuration='0.75'
        width='95'
        height="550"
        visible={true}
      />
    </div>
  )
}

export default Loading