import React, { useState } from "react";

function App() {
  let time = new Date();
  const [currentTime, setTimer] = useState(time);
  //console.log(currentTime, setTimer);

  //Challenge #1
  function getTime() {
    setTimer(new Date());
  }

  //Challenge #2
  function getTimePerSec() {
    setTimer(new Date());
  }
  setInterval(getTimePerSec, 1000);

  return (
    <div className="container">
      <h1>{currentTime.toLocaleTimeString()}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
