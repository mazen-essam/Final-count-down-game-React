import { useRef, useState } from "react";
export default function Player() {
   let playerName = useRef();
   const [enteredPlayerName, setEnteredPlayerName] = useState("");
   const handleChange = () => {
      setEnteredPlayerName(playerName.current.value);
      playerName.current.value = ''
   };

   return (
      <section id="player">
         <h2>
            Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}
         </h2>
         <p>
            <input ref={playerName} type="text" />
            <button onClick={handleChange}>Set Name</button>
         </p>
      </section>
   );
}
