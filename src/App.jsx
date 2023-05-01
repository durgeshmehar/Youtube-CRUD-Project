import "./App.css";
import Video from "./component/Video";
import info from "./data/info";
import PropTypes from "prop-types";
import { useCallback } from "react";

function App() {
 
  return (
    <div className="app-body">
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
        <GrandParent />
      </div>
    </div>
  );
}
const GrandParent = () => {
  const handleClick = useCallback(() => {
    console.log('GrandParent');
  }, []);

  return (
    <div onClick={handleClick} style={{margin:"10px",}}>
      <h2 style={{margin:"10px",}}>GrandParent</h2>
      <Parent onForce={handleClick}/>
    </div>
  );
};

const Parent = ({onForce}) => {
  function handleClick(e){
    e.stopPropagation();
    onForce();
    console.log('Parent');

  }
  return (
    <div onClick={handleClick}>
      <h3 style={{margin:"20px",}}>Parent</h3>
      <Child onForce={handleClick} />
    </div>
  );
};

const Child = ({onForce}) => {
  function handleClick(e){
    e.stopPropagation();
    onForce(e);
    console.log('Child');
  }
  return (
    <div onClick={handleClick}>
      <h4 style={{margin:"20px",}}>Child</h4>
    </div>
  );
};


Child.propTypes = {
  onForce: PropTypes.string,
};
Parent.propTypes = {
  onForce: PropTypes.string,
};
GrandParent.propTypes ={
  onForce  :PropTypes.string,
}



export default App;
