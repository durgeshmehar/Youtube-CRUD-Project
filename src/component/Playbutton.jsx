import './Playbutton.css'
import { useState } from "react";
import PropTypes from 'prop-types';

function Playbutton({onPlay ,onPause ,children}){
    const [playing ,setplaying]=useState(false);

    function handleEvent(e){
        e.stopPropagation();
       if(!playing) onPlay(); 
       else onPause();
       setplaying(playing=>!playing);
    }
    return(
        <>
        <button onClick={handleEvent}>{children}&nbsp;{playing?'⏸️':'▶️' } </button>
        </>
        
    )
}

Playbutton.propTypes ={
    onPlay : PropTypes.func,
    onPause : PropTypes.func,
    children :PropTypes.string,
}

export default Playbutton;