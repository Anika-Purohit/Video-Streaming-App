import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex border-2 border-slate-200 m-1 rounded-lg'>
    <img className='w-12 p-1'    
    alt="user"
    src="https://www.seekpng.com/png/small/72-729869_circled-user-female-skin-type-4-icon-profile.png"
    />
    <span className='font-bold m-2'>{name}</span>
    <span className='mt-2'>{message}</span>
    </div>
  )
}

export default ChatMessage