import Video from "./Video";
import PropTypes from "prop-types";
import useVideos from '../hook/VideosHook'

function Videomap({editVideo }) {
   const info =useVideos();
   
  return (
    <>
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
