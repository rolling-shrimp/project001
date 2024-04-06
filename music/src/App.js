import { Routes, Route } from "react-router-dom";
import { useState, useCallback, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import authService from "./components/authservice";
import NavArea from "./components/NavArea";
import Footer from "./components/Footer";
import Hompeage from "./pages/Hompeage";
import MuCourse from "./pages/MuCourse";
import User from "./components/userData";
import SingnUp from "./pages/SingnUp";
import Log from "./components/loginHom";
import MusicPlauerList from "./pages/MusicPlauerList";
import TeacherPage from "./pages/TeacherPage";
import Swal from "sweetalert2";
import GetCourseData from "./components/getCourseData";
import "./components/styles/appJs/appjs.css";
import "bootstrap/dist/css/bootstrap.min.css";
export const objectFromAppjs = createContext();

function App() {
  let [currentuser, setcurrentuser] = useState(authService.getCurrentUser());
  const [location, setLocation] = useState("");
  const data = GetCourseData(location, currentuser).courses;
  const navigate = useNavigate();
  const checkIfLogIn = useCallback(() => {
    setcurrentuser(authService.getCurrentUser());
  }, []);
  useEffect(() => {
    checkIfLogIn();
  }, [checkIfLogIn]);

  const logout = () => {
    localStorage.removeItem("user");
    Swal.fire({ title: "登出成功，回到首頁", confirmButtonColor: "black" });
    setcurrentuser({ token: null, user: { id: null, role: null } });
    // window.location = "/";
    navigate("/");
  };

  return (
    <div className="App relativePsotion">
      <objectFromAppjs.Provider value={logout}>
        <NavArea
          location={location}
          setcurrentuser={setcurrentuser}
          currentuser={currentuser}
        />
      </objectFromAppjs.Provider>
      <Routes>
        <Route
          path="/"
          element={<Hompeage setLocation={setLocation} location={location} />}
        />

        <Route
          path="/log"
          element={<Log setLocation={setLocation} location={location} />}
        />
        <Route
          path="/player/:id"
          element={
            <MusicPlauerList setLocation={setLocation} location={location} />
          }
        />
        <Route
          path="/show-beat-data/:id"
          element={<User setLocation={setLocation} location={location} />}
        />
      </Routes>
      <objectFromAppjs.Provider value={{ setcurrentuser, currentuser, data }}>
        <Routes>
          <Route
            path="mcourse"
            element={
              <MuCourse
                currentuser={currentuser}
                setLocation={setLocation}
                location={location}
              />
            }
          ></Route>
          <Route
            path="/signup"
            element={<SingnUp setLocation={setLocation} />}
          />
          <Route
            path="/login"
            element={<SingnUp setLocation={setLocation} />}
          />
          <Route
            path="/personalPage"
            element={<TeacherPage setLocation={setLocation} />}
          />
        </Routes>
      </objectFromAppjs.Provider>

      <Footer />
    </div>
  );
}

export default App;
