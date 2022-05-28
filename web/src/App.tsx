import { useState } from "react";
import Leaderboard from "./pages/Leaderboard";
import ListFlags from "./pages/ListFlags";
import Login from "./pages/Login";
import Team from "./pages/Team";
import TeamUpdate from "./pages/TeamUpdate";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { RequireAuth, RequireNoAuth } from "./auth/auth";
import SubmitPage from "./pages/SubmitPage";
import Error404 from "./pages/Error404";
import Admin from "./pages/Admin";

function App() {
  return (
    <div
      className=" w-full  scroll-smooth"
      style={{ minHeight: window.innerHeight }}
    >
      <Routes>
        <Route index element={<Leaderboard />} />
        <Route path="/admin/settings" element={<Admin />} />
        <Route
          path="/login"
          element={
            <RequireNoAuth>
              <Login />
            </RequireNoAuth>
          }
        />
        <Route path="/" element={<Leaderboard />} />
        <Route
          path="/setting"
          element={
            <RequireAuth>
              <TeamUpdate />
            </RequireAuth>
          }
        />
        <Route
          path="/submit"
          element={
            <RequireAuth>
              <SubmitPage />
            </RequireAuth>
          }
        />
        <Route path="/flags" element={<ListFlags />} />
        <Route
          path="/team"
          element={
            <RequireAuth>
              <Team />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Nav />
    </div>
  );
}

export default App;
