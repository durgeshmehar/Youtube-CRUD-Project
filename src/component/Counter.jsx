
import { useRef } from "react";

function Counter(){
    const count =useRef(0);
    
    function handleClick(){
        count.current++;
        console.log(count.current)
    }
    return (
        <>
        <h4 >{count.current}</h4>
        <button onClick={handleClick}>Add</button>

        </>
    )
}
export default Counter;