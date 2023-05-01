import "./App.css";
import Video from "./component/Video";
import infoDB from "./data/info";
import { useState } from 'react';

function App() {
  const [info ,setinfoDB] =useState(infoDB) ;
  function addvideo(){
     setinfoDB([...info ,{
      id: info.length+1,
      title: "Node js Lecture",
      imgname: "lcd",
      views: "10k",
      ago: "1 months",
      verified: true,
      channelname: "Code help",
    },]);
  }
  return (
    <div className="app-body">
      {console.log("render App")}
      {info.map((item) => (
        <Video
          id={item.id}
          title={item.title}
          imgname={item.imgname}
          views={item.views}
          ago={item.ago}
          verified={item.verified}
          channelname={item.channelname}
          key={item.id}
        />
      ))}
      <div className="click">
       <button onClick={addvideo}>Add</button>
      </div>
    </div>
  );
}

export default App;
