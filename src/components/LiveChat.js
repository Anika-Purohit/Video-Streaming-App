import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch,useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice' 
import { generateRandomName, generateRandomString } from '../utils/randomGenerator'

const LiveChat = () => {
  const [liveMessage,setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages); 
  
   useEffect(()=>{
    const i = setInterval(()=>{
    console.log("api calling")
    dispatch(addMessage({
      name:generateRandomName(),
      message:generateRandomString(17),
    }))
    },500);
    
    return ()=>clearInterval(i);
   }, [])

  return (
    <div className='ml-5'>
     <div className=' rounded-lg w-full h-[560px] flex flex-col-reverse overflow-y-scroll '>
      {chatMessages.map((m,i)=>
      <ChatMessage key={i} name={m.name} message={m.message}/>
      )}
      </div>
    <form className='' onSubmit ={(e)=>{
    //console.log("on submit",liveMessage)  ;
    e.preventDefault();
    dispatch(
    addMessage({
      name:"ANIKA PUROHIT",
      message:liveMessage,
    })  
    )}
    }>
    <input className='rounded-lg text-slate-400 w-[390px] ml-2 mr-3  p-2 bg-stone-100' 
    type="text" 
    placeholder='Enter your message.'
    value={liveMessage} 
    onChange={ (e)=> {
    setLiveMessage(e.target.value); } }/>
    
    </form>
    </div>
  )
}

export default LiveChat