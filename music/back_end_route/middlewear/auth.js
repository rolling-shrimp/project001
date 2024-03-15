const router = require("express").Router();
const bcrypt = require("bcrypt");
const connection = require("../mysqlDB");
const checkAccountAvailability = require("./checkAccountValid");
const passwordUtils = require("./comparePassword");
const register = require("./validation").register;
const login = require("./validation").login;

const jtoken = require("jsonwebtoken");

router.use((req, res, next) => {
  console.log("router.use() receiving request");
  next();
});
router.get("/testapi", (req, res) => {
  const objmsg = { message: "test API is working" };
  return res.json(objmsg);
});
// router.post("/signup", (req, res) => {
//   const { name, mail, phone, account, password } = req.body;
//   const validation = validateRegistrationData(name, mail, phone, account, password);
//   if (!validation.isValid) {
//     return res.status(400).json({ error: validation.error });
//   }
//   checkEmailAvailability(mail, connection, (error, isEmailAvailable) => {
//     if (error) {
//       return res.status(500).json({ error: 'An error occurred' });
//     }

//     if (!isEmailAvailable) {
//       return res.status(409).json({ error: 'Email is already registered' });
//     }

//     // 继续处理注册逻辑
//     handleRegistration(name, mail, phone, account, password, res);

//   });

//   // 檢查字段是否被修改
//   if (req.body.hasOwnProperty("password")) {
//     // 如果 password 字段存在，表示字段被修改，進行 bcrypt 哈希處理
//     bcrypt.hash(password, 10, (err, hashedPassword) => {
//       if (err) {
//         console.error("Error hashing password:", err);
//         res.status(500).json({ error: "An error occurred" });
//       } else {
//         // 執行相應的操作，例如將哈希過的密碼存入數據庫
//         const query =
//           "INSERT INTO account (name, email, phone, account, password) VALUES (?, ?, ?, ?, ?)";
//         connection.query(
//           query,
//           [name, mail, phone, account, hashedPassword],
//           (error, results) => {
//             if (error) {
//               console.error("Error inserting data into MySQL database:", error);
//               res.status(500).json({ error: "An error occurred" });
//             } else {
//               // 注冊成功的處理邏輯
//               res.status(200).json({ message: "Registration successful" });
//             }
//           }
//         );
//       }
//     });
//   } else {
//     // 沒有修改 password 字段，表示為其他更新操作或是新建文檔
//     // 檢查字段是否為新建文檔
//     if (!req.body.hasOwnProperty("id")) {
//       // 如果 id 字段不存在，表示為新建文檔，進行相應的操作
//       const query =
//         "INSERT INTO account (name, email, phone, account) VALUES (?, ?, ?, ?)";
//       connection.query(
//         query,
//         [name, mail, phone, account],
//         (error, results) => {
//           if (error) {
//             console.error("Error inserting data into MySQL database:", error);
//             res.status(500).json({ error: "An error occurred" });
//           } else {
//             // 新建文檔成功的處理邏輯
//             res.status(200).json({ message: "Document created successfully" });
//           }
//         }
//       );
//     } else {
//       // 其他更新操作的處理邏輯
//       // 例如更新其他欄位的值
//     }
//   }
// });
// 注册路由
router.post("/signup", (req, res) => {
  const { name, mail, phone, account, password } = req.body;
  const { error } = register(req.body);

  if (error) return res.status(400).send(error.details[0].message);
  // 验证数据

  // if (!validation.isValid) {
  //   return res.status(400).json({ error: validation.error });
  // }

  // 检查电子邮件是否可用
  checkAccountAvailability(mail, connection, (error, isEmailAvailable) => {
    if (error) {
      return res.status(500).json({ error: "An error occurred" });
    }

    if (!isEmailAvailable) {
      return res.status(409).json({ error: "Email is already registered" });
    }

    // 密码哈希处理
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error("Error hashing password:", err);
        return res.status(500).json({ error: "An error occurred" });
      }

      // 执行相应的操作，例如将哈希过的密码存入数据库
      const query =
        "INSERT INTO account (name, email, phone, account, password) VALUES (?, ?, ?, ?, ?)";
      connection.query(
        query,
        [name, mail, phone, account, hashedPassword],
        (error, results) => {
          if (error) {
            console.error("Error inserting data into MySQL database:", error);
            return res.status(500).json({ error: "An error occurred" });
          }

          // 注册成功的处理逻辑
          res.status(200).send({
            message: "註冊成功!",
            successobject: results,
          });
        }
      );
    });
  });
});
router.post("/login", (req, res) => {
  //validation
  const { error } = login(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const { account, password } = req.body;
  //先找出有沒有該帳號，若是沒有，回報沒有該帳號
  const query = "SELECT * FROM account WHERE account = ?";
  connection.query(query, [account], (err, results) => {
    if (err) res.status(500).json({ error: "An error occurred" });

    if (results.length === 0) res.status(404).json({ error: "User not found" });

    const userAccount = results[0];
    // const testPassword = passwordUtils.hashPassword(password);
    const passwordMatched = passwordUtils.comparePassword(
      password,
      userAccount.password
    );

    if (passwordMatched) {
      // 密码匹配，登录成功
      // res.status(200).json({ message: "Login successful" });
      const jtokenObject = {
        id: userAccount.id,
        name: userAccount.name,
        email: userAccount.email,
        phone: userAccount.phone,
        account: userAccount.account,
      };
      const thetoken = jtoken.sign(jtokenObject, process.env.SECRET);
      res.send({
        message: `${userAccount.name} 你好，歡迎來到入魂音樂，帶你一起飛 `,
        token: "jwt " + thetoken,
        user: {
          id: userAccount.id,
          name: userAccount.name,
          email: userAccount.email,
          phone: userAccount.phone,
          account: userAccount.account,
        },
      });
    } else {
      // 密码不匹配，登录失败
      res.status(401).json({ error: "Invalid credentials" });
    }

    // if (err) {
    //   console.error("Error retrieving user information:", err);
    //   res.status(500).json({ error: "An error occurred" });
    // } else if (results.length === 0) {
    //   //帳戶沒註冊
    //   res.status(404).json({ error: "User not found" });
    // } else {
    //   //進行帳密驗證
    //   const userAccount = results[0];
    //   // const testPassword = passwordUtils.hashPassword(password);
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
    // }
  });
});

module.exports = router;
