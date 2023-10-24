import React, { useImperativeHandle, useRef } from "react";
import { forwardRef } from "react";
const ResultModel = forwardRef(function ResultModel({  targetTime,remainingTime,toReset }, ref) {
    const dialog = useRef()
    const userLost = remainingTime<=0;
    const time = (remainingTime/1000).toFixed(2)
    const score = Math.round((1 - remainingTime/(targetTime*1000))*100)
    useImperativeHandle(ref ,()=>{
        return  {
            open(){
                dialog.current.showModal()
            }
        }
    })
   return (
      <dialog ref={dialog} className="result-modal" onClose={toReset}>
         {userLost?<h2>you lost</h2>:''}
         {!userLost?<h2>Your score : {score}</h2>:''}
         <p>
            the target time was <strong>{targetTime} seconds</strong>
         </p>
         <p>
            you stoped the timer with <strong> {time} seconds left</strong>
         </p>
         <form method="dialog" onSubmit={toReset}>
            <button>Close</button>
         </form>
      </dialog>
   );
});
export default ResultModel;
