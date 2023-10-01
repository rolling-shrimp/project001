import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Musichomepgg from "./components/MusicHom";
import Musicmp3 from "./components/Mump3";
import MusicOr from "./components/MuOrder";
import Musicoursee from "./components/MuCourse";
import Boom from "./components/Beatpages/boombap";
import Gfunkk from "./components/Beatpages/gfunk";
import Lofii from "./components/Beatpages/lofi";
import RBB from "./components/Beatpages/rb";
import User from "./components/userData";
import Course from "./components/enrollaData";
import Test from "./components/oRcom/form copy";
import SIGNUP from "./components/signupHom";
import Log from "./components/loginHom";
// import Mem from "./components/thememberpage";
import IDMem from "./components/id_thememberpage ";
import Authservice from "./components/authservice";

// import "bootstrap/dist/css/bootstrap.css";

function App() {
  let [currentuser, setcurrentuser] = useState(Authservice.getCurrentUser());

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Musichomepgg />} />
        <Route path="/mp3" element={<Musicmp3 />} />
        <Route
          path="/morder"
          element={
            <MusicOr
              currentuser={currentuser}
              setcurrentuser={setcurrentuser}
            />
          }
        />
        <Route
          path="/mcourse"
          element={
            <Musicoursee
              currentuser={currentuser}
              setcurrentuser={setcurrentuser}
            />
          }
        />
        <Route path="/boom" element={<Boom />} />
        <Route path="/gfunk" element={<Gfunkk />} />
        <Route path="/lofi" element={<Lofii />} />
        <Route path="/RNB" element={<RBB />} />
        <Route path="/test" element={<Test />} />
        <Route path="/signup" element={<SIGNUP />} />
        <Route path="/log" element={<Log />} />
        <Route path="/show-beat-data/:id" element={<User />} />
        <Route path="/show-course-data/:id" element={<Course />} />
        {/* <Route
          path="/api/music"
          element={
            <Mem currentuser={currentuser} setcurrentuser={setcurrentuser} />
          }
        /> */}
        <Route
          path="/api/member/music"
          element={
            <IDMem currentuser={currentuser} setcurrentuser={setcurrentuser} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
