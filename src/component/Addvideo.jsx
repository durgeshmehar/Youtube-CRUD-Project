import './Addvideo.css'
import PropTypes from "prop-types";
import {  useState } from 'react';


function Addvideo({ addnextvideo ,updateVideo, editableVideo }){

    const imgArr =["c++","databases","webdevelopment","computer","mobile","programming","developer"];
    const index= Math.floor(Math.random() * imgArr.length);

    let initialstate ={
        title:"",
        views: "",
        imgname: imgArr[index],
        ago: "1 months",
        verified: true,
        channelname: "Code help",
    };
     
    const [newvideo ,setnewvideo] =useState(initialstate);
    const [editvideo, seteditvideo] =useState({title:"",views:"",id:""});

    function handlesubmit(e){
      e.preventDefault();
       if(editableVideo.id!==""){
        updateVideo(newvideo);}
       else if(newvideo.title!=="" && newvideo.views!==""){
        addnextvideo(newvideo);}
       else{ alert("Dont leave any box empty!")}
     setnewvideo(initialstate);
    }

    if( editableVideo.id !== editvideo.id ){
      setnewvideo(editableVideo)
      seteditvideo(editableVideo)
    }

    function handlechange(e){
      setnewvideo({...newvideo ,[e.target.name]: e.target.value });
    }

    return(
        <>
    <form >
    <input type="text" value={newvideo.title} name="title" onChange ={handlechange} placeholder="Enter title" />
    <input type="text" value={newvideo.views} name="views" onChange={handlechange}  placeholder="Enter views" />

    <div className="click">
       <button onClick={handlesubmit}> {editableVideo.id!==""?'Edit Video':'Add Video'} </button>
    </div>
   </form>
        
        </>
    )
}

Addvideo.propTypes ={
    addnextvideo : PropTypes.func.isRequired,
    editableVideo: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
      ]),
    updateVideo :PropTypes.func,
}

export default Addvideo