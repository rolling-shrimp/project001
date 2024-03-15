class Authservice {
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}
let authService = new Authservice();
export default authService;
