import Video from "./Video";
import PropTypes from "prop-types";

function Videomap({ info,dispatch,editVideo }) {

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
          dispatch={dispatch}
        />
      ))}
    </>
  );
}
Videomap.propTypes = {
  info: PropTypes.array.isRequired,
  dispatch: PropTypes.func,
  editVideo: PropTypes.func,
};

export default Videomap;
