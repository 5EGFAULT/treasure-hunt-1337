import { useState } from "react";
import Leaderboard from "./pages/Leaderboard";
import ListFlags from "./pages/ListFlags";
import Login from "./pages/Login";
import Team from "./pages/Team";
import TeamUpdate from "./pages/TeamUpdate";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div
      className=" w-full  scroll-smooth"
      style={{ minHeight: window.innerHeight }}
    >
      <Routes>
        <Route index element={<Leaderboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Leaderboard />} />
        <Route path="setting" element={<TeamUpdate />} />
        <Route path="/flags" element={<ListFlags />} />
        <Route path="team" element={<Team />} />
        <Route
          path="*"
          element={<h1 className=" text-center  p-5">I WILL ADD A 404 here</h1>}
        />
      </Routes>
      <Nav />
    </div>
  );
}

export default App;
