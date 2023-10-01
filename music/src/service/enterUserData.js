import axios from "axios";
class enterUserData {
  post(username, usertel, usermail, checkboxesData) {
    let userData = {
      username: username,
      usertel: usertel,
      usermail: usermail,
      selectedBeats: checkboxesData,
    };
    return axios.post("http://localhost:3502/submit-form", userData);
  }

  get() {
    return axios.get();
  }
}
export default new enterUserData();
