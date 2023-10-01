import axios from "axios";
const url = "http://localhost:3502/api/account/signup";
class signupp {
  post(name, mail, phone, account, password) {
    let signupData = {
      name: name,
      mail: mail,
      phone: phone,
      account: account,
      password: password,
    };
    return axios.post(url, signupData);
  }
}
export default new signupp();
