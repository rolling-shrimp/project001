export const filterCourses = (arr, id) => {
  for (let obj of arr) {
    if (obj !== null && obj.id === id) {
      return true;
    }
  }
  return false;
};
