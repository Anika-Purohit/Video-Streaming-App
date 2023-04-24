import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex  m-1 rounded-lg'>
    <img className='w-10 p-1'    
    alt="user"
    src="https://www.seekpng.com/png/small/72-729869_circled-user-female-skin-type-4-icon-profile.png"
    />
    <span className='text-stone-500 font-semibold m-2 text-sm' >{name}</span>
    <span className='mt-2 text-sm'>{message}</span>
    </div>
  )
}

export default ChatMessage