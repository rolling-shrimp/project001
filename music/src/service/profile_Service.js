import axios from "axios";
let basicUrl = "http://localhost:3502/";
const API_URL = `${basicUrl}api/member`;
class profileService {
  get(id) {
    let token;

    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
      console.log(token);
    } else {
      token = "";
    }

    return axios.get(API_URL + "/music/" + id, {
      headers: {
        Authorization: token,
      },
    });
  }
  getcourse() {
    return axios.get(basicUrl + "courses");
  }
  createCourse(obj) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.post(API_URL, obj, {
      headers: {
        Authorization: token,
      },
    });
  }

  enrollCourse(_id) {
    let userInf;
    let token;
    if (localStorage.getItem("user")) {
      userInf = JSON.parse(localStorage.getItem("user"));
      token = userInf.token;
    } else {
      token = "";
    }
    console.log(userInf);
    const { id, name, mail, phone } = userInf.user;
    const studentInf = { id, name, mail, phone };
    return axios.post(
      API_URL + "/enroll/" + _id,
      { studentInf },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
  getEnrolledCourse(id, token) {
    console.log(token);
    return axios.get(`${API_URL}/student/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  }
}
let profileServicing = new profileService();
export default profileServicing;
