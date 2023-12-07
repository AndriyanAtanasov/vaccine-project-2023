import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext.jsx";

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./components/home/Home.jsx";
import NotFound from "./components/NotFound.jsx";
import VaccineList from "./components/vaccine-list/VaccineList.jsx";
import About from "./components/about/About.jsx";
import Register from "./components/register/Register.jsx";
import AddVaccine from "./components/vaccine-create/AddVaccine.jsx";
import Login from "./components/login/Login.jsx";
import VaccineInfo from "./components/vaccine-info/VaccineInfo.jsx";
import Logout from "./components/logout/Logout.jsx";
import EditVaccine from "./components/vaccine-edit/editVaccine.jsx";
import AuthGuard from "./components/guards/AuthGuard.jsx";

function App() {
  return (
    <AuthProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/vaccinated" element={<VaccineList />}></Route>
          <Route path="/vaccine/:vaccineId" element={<VaccineInfo />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="*" element={<NotFound />}></Route>

          <Route element={<AuthGuard />}>
            <Route path="/add-vaccine" element={<AddVaccine />}></Route>
            <Route
              path="/vaccine/:vaccineId/edit"
              element={<EditVaccine />}
            ></Route>
            <Route path="/logout" element={<Logout />}></Route>
          </Route>
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
