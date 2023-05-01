import "./Video.css";
import PropTypes from 'prop-types';
import Button from "./Button";

function Video({title,imgname ,views, ago,verified ,channelname} ) {

  return (
    <>
      <div className="youtube-box"  >
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
            <p className="block"> {channelname}&nbsp;{verified? '✅':null}</p>
            <p className="block"> {views} views &nbsp;•&nbsp; {ago} ago</p>
          </div>
        </div>
        <div className="buttondiv">
          <Button name="Button to play">Play</Button>
        </div>
      </div>
    </>
  );
}

Video.propTypes ={
  id : PropTypes.number.isRequired,
   title :PropTypes.string.isRequired,
   imgname :PropTypes.string.isRequired,
   views :PropTypes.string.isRequired,
   ago :PropTypes.string.isRequired,
   channelname :PropTypes.string.isRequired,
   verified :PropTypes.bool.isRequired,
}

export default Video;

