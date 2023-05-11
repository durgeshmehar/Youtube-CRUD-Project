import {useCounter, useWindowSize} from "../hook/CounterHook"

function Counter(){
     const [count ,inc ,dec] =useCounter();
     const [height ,width ] =useWindowSize();
    return(
        <>
        <h3>{count}</h3>
        <button onClick={inc}>Increase</button>
        <button onClick={dec}>Decrease</button>
        {console.log(`height : ${height}  width :${width}`)}
        </>
    )
}
export default Counter;
