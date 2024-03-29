import axios from "axios";
const url = "http://localhost:3502/api/account/signup";
class signupp {
  post(obj) {
    let signupData = {
      ...obj,
    };
    console.log(signupData);
    return axios.post(url, signupData);
  }
}
let signuping = new signupp();
export default signuping;
