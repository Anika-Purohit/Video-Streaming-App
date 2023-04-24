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
    <img className="w-32 mx-1 py-3"alt ="menu" src="data:image/png;base64,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"/>
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