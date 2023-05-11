import { useState } from "react";
function useCounter(){
   const [count ,setcount] =useState(0);
   
   const inc =()=>{
     setcount(count+1);
   }
   const dec =()=>{
     setcount(count-1);
   }

   return [count ,inc,dec];
}

function useWindowSize(){
    
    return [window.innerHeight ,window.innerWidth] ;
}
export {useCounter ,useWindowSize};