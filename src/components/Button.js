import React from 'react'

const Button = ({name}) => {
  return (
  
  <button className='bg-stone-100 text-stone-600 shadow-md hover:scale-110 rounded-lg font-normal m-2 py-1 px-2 inline-block'>{name}</button>  
   
  )
}

export default Button