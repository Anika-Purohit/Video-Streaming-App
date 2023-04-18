import React from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux';

const Head = () => {
 const dispatch=useDispatch() ;

 const toggleMenuHandler =()=>{
 dispatch(toggleMenu());
 };
  return (
    <div className="grid grid-flow-col  shadow-lg ">
    <div className="col-span-1 flex"> 
    <img onClick={()=>toggleMenuHandler()} 
    className="w-10 h-10 my-2 " alt ="menu" 
    src="https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg"/>
    <img className="w-24 mx-7 "alt ="menu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEynCGDrFj3BQG1Aff7q4ARbWM0s7FK8jfng&usqp=CAU"/>
    </div> 
    
    <div className="col-span-10 my-3">
    <input className=" p-1 w-1/2  border border-gray-300 rounded-l-full" type="text"/> 
    <button className="bg-gray-300 border border-gray-300 p-1 w-16 rounded-r-full">Search</button>
    </div>
    <img className="w-10 my-2 "alt ="menu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wrKjpbjvQzLHlQfvKO8gsopOJBvbCEXe1A&usqp=CAU" /> 
    </div>
  )
}

export default Head