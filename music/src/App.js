import { Routes, Route } from "react-router-dom";
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

// import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Musichomepgg />} />
        <Route path="/mp3" element={<Musicmp3 />} />
        <Route path="/morder" element={<MusicOr />} />
        <Route path="/mcourse" element={<Musicoursee />} />
        <Route path="/boom" element={<Boom />} />
        <Route path="/gfunk" element={<Gfunkk />} />
        <Route path="/lofi" element={<Lofii />} />
        <Route path="/RNB" element={<RBB />} />
        <Route path="/show-beat-data/:id" element={<User />} />
        <Route path="/show-course-data/:id" element={<Course />} />
      </Routes>
    </div>
  );
}

export default App;
