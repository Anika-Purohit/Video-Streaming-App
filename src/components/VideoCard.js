import React from 'react'

const VideoCard = ({info}) => { 
 console.log(info);  
  const {snippet,statistics} = info;  
  const {channelTitle,title,thumbnails} = snippet;  
 
  return (  
  <div className='w-64 m-2 border border-slate-200'> 
   <img alt="thumbnail" src= {thumbnails.medium}/ >
  <ul>
    <li className='p-1'>{title}</li>
    <li className='p-1'>{channelTitle}</li>
    <li className='p-1'>Views : {statistics.viewCount}</li>
  </ul>
  </div> 
  );
}

export default VideoCard