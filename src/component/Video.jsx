import "./Video.css";
import PropTypes from "prop-types";
import Playbutton from "./Playbutton";

function Video({ id,title, imgname, views, ago, verified, channelname,dispatch ,editVideo }) {
  
  return (
    <>
    
      <div className="youtube-box">
        <button className="deletebutton" onClick={ ()=>dispatch({type:"DELETE" , payload:id}) }> ❌</button>
        <button className="editbutton" onClick={ ()=>editVideo(id) }> 📝</button>
        <img
          src={`https://source.unsplash.com/300x200?${imgname}`}
          alt="youtube-video"
        />
        <div className="contain">
          <div className="icon">
            <img
              src={`https://source.unsplash.com/300x200?${imgname}`}
              alt="youtube-channel"
            />
          </div>
          <div className="text">
            <h3 className="video-name"> {title}</h3>
            <p className="block">
              {" "}
              {channelname}&nbsp;{verified ? "✅" : null}
            </p>
            <p className="block">
              {" "}
              {views} views &nbsp;•&nbsp; {ago} ago
            </p>
          </div>
          </div>
           <div className="buttondiv">

        <Playbutton
            onPlay={() => { console.log("Playing...", title ) }} 
            onPause={() =>{ console.log("Paused...", title )} } >
            {title}
       </Playbutton>
        </div>
      </div>
    </>
  );
}

Video.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imgname: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  ago: PropTypes.string.isRequired,
  channelname: PropTypes.string.isRequired,
  verified: PropTypes.bool.isRequired,
  dispatch:PropTypes.func,
  editVideo:PropTypes.func,
};

export default Video;
