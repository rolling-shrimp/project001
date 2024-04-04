class Authservice {
  getCurrentUser() {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"));
    } else {
      return {
        token: null,
        user: { id: null, role: null },
      };
    }
  }
}
let authService = new Authservice();
export default authService;
