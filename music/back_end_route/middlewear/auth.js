import { Router } from "express";
const router = Router();
import { Users } from "../models/models.js";
import bcrypt from "bcrypt";

// import passwordUtils from "./comparePassword.js";
// const User = require("./validation").User;
// const login = require("./validation").login;

// const jtoken = require("jsonwebtoken");

// Router.use((req, res, next) => {
//   console.log("router.use() receiving request");
//   next();
// });
router.get("/testapi", (req, res) => {
  const objmsg = { message: "test API is working" };
  return res.json(objmsg);
});

router.post("/signup", async (req, res) => {
  const { name, mail, phone, account, password, role } = req.body;
  console.log(name);
  // const { error } = register(req.body);
  // if (error) return res.status(400).send(error.details[0].message);
  // joi validation

  // if (!validation.isValid) {
  //   return res.status(400).json({ error: validation.error });
  // }

  // check if the email has been registered or not
  const emailExist = await Users.findOne({ mail });
  if (emailExist) return res.status(400).send("此email已被註冊");

  // execute register process
  const newUser = new Users({
    name,
    mail,
    phone,
    account,
    password,
    role,
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).send({
      msg: "註冊成功",
      savedObject: savedUser,
    });
  } catch (err) {
    res.status(400).send("User not saved.");
  }
});

// Router.post("/login", async (req, res) => {
//   //validation
//   // const { error } = login(req.body);
//   // if (error) return res.status(400).send(error.details[0].message);
//   const { account, password } = req.body;
//   //先找出有沒有該帳號，若是沒有，回報沒有該帳號Us

//   const passwordMatched = passwordUtils.comparePassword(
//     password,
//     userAccount.password
//   );

//   if (passwordMatched) {
//     // 密码匹配，登录成功
//     // res.status(200).json({ message: "Login successful" });
//     const jtokenObject = {
//       id: userAccount.id,
//       name: userAccount.name,
//       email: userAccount.email,
//       phone: userAccount.phone,
//       account: userAccount.account,
//     };
//     const thetoken = jtoken.sign(jtokenObject, process.env.SECRET);
//     res.send({
//       message: `${userAccount.name} 你好，歡迎來到入魂音樂，帶你一起飛 `,
//       token: "jwt " + thetoken,
//       user: {
//         id: userAccount.id,
//         name: userAccount.name,
//         email: userAccount.email,
//         phone: userAccount.phone,
//         account: userAccount.account,
//       },
//     });
//   } else {
//     // 密码不匹配，登录失败
//     res.status(401).json({ error: "Invalid credentials" });
//   }
// });

export const auth = router;
