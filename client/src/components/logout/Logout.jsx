import { useContext, useEffect } from "react";
import * as authService from "../../services/authService.js";
import AuthContext from "../../contexts/authContext.jsx";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const { logoutHandler } = useContext(AuthContext);

  useEffect(() => {
    authService
      .logout()
      .then(() => {
        logoutHandler();
        navigate("/");
      })
      .catch(() => navigate("/error"));
  }, []);

  return null;
};

export default Logout;
