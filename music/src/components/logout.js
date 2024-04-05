import Swal from "sweetalert2";
export const logout = (setcurrentuser) => {
  localStorage.removeItem("user");
  Swal.fire({ title: "登出成功，回到首頁", confirmButtonColor: "black" });
  setcurrentuser({ token: null, user: { id: null, role: null } });
  window.location = "/";
};
