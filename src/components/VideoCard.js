import React from 'react'

const VideoCard = ({info}) => { 
 console.log(info);  
  const {snippet,statistics} = info;  
  const {channelTitle,title,thumbnails} = snippet;  
 
  return (  
  <div className=' w-96  h-[365px] rounded-lg'> 
   <img class="rounded-lg  " alt="thumbnail" src= {thumbnails.maxres.url}/>
  <ul>
    <li className='p-1 font-bold'>{title}</li>
    <li className='px-1 text-slate-600'>{channelTitle}</li>
    <li className='px-1 text-slate-600'>{statistics.viewCount} views</li>
  </ul>
  </div> 
  );
};

export default VideoCard;