import axios from "axios";
const API_URL = "http://localhost:3502/api/member";
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
  getcourse(id) {
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
}
export default new profileService();
