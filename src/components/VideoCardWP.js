import React from 'react'

const VideoCardWP = ({info}) => { 
 console.log(info);  
  const {snippet,statistics} = info;  
  const {channelTitle,title,thumbnails} = snippet;  
 
  return (  
  <div className=' flex flex-row rounded-lg mt-2'> 
   <img class="rounded-lg w-[170px] " alt="thumbnail" src= {thumbnails.medium.url}/>
  <ul>
    <li className='p-1 text-xs font-bold'>{title}</li>
    <li className='px-1 text-xs text-stone-500'>{channelTitle}</li>
    <li className='px-1 text-xs text-stone-500'>{statistics.viewCount} views</li>
  </ul>
  </div> 
  );
};

export default VideoCardWP;