import "./App.css";
import infoDB from "./data/info";
import Addvideo from "./component/Addvideo"
import Videomap from "./component/Videomap"
import { useState,useReducer } from 'react';

function App() {
      
        const [editableVideo ,seteditableVideo] =useState({title:"",views:"",id:""}) ;
        const [info ,dispatch] =useReducer(infoReducer ,infoDB) ;


        function infoReducer(info ,action){
          const newV =[...info];
          let index=0;
          switch(action.type){
            case "ADD":
              return [...info ,{...action.payload,"id":(info.length <3)?info.length+4:info.length+1 }]
              case "DELETE":
              return info.filter((item)=>item.id!==action.payload);
            case "UPDATE":
              index =info.findIndex((item)=>item.id===action.payload.id);
              newV.splice(index,1,action.payload);
              seteditableVideo({title:"",views:"",id:""});
              return newV;
            default :
            return info;
          }
        }
        
        function editVideo(id){  
          seteditableVideo(info.find((item)=>item.id===id))
        }


  return (
    <div className="app-body" >
      
      <Addvideo  dispatch={dispatch} editableVideo={editableVideo}  />
      <Videomap info={info} dispatch={dispatch} editVideo={editVideo} />    
    </div>
  );
}

export default App;
