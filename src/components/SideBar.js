import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen );
  if(!isMenuOpen) return null;  //EARLY RETURN
  return (
    <div className='p-2 w-48 shadow-lg'>
    <h1 className='mt-2 font-bold'>Topic</h1>
    <ul>
      <li>Movies</li> 
      <li>Movies</li> 
      <li>Movies</li> 
      <li>Movies</li> 
    </ul>
    <h1 className='mt-2 font-bold'>Topic</h1>
    <ul>
      <li>Movies</li> 
      <li>Movies</li> 
      <li>Movies</li> 
      <li>Movies</li> 
    </ul>
    <h1 className='mt-2 font-bold'>Topic</h1>
    <ul>
      <li>Movies</li> 
      <li>Movies</li> 
      <li>Movies</li> 
      <li>Movies</li> 
    </ul>
    </div>
    
    
  )
}

export default SideBar