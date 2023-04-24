import React from 'react'
import Button from './Button'
import { MdChevronLeft,MdChevronRight } from "react-icons/md"

const ButtonList = () => {
  const buttonlist= ["All","Games","Mixes","Taylor Swift","Under 10 min","Comedy","Movies","Film Criticism","News","Musicals","Trending",
  "T-Series","Drama","Action","Theater","Cinema","Reality Shows","Serials","Motivation","Dance-pop","Laptops","Technology","Robots","Tailwindcss","Tutorials",
"Python","Java","Jest","Random Things","Weekend","Era's tour","Billboard","Top 50"]
  const slideLeft=()=>{
  var slider = document.getElementById('slider')  
  slider.scrollLeft = slider.scrollLeft - 700
  };
  const slideRight=()=>{
  var slider = document.getElementById('slider')  
  slider.scrollLeft = slider.scrollLeft + 700
  };
  
  return (
    <div className='grid grid-flow-col'>
    <MdChevronLeft className='hover:scale-150 my-auto opacity-50' onClick={slideLeft} size={30}/>
   <div id="slider" className=' m-3 h-18 overflow-x-scroll scroll whitespace-nowrap scroll smooth scrollbar-hide '>
   {buttonlist.map((b) => (
   <Button name={b}/>
   ))}
   </div>
   <MdChevronRight className='my-auto opacity-50 hover:scale-150' onClick={slideRight} size={30}/>
   </div>
  )
}

export default ButtonList