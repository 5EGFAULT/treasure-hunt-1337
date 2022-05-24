import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import * as AuthService from "../services/Auth.service";
import { Team } from "../types";

interface AuthContextType {
  team: Team | null;
  message: string | null;
  login: (team: Team) => Promise<void>;
  verify: () => Promise<void>;
  logout: () => Promise<void>;
}

let AuthContext = React.createContext<AuthContextType>(null!);

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  let [team, setTeam] = React.useState<Team | null>(null);

  const login = async (team: Team) => {
    let result = await AuthService.login(team);
    if (result && typeof result == "object") {
      team.password = "";
      setTeam(team);
    } else {
      team.password = "";
      setTeam(null);
    }
  };
  const verify = async () => {
    let result = await AuthService.verify();
    if (result && typeof result == "object") {
      if (team) team.password = "";
      setTeam(team);
    } else {
      if (team) team.password = "";
      setTeam(null);
    }
  };
  const logout = async () => {};

  useEffect(() => {
    verify();
  }, []);
  let value = { team, message: null, login, verify, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
