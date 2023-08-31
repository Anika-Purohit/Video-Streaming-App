import React,{useEffect, useState} from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch , useSelector} from 'react-redux';
import { JSON_SEARCH_API } from '../utils/config';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

 const[searchQuery,setSearchQuery] = useState("");
 const[suggestions,setSuggestions] = useState([]);
 const[showSuggestions,setShowSuggestions] = useState("");
 const searchCache = useSelector((store) => store.search);
 const dispatch=useDispatch() ;

useEffect(()=>{
const timer = setTimeout(() => {
if(searchCache[searchQuery]){
  setSuggestions(searchCache[searchQuery]);
}else{
  getSearchSuggestions();
} },200); {/*make a api search only at interval of 200ms */}

return ()=>{
clearTimeout(timer);
};
},[searchQuery]);

const getSearchSuggestions = async() =>{
  const data = await fetch(JSON_SEARCH_API+searchQuery);
  const json = await data.json();
  console.log(json);
  setSuggestions(json[1]);
  dispatch(
  cacheResults(
  { [searchQuery]:json[1], }  
  )); // start here pick up
};
 

 const toggleMenuHandler =()=>{
 dispatch(toggleMenu());
 };
console.log(searchQuery);
return (
    <div className="grid grid-flow-col bg-white  sticky top-0">
    <div className="col-span-1 flex"> 
    <img onClick={()=>toggleMenuHandler()} 
    className="w-10   m-auto ml-7 " alt ="menu" 
    src="data:image/png;base64,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"/>
    <img className="w-32 h-14 mx-1 py-3"alt ="menu" src="https://www.svgrepo.com/show/308977/youtube-play-button-play-video-youtube-logo.svg"/>
    </div> 
    <div className="col-span-10 my-3   ">
    <input className=" p-3 px-5 h-9 ml-32 w-1/2  border border-gray-300 rounded-l-full " type="text"
    value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}
    onFocus={()=>setShowSuggestions(true)}
    onBlur={()=>setShowSuggestions(false)}
    /> 
    <button className="bg-gray-100 h-9 fixed border border-gray-300  w-16 rounded-r-full "><img className='w-10 ml-2'
    src="https://w7.pngwing.com/pngs/198/609/png-transparent-computer-icons-symbol-search-box-magnifying-glass-search-miscellaneous-black-zooming-user-interface.png"
    /></button>
    <div className='flex fixed bg-white  ml-32  '>
      <ul className='w-72 '>
      { showSuggestions && suggestions.map((s)=>(
         <li key={s} className='hover:bg-slate-100 rounded-lg shadow-sm border border-slate-50 px-5 py-1'>
          {s}
        </li>
      )
      )
      }
    </ul>
    </div>
    </div>
    
    <img className="w-8 my-auto col-span-1"alt ="menu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wrKjpbjvQzLHlQfvKO8gsopOJBvbCEXe1A&usqp=CAU" /> 
    </div>
  )
}

export default Head