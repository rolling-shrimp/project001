class formItem {
  constructor(placeholder, type, initialValue, itemName) {
    this.placeholder = placeholder;
    this.type = type;
    this.initialValue = initialValue;
    this.itemName = itemName;
  }
}

export let signupItems = [
  new formItem("姓名", "text", "", "name"),
  new formItem("e-mail", "email", "", "mail"),
  new formItem("電話", "tel", "", "phone"),
  new formItem("帳號", "text", "", "account"),
  new formItem("密碼", "password", "", "password"),
];

export let signupState = signupItems.reduce((acc, curr) => {
  return { ...acc, [curr.itemName]: curr.initialValue };
}, {});

export let loginItems = [
  new formItem("帳號", "text", "", "account"),
  new formItem("密碼", "password", "", "password"),
];
export let loginState = loginItems.reduce((acc, curr) => {
  return { ...acc, [curr.itemName]: curr.initialValue };
}, {});

export let createCourseItems = [
  new formItem("課程名稱", "text", "", "title"),
  new formItem("價錢", "number", 900, "price"),
  {
    placeholder: "課程描述",

    initialValue: "",
    itemName: "description",
  },
  new formItem("日期", "date", "", "date"),
];

export let courseState = createCourseItems.reduce((acc, curr) => {
  return { ...acc, [curr.itemName]: curr.initialValue };
}, {});
