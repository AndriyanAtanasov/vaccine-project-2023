import { createContext } from "react";
import * as authService from "../services/authService.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem("accessToken");

    return {};
  });

  const loginSubmitHandler = async (values) => {
    const result = await authService.Login(values.email, values.password);

    setAuth(result);

    let test = {
      code: 403,
      message: "Login or password don't match",
    };

    localStorage.setItem("accessToken", result.accessToken);

    navigate("/");
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(
      values.email,
      values.username,
      values.password
    );

    setAuth(result);

    localStorage.setItem("accessToken", result.accessToken);

    navigate("/");
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("accessToken");
  };

  const valuesContext = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username,
    userId: auth._id,
    isAuthenticated: !!auth.username, // if have user change in boolean value on true
  };

  return (
    <AuthContext.Provider value={valuesContext}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
