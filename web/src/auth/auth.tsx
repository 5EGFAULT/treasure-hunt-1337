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
  const location = useLocation();
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
      setTeam(result);
    } else {
      setTeam(null);
    }
  };
  const logout = async () => {
    let result = await AuthService.logout();
    setTeam(null);
  };

  useEffect(() => {
    verify();
  }, [location]);
  let value = { team, message: null, login, verify, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let auth = useAuth();
  const location = useLocation();
  if (!auth || !auth.team) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
interface stateType {
  from: { pathname: string };
}
export const RequireNoAuth = ({ children }: { children: JSX.Element }) => {
  let auth = useAuth();
  if (auth && auth.team) {
    return <Navigate to="/" />;
  }
  return children;
};
