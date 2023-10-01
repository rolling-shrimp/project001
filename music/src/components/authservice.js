class Authservice {
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}
module.exports = new Authservice();
