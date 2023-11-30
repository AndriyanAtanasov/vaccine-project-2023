import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import AuthContext from "./contexts/authContext.js";
import * as authService from "./services/authService.js";

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./components/home/Home.jsx";
import NotFound from "./components/NotFound.jsx";
import VaccineList from "./components/vaccine-list/VaccineList.jsx";
import About from "./components/about/About.jsx";
import News from "./components/news/News.jsx";
import Register from "./components/register/Register.jsx";
import AddVaccine from "./components/vaccine-create/AddVaccine.jsx";
import Login from "./components/login/Login.jsx";
import VaccineInfo from "./components/vaccine-info/VaccineInfo.jsx";
import Logout from "./components/logout/Logout.jsx";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) => {
    const result = await authService.Login(values.email, values.password);

    setAuth(result);

    localStorage.setItem("accessToken", result.accessToken);

    navigate("/");
  };

  const registerSubmitHandler = async (values) => {
    console.log(values);
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
    isAuthenticated: !!auth.username, // if have user change in boolean value on true
  };

  return (
    <AuthContext.Provider value={valuesContext}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/vaccinated" element={<VaccineList />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/add-vaccine" element={<AddVaccine />}></Route>
          <Route path="/vaccine/:vaccineId" element={<VaccineInfo />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>

        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
