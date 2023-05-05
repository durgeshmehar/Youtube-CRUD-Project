import Video from "./Video";
import PropTypes from "prop-types";

function Videomap({ info,deleteVideo,editVideo }) {

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
          deleteVideo={deleteVideo}
          editVideo={editVideo}
        />
      ))}
    </>
  );
}
Videomap.propTypes = {
  info: PropTypes.array.isRequired,
  deleteVideo: PropTypes.func,
  editVideo: PropTypes.func,
};

export default Videomap;
