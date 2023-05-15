import Video from "./Video";
// import axios from "axios"
import PropTypes from "prop-types";
import moreinfo from "../data/moreinfo"
// import useVideos from '../hook/VideosHook'
import { useState, useTransition } from "react";
import useVideoDispatch from "../hook/VideoDispatchHook";

function Videomap({editVideo}) {
  //  const info =useVideos();
   const dispatch =useVideoDispatch();

  //  const URL ="https://my.api.mockaroo.com/viideo.json?key=a9fc1ba0";
  const [video ,setvideo]=useState([]);
  const [ispending , startTransition] =useTransition([]);
   
   useState(()=>{
    // async function autoLoadVideo(){
      // const res = await axios.get(URL);
     startTransition(()=>{
        // dispatch({ type:"LOAD" ,payload:moreinfo });
        
        setvideo(moreinfo);
      })
      console.log(ispending);
    //  }
    // autoLoadVideo();
   },[dispatch])
  
    // const DeferredVideo =useDeferredValue(Video);

  return (
    <>
    {console.log("videomap")}
      {video.map((item) => (
      // {info.map((item) => (
        // <DeferredVideo 
        <Video
          id={item.id}
          title={item.title}
          imgname={item.imgname}
          views={item.views}
          ago={item.ago}
          verified={item.verified}
          channelname={item.channelname}
          key={item.id}
          editVideo={editVideo}
        />
      ))}

    </>
  );
}

Videomap.propTypes = {
  editVideo: PropTypes.func,
};

export default Videomap;
