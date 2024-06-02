import Swal from "sweetalert2";
import profileServicing from "../service/profile_Service";

export const enrollCourse = (_id, currentuser) => {
  if (!currentuser.token || currentuser.user.role !== "student") {
    Swal.fire({
      title: !currentuser.token ? "請先登入" : "只有學生才能報名",
      confirmButtonText: "確定",
      confirmButtonColor: "black",
    });
    return;
  }

  Swal.fire({
    title: "確定要報名嗎?",
    confirmButtonText: "確定",
    confirmButtonColor: "black",
    cancelButtonText: "取消",
    cancelButtonColor: "gray",
  })
    .then((result) => {
      profileServicing.enrollCourse(_id).then((response) => {
        Swal.fire({
          title: "報名成功",
          confirmButtonColor: "black",
          icon: "success",
        });
        window.location = "/mcourse";
      });
    })
    .catch((e) => {
      console.log(e);
      Swal.fire({
        title: "報名失敗發生錯誤",
        confirmButtonColor: "black",
        icon: "error",
      });
    });
};

export const cancelEnroll = (_id) => {
  Swal.fire({
    title: "確定要取消報名嗎?",
    confirmButtonText: "確定",
    confirmButtonColor: "black",
    cancelButtonText: "取消",
    cancelButtonColor: "gray",
  })
    .then(() => {
      profileServicing.notEnroll(_id).then((response) => {
        console.log(response);
        Swal.fire({
          icon: "success",
          title: "取消報名成功",
          confirmButtonColor: "black",
          confirmButtonText: "確定",
        }).then(() => {
          window.location = "/personalPage";
        });
      });
    })
    .catch((error) => {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "取消報名失敗",
        confirmButtonColor: "black",
        confirmButtonText: "確定",
      });
    });
};
export const deleteCourse = (_id) => {
  Swal.fire({
    title: "確定要刪除課程嗎?",
    confirmButtonText: "確定",
    confirmButtonColor: "black",
    cancelButtonText: "取消",
    cancelButtonColor: "gray",
  })
    .then((result) => {
      // 刪除課程
      profileServicing.notEnroll(_id).then((response) => {
        console.log(response);
        Swal.fire({
          icon: "success",
          title: "刪除課程成功",
          confirmButtonColor: "black",
          confirmButtonText: "確定",
        }).then(() => {
          window.location = "/personalPage";
        });
      });
    })
    .catch((e) => {
      console.log(e);
      Swal.fire({
        title: "刪除失敗發生錯誤",
        confirmButtonColor: "black",
        icon: "error",
      });
    });
};
