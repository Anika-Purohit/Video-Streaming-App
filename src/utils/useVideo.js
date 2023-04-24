import { useEffect, useState } from "react"
import { YOUTUBE_API_KEY } from "./config";

const useVideo = ()=>{
const[videos,setVideos] = useState([]);  

useEffect(()=>{
GetVideoFromAPI();
},[]);

async function GetVideoFromAPI(){
const data = await fetch(YOUTUBE_API_KEY)  ;
const json = await data.json();
console.log(json.items);
setVideos(json.items);
}

return videos;
};
export default useVideo;