import axios from "axios";
let basicurl = "http://localhost:3502";
const url = `${basicurl}/api/account/signup`;
const loginurl = `${basicurl}/api/account/login`;
class signupp {
  post(obj) {
    let urlofBackEnd = obj.location === "/signup" ? url : loginurl;
    let signupData = {
      ...obj,
    };
    console.log(signupData);
    return axios.post(urlofBackEnd, signupData);
  }
}
let signuping = new signupp();
export default signuping;
