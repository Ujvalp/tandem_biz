import React from 'react'
import ReactLoading from 'react-loading';

const Loading = (props) => {
  return (
    <div className={`fixed z-50 w-[calc(100%-15rem)] min-h-screen h-full bg-gray-100/50 flex justify-center items-center ${props.class}`}>
        <ReactLoading type={"spin"} color={"blue"} />
    </div>
  )
}

export default Loading