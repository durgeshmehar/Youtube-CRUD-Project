import './Inputvideo.css'
import PropTypes from "prop-types";
import { useContext, useState ,useLayoutEffect ,useRef, useEffect, forwardRef} from 'react';
import ThemeContext from '../context/ThemeContext';
import useVideoDispatch from '../hook/VideoDispatchHook'
import { useImperativeHandle } from 'react';


const Inputvideo = forwardRef(function Inputvideo({ editableVideo } ,ref) {

  const imgArr = ["c++", "databases", "webdevelopment", "computer", "mobile", "programming", "developer"];
  const index = Math.floor(Math.random() * imgArr.length);

  let initialstate = {
    title: "",
    views: "",
    imgname: imgArr[index],
    ago: "1 months",
    verified: true,
    channelname: "Code help",
    id: "",
  };
  // const inputRef =useRef(null)

  const dispatch = useVideoDispatch();

  const [newvideo, setnewvideo] = useState(initialstate);

  function handlesubmit(e) {
    e.preventDefault();
    if (editableVideo.id !== "") {
      dispatch({ type: "UPDATE", payload: newvideo })
    }
    else if (newvideo.title !== "" && newvideo.views !== "") {
      dispatch({ type: "ADD", payload: newvideo });
    }
    else { alert("Dont leave any box empty!") }
    setnewvideo(initialstate);
  }
  useEffect(()=>{
     if (editableVideo.id) {
      setnewvideo(editableVideo)
   }
    // inputRef.current.focus();
  },[editableVideo])
  const iRef =useRef(null);

  useImperativeHandle(ref ,()=>{
    return {
      inputFocus(){
        iRef.current.focus();
      }
    }
  })
useLayoutEffect(()=>{
  const {rect} = iRef.current.getBoundingClientRect();
  console.log(rect);
 
},[])
  function handlechange(e) {
    setnewvideo({ ...newvideo, [e.target.name]: e.target.value });
  }
  const theme= useContext(ThemeContext)

  return (
    <>
      <form >
        <input type="text" ref={iRef} value={newvideo.title} name="title" onChange={handlechange} placeholder="Enter title" />
        <input type="text" value={newvideo.views} name="views" onChange={handlechange} placeholder="Enter views" />

        <div className="click">
          <button className={`${theme}`} onClick={handlesubmit}> {editableVideo.id !== "" ? 'Edit Video' : 'Add Video'} </button>
        </div>
      </form>

    </>
  )
})

Inputvideo.propTypes = {
  editableVideo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  // ref:PropTypes.ref,

}

export default Inputvideo;