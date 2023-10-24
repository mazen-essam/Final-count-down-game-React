import React, { useRef, useState } from "react";
import ResultModel from "./ResultModel";
export default function TimerChallenge({ title, targetTime }) {
   const Timer = useRef();
   const dialog = useRef();
   const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
   let timerActive = (timeRemaining > 0 && timeRemaining < targetTime * 1000);
   if (timeRemaining <= 0) {
      clearInterval(Timer.current);
      dialog.current.open();
   }
   function handleReset(){
    setTimeRemaining(targetTime*1000)
   }
   function handleStart() {
      Timer.current = setInterval(() => {
         setTimeRemaining((prevTime) => prevTime - 10);
      }, 10);
   }
   function handleStop() {
      clearInterval(Timer.current);
      dialog.current.open();

   }
   return (
      <>
         <ResultModel ref={dialog} result="lost" targetTime={targetTime} remainingTime = {timeRemaining} toReset={handleReset}/>
         <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
               {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>
            <p>
               <button onClick={timerActive ? handleStop : handleStart}>
                  {timerActive ? 'stop' : 'Start'} Challenge
               </button>
            </p>
            <p className={timerActive ? "active" : undefined}>
               {timerActive ? "Timer is running..." : "Timer inactive"}
            </p>
         </section>
      </>
   );
}
