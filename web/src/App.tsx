import { useState } from "react";
import Leaderboard from "./pages/Leaderboard";
import ListFlags from "./pages/ListFlags";
import Login from "./pages/Login";
import Team from "./pages/Team";
import TeamUpdate from "./pages/TeamUpdate";
import Nav from "./components/Nav";
function App() {
  console.log(window, screen);

  return (
    <div
      className=" w-full scroll-smooth"
      style={{
        minHeight: window.innerHeight,
      }}
    >
      {/*<Login />*/}
      {/*<Leaderboard />*/}
      {/*<TeamUpdate />*/}
      {/*<ListFlags />*/}
      <Team />
      <Nav />
    </div>
  );
}

export default App;
