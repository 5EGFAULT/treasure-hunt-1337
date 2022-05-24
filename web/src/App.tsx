import { useState } from "react";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login";

function App() {
  console.log(window, screen);

  return (
    <div
      className=" w-screen"
      style={{
        height: window.innerHeight,
      }}
    >
      {/*<Login />*/}
      <Leaderboard />
    </div>
  );
}

export default App;
