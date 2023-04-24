import React from 'react'
import useVideo from '../utils/useVideo'
import VideoCardWP from './VideoCardWP';
import { Link } from 'react-router-dom';

const WatchPageVideos = () => {
  const watchPageVideo = useVideo();   
  return (
    <div className='ml-6 mt-4 w-[390px]'>
    {
    watchPageVideo.map((v)=>(
    <Link to={"/watch?v="+v.id} key={v.id}>  
    <VideoCardWP info={v}/>  
    </Link>  
    ))    
    }
    </div>
  )
}

export default WatchPageVideos