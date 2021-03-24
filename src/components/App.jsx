import React, { useState } from "react";

function App() {
  let time = new Date();
  const [currentTime, setTimer] = useState(time);
  //console.log(currentTime, setTimer);

  function getTime() {
    setTimer(new Date());
  }

  return (
    <div className="container">
      <h1>{currentTime.toLocaleTimeString()}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
