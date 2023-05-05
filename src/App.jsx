import "./App.css";
import infoDB from "./data/info";
import Addvideo from "./component/Addvideo"
import Videomap from "./component/Videomap"
import { useState} from 'react';

function App() {

        const [info ,setinfoDB] =useState(infoDB) ;
        const [editableVideo ,seteditableVideo] =useState({title:"",views:"",id:""}) ;
        function addnextvideo(video){  
          setinfoDB([...info ,{...video,"id":info.length+1 }]);  
          console.log(info)
        }
        function deleteVideo(id){  
            setinfoDB(info.filter((item)=>item.id!==id));  
        }
        function editVideo(id){  
            seteditableVideo(info.find((item)=>item.id===id))
        }
        function updateVideo(newvideo){
          const newV =[...info];
          const index =info.findIndex((item)=>item.id===newvideo.id);
          newV.splice(index,1,newvideo);
          setinfoDB(newV);
          seteditableVideo({title:"",views:"",id:""});
        }

  return (
    <div className="app-body" >
      
      <Addvideo  addnextvideo={addnextvideo} editableVideo={editableVideo} updateVideo={updateVideo} />
      <Videomap info={info} deleteVideo={deleteVideo} editVideo={editVideo} />    
    </div>
  );
}

export default App;
