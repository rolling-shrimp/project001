import axios from "axios";
const api_url = "http://localhost:3502/api/member";
class memberservice {
  get() {
    let token;

    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
      console.log(token);
    } else {
      token = "";
    }

    return axios.get(api_url + "/music", {
      headers: {
        Authorization: token,
      },
    });
  }
}
let memberService = new memberservice();
export default memberService;
