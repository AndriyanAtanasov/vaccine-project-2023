import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/vaccinated" element={<VaccineList />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/add-vaccine" element={<AddVaccine />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
