import React,{ useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentSection from './CommentContainer';
import LiveChat from './LiveChat';
import WatchPageVideos from './WatchPageVideos';

const WatchPage = () => {
  
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(closeMenu());
  },[]);
    return (
          <div className="flex flex-col w-full">
           <div className=' flex'>
            <div className='p-3 ml-3 pr-1 '>
            <iframe
              width="1050"
              height="600"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            </div>
            <div className='w-full pt-3'>
            <LiveChat />
            </div>
            </div>
            <div className='flex'>
            <CommentSection/>
            <WatchPageVideos/>
            </div>
          </div>
          
        );
};

export default WatchPage;