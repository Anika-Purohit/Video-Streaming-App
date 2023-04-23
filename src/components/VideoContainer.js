import React,{ useEffect, useState } from 'react'
import { YOUTUBE_API_KEY } from '../utils/config';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const[videos, setVideos] = useState([]); 

  useEffect( () => { getVideos(); },[]);

  const getVideos=async()=>{
  const data = await fetch(YOUTUBE_API_KEY);
  const json = await data.json();
  console.log(json.items);
  setVideos(json.items);
  } ;

return(  
<div className=' grid grid-cols-3 grid-flow-row gap-4 justify-items-center'>
 
 {videos.map((video)=> (
 <Link to={"/watch?v="+video.id} key={video.id} >
  <div className=''>
  <VideoCard info={video}/>
  </div>
  </Link>)
  )} 
</div>    
);
};

export default VideoContainer;