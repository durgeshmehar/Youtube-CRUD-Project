import './Button.css'
import PropTypes from 'prop-types';

function Button({name ,children}){
    function clickdone(e){
        e.preventDefault();
        alert("data submited");
    }
    // let check=true;
    function handleEvent(ev){
        // e.stopPropagation();
        // if( check) alert({children});
        // else console.log({name})
        // check=!check;
        console.log("Enter key clicked");
        if( ev.key === 'Enter'){
             console.log({name})
        }
    }
    function close(){
        window.open(' ','_black');
        window.close();
    }
    return(
        <>
        <button onKeyUp={handleEvent}>{children} </button>
        <button onClick={close}>Window Close </button>
        <form onSubmit={clickdone}>
            <input type="text" placeholder='Enter name' />
            <input type="Submit" />
        </form>
        </>
        
    )
}

Button.propTypes ={
    name : PropTypes.string,
    children : PropTypes.string,
}

export default Button;