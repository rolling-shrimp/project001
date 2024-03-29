import { Routes, Route } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import authService from "./components/authservice";
import NavArea from "./components/NavArea";
import Footer from "./components/Footer";
import Hompeage from "./pages/Hompeage";
import MuCourse from "./pages/MuCourse";
import User from "./components/userData";
import SingnUp from "./pages/SingnUp";
import Log from "./components/loginHom";
import IDMem from "./components/id_thememberpage ";
import MusicPlauerList from "./pages/MusicPlauerList";

import "./components/styles/appJs/appjs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Musicgenre from "./components/Musicgenre";

function App() {
  let [currentuser, setcurrentuser] = useState(authService.getCurrentUser());
  const checkIfLogIn = useCallback(() => {
    setcurrentuser(authService.getCurrentUser());
  }, []);
  useEffect(() => {
    checkIfLogIn();
  }, [checkIfLogIn]);

  return (
    <div className="App relativePsotion">
      <NavArea currentuser={currentuser} />
      <Routes>
        <Route path="/" element={<Hompeage />} />
        <Route path="mcourse" element={<MuCourse />}></Route>
        <Route path="/signup" element={<SingnUp />} />
        <Route path="/login" element={<SingnUp />} />
        <Route path="/log" element={<Log />} />
        <Route path="/player/:id" element={<MusicPlauerList />} />
        <Route path="/show-beat-data/:id" element={<User />} />
        <Route
          path="/api/member/music"
          element={
            <IDMem currentuser={currentuser} setcurrentuser={setcurrentuser} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
