import axios from "axios";
let api_url = "http://localhost:3502/products";
class everybodyservice {
  get() {
    return axios.get(api_url);
  }
}
export default new everybodyservice();
