import axios from "axios";
let api_url = "http://localhost:3502/products";
class everybodyservice {
  get() {
    return axios.get(api_url);
  }
}
let everyBodyService = new everybodyservice();

export default everyBodyService;
