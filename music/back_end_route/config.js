const express = require("express");
const jwt = require("jsonwebtoken");
const connection = require("./mysqlDB");
const authroute = require("./middlewear").auth;
const loginauth = require("./middlewear").loginauth;
const notmember = require("./middlewear").notmember;
var cors = require("cors");
const { JSON } = require("mysql/lib/protocol/constants/types");
const { json } = require("body-parser");
require("dotenv").config(); // 导入dotenv模块，加载环境变量
const app = express();

const passport = require("passport");
require("./middlewear/passport")(passport);
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(express.json());
app.use(cors());

app.use("/api/account", authroute);
app.use(
  "/api/member",
  passport.authenticate("jwt", { session: false }),
  loginauth
);
app.use("/api/notmember", notmember);
app.get("/products", (req, res) => {
  const query = `select * from beatforsell`;
  connection.query(query, (error, result) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});

app.get("/show-beat-data/:id", (req, res) => {
  const id = req.params.id;
  const query = `SELECT your_table.id, your_table.name, your_table.phone_number, your_table.email, beatforsell.product_name, beatforsell.price
  FROM your_table
  INNER JOIN selected_beats ON selected_beats.user_id = your_table.id
  INNER JOIN beatforsell ON selected_beats.beat_option LIKE CONCAT('%', beatforsell.product_name, '%')
  WHERE your_table.id = ?`;

  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      res.sendStatus(500); // Send an error response
    } else {
      res.json(results); // Send the query results as JSON response
    }
  });
});

app.post("/submit-form", (req, res) => {
  const formData = req.body; // Assuming the form data is sent in the request body

  // SQL statement for inserting form data into the main table
  const insertFormQuery = `INSERT INTO your_table (name, phone_number, email)
                           VALUES ('${formData.username}', '${formData.usertel}', '${formData.usermail}')`;

  // Execute the SQL statement to insert the form data into the main table
  connection.query(insertFormQuery, (error, result) => {
    // ...
    if (error) {
      console.error("Error inserting form data:", error);
      res.sendStatus(500); // Send an error response
    } else {
      console.log("Form data inserted successfully");
      // res.sendStatus(200); // Send a success response
    }
    const userId = result.insertId; // Get the ID of the inserted row in selected_beats
    let selectedBeats = formData.selectedBeats;
    if (selectedBeats.length > 0) {
      const selectedBeatsQuery =
        "INSERT INTO selected_beats (user_id, beat_option) VALUES ?";
      const selectedBeatsValues = selectedBeats.map((beat) => [
        userId,
        beat.checkboxName,
      ]);
      connection.query(selectedBeatsQuery, [selectedBeatsValues], (err) => {
        if (err) {
          console.error("儲存選取的 beat 時發生錯誤:", err);
          return res.status(500).json({ error: "儲存選取的 beat 時發生錯誤" });
        }

        console.log("選取的 beat 已成功存入 MySQL 資料庫");
        // res.json({ success: true });
        res.json({ id: userId });
      });
    } else {
      // res.json({ success: true });
      res.json({ id: userId });
    }
  });
});
// app.post("/submit-course-form", (req, res) => {
//   const formData = req.body; // Assuming the form data is sent in the request body

//   // SQL statement for inserting form data into the main table
//   const insertFormQuery = `INSERT INTO your_table (name, phone_number, email)
//                            VALUES ('${formData.username}', '${formData.usertel}', '${formData.usermail}')`;

//   // Execute the SQL statement to insert the form data into the main table
//   connection.query(insertFormQuery, (error, result) => {
//     // ...
//     if (error) {
//       console.error("Error inserting form data:", error);
//       res.sendStatus(500); // Send an error response
//     } else {
//       console.log("Form data inserted successfully");
//       // res.sendStatus(200); // Send a success response
//     }
//     const userId = result.insertId; // Get the ID of the inserted row in selected_beats
//     let selectedBeats = formData.selectedBeats;
//     if (selectedBeats.length > 0) {
//       const selectedBeatsQuery =
//         "INSERT INTO selected_beats (user_id, beat_option) VALUES ?";
//       const selectedBeatsValues = selectedBeats.map((beat) => [
//         userId,
//         beat.checkboxName,
//       ]);
//       connection.query(selectedBeatsQuery, [selectedBeatsValues], (err) => {
//         if (err) {
//           console.error("儲存選取的 beat 時發生錯誤:", err);
//           return res.status(500).json({ error: "儲存選取的 beat 時發生錯誤" });
//         }

//         console.log("選取的 beat 已成功存入 MySQL 資料庫");
//         // res.json({ success: true });
//         res.json({ id: userId });
//       });
//     } else {
//       // res.json({ success: true });
//       res.json({ id: userId });
//     }
//   });
// });

//new version of checkboxes post request
/*In your server code, you are directly interpolating the form data or checkboxes data into the SQL query as strings. This can cause issues when inserting arrays as objects into the database. To solve this problem, you need to properly handle the array data before inserting it into the database.

For the submit-checkboxes endpoint, instead of directly interpolating the checkboxes data into the SQL query, you can use prepared statements to handle the array data properly. Here's an updated version of your code that uses prepared statements:*/

// javascript;
// app.post("/submit-checkboxes", (req, res) => {
//   const checkboxesData = req.body; // Assuming the checkboxes data is sent in the request body as an array
//   const userId = req.userId; // Access the userId from the request object
//   // SQL statement for inserting checkboxes data into the other table
//   const insertCheckboxesQuery =
//     "INSERT INTO selected_beats (beat_option) VALUES (?) ";
//   // SQL statement for inserting data into the user_selected_beats table
//   const insertUserSelectedBeatsQuery =
//     "INSERT INTO user_selected_beats (beat_id) VALUES (?)";

//   // Convert the checkboxesData array into a 2-dimensional array for bulk insert
//   const values = checkboxesData.map((checkbox) => [checkbox.checkboxName]);
//   let completedQueries = 0;
//   const totalQueries = values.length;
//   values.forEach((checkboxvalues) => {
//     // Execute the SQL statement with the prepared statement and the values
//     connection.query(insertCheckboxesQuery, checkboxvalues, (error, result) => {
//       if (error) {
//         console.error("Error inserting checkboxes data:", error);
//         res.sendStatus(500); // Send an error response
//         return;
//       }
//       // completedQueries++;
//       // if (completedQueries === totalQueries) {
//       //   console.log("Checkboxes data inserted successfully");
//       //   res.sendStatus(200); // Send a success response
//       // }
//       const selectedBeatsId = result.insertId; // Get the ID of the inserted row in selected_beats

//       // Insert the relationship data into the user_selected_beats table
//       connection.query(
//         insertUserSelectedBeatsQuery,
//         [userId, selectedBeatsId], // Assuming you have the yourTableId available from the form data
//         (error, result) => {
//           if (error) {
//             console.error(
//               "Error inserting data into user_selected_beats:",
//               error
//             );
//             res.sendStatus(500); // Send an error response
//             return;
//           }
//           completedQueries++;
//           if (completedQueries === totalQueries) {
//             console.log("Checkboxes data inserted successfully");
//             res.sendStatus(200); // Send a success response
//           }

//           // console.log(
//           //   "Data inserted successfully into selected_beats and user_selected_beats"
//           // );
//           // res.sendStatus(200); // Send a success response
//         }
//       );
//     });
//   });
// });
// app.post("/submit-checkboxes", (req, res) => {
//   const checkboxesData = req.body; // Assuming the checkboxes data is sent in the request body as an array

//   // SQL statement for inserting checkboxes data into the selected_beats table
//   const insertCheckboxesQuery =
//     "INSERT INTO selected_beats (beat_option) VALUES (?)";

//   // SQL statement for inserting data into the user_selected_beats table
//   const insertUserSelectedBeatsQuery =
//     "INSERT INTO user_selected_beats (your_table_id, selected_beats_id) VALUES (?, ?)";

//   // Execute the SQL statement to insert the checkboxes data into the selected_beats table
//   connection.query(insertCheckboxesQuery, checkboxesData, (error, result) => {
//     if (error) {
//       console.error("Error inserting checkboxes data into selected_beats:", error);
//       res.sendStatus(500); // Send an error response
//       return;
//     }

//     const selectedBeatsId = result.insertId; // Get the ID of the inserted row in selected_beats

//     // Insert the relationship data into the user_selected_beats table
//     connection.query(
//       insertUserSelectedBeatsQuery,
//       [selectedBeatsId], // Assuming you have the yourTableId available from the form data
//       (error, result) => {
//         if (error) {
//           console.error("Error inserting data into user_selected_beats:", error);
//           res.sendStatus(500); // Send an error response
//           return;
//         }

//         console.log("Data inserted successfully into selected_beats and user_selected_beats");
//         res.sendStatus(200); // Send a success response
//       }
//     );
//   });
// });

// app.post("/submit-checkboxes", (req, res) => {
//   const checkboxesData = req.body; // Assuming the checkboxes data is sent in the request body as an array

//   // SQL statement for inserting checkboxes data into the other table
//   const insertCheckboxesQuery =
//     "INSERT INTO selected_beats (beat_option) VALUES (?) ";
//   // Convert the checkboxesData array into a 2-dimensional array for bulk insert
//   const values = checkboxesData.map((checkbox) => [checkbox.checkboxName]);
//   let completedQueries = 0;
//   const totalQueries = values.length;
//   values.forEach((checkboxvalues) => {
//     // Execute the SQL statement with the prepared statement and the values
//     connection.query(insertCheckboxesQuery, checkboxvalues, (error, result) => {
//       if (error) {
//         console.error("Error inserting checkboxes data:", error);
//         res.sendStatus(500); // Send an error response
//       } else {
//         console.log("Checkboxes data inserted successfully");
//         // res.sendStatus(200); // Send a success response
//       }
//     });
//     completedQueries++;
//     if (completedQueries === totalQueries) {
//       console.log("Checkboxes data inserted successfully");
//       res.sendStatus(200); // Send a success response
//     }
//   });
// });

// app.post("/submit-checkboxes", (req, res) => {
//   const checkboxesData = req.body; // Assuming the checkboxes data is sent in the request body as an array

//   // SQL statement for inserting checkboxes data into the other table
//   let insertCheckboxesQuery = `INSERT INTO selected_beats (beat_option) VALUES`;
//   checkboxesData.forEach((checkbox) => {
//     insertCheckboxesQuery += ` ('${checkbox}'),`;
//   });

//   // Remove the trailing comma
//   insertCheckboxesQuery = insertCheckboxesQuery.slice(0, -1);

//   // Execute the SQL statement to insert the checkboxes data into the other table
//   connection.query(insertCheckboxesQuery, (error, result) => {
//     if (error) {
//       console.error("Error inserting checkboxes data:", error);
//       res.sendStatus(500); // Send an error response
//     } else {
//       console.log("Checkboxes data inserted successfully");
//       res.sendStatus(200); // Send a success response
//     }
//   });
// });
app.get("/show-course-data/:id", (req, res) => {
  const id = req.params.id;
  const query = `SELECT course_users.id, course_users.username, course_users.phone, course_users.email, the_courses_forsell.course_name, the_courses_forsell.price
  FROM course_users
  INNER JOIN course_products ON course_products.user_id = course_users.id
  INNER JOIN the_courses_forsell ON course_products.name LIKE CONCAT('%', the_courses_forsell.course_name, '%')
  WHERE course_users.id = ?`;

  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      res.sendStatus(500); // Send an error response
    } else {
      res.json(results); // Send the query results as JSON response
    }
  });
});
app.post("/submit-course", (req, res) => {
  const { username, usertel, usermail, selectedCourses } = req.body;
  // SQL statement for inserting form data into the main table
  const insertFormQuery = `INSERT INTO course_users (username, phone, email)
   VALUES ('${username}', '${usertel}', '${usermail}')`;

  // Execute the SQL statement to insert the form data into the main table
  connection.query(insertFormQuery, (error, result) => {
    // ...
    if (error) {
      console.error("Error inserting form data:", error);
      res.sendStatus(500); // Send an error response
    } else {
      console.log("Form data inserted successfully");
      // res.sendStatus(200); // Send a success response
    }
    const userId = result.insertId; // Get the ID of the inserted row in selected_beats

    if (selectedCourses.length > 0) {
      const selectedBeatsQuery =
        "INSERT INTO course_products (user_id, name) VALUES ?";
      const selectedBeatsValues = selectedCourses.map((beat) => [
        userId,
        beat.checkboxName,
      ]);
      connection.query(selectedBeatsQuery, [selectedBeatsValues], (err) => {
        if (err) {
          console.error("儲存選取的 beat 時發生錯誤:", err);
          return res.status(500).json({ error: "儲存選取的 beat 時發生錯誤" });
        }

        console.log("選取的 beat 已成功存入 MySQL 資料庫");
        // res.json({ success: true });
        res.json({ id: userId });
      });
    } else {
      // res.json({ success: true });
      res.json({ id: userId });
    }
  });
});
// app.post("/signup", (req, res) => {
//   const { name, mail, phone, account, password } = req.body;

//   // 在這裡進行密碼哈希處理
//   // const hashedPassword = mySQL.raw("SHA2(?, 256)", [password]);

//   const query =
//     "INSERT INTO account  (name, email, phone, account, password) VALUES (?, ?, ?, ?,?)";
//   connection.query(
//     query,
//     [name, mail, phone, account, password],
//     (error, results) => {
//       if (error) {
//         console.error("Error inserting data into MySQL database:", error);
//         res.status(500).json({ error: "An error occurred" });
//       } else {
//         // 生成JWT
//         const token = jwt.sign({ account }, "kobelebron1415", {
//           expiresIn: "1h",
//         });
//         res.status(200).json({ token });
//         console.log("register success");
//       }
//     }
//   );
// });
// app.post("/signup", (req, res) => {
//   const { name, mail, phone, account, password } = req.body;

//   // 使用 bcrypt 庫進行密碼哈希處理
//   bcrypt.hash(password, 10, (err, hashedPassword) => {
//     if (err) {
//       console.error("Error hashing password:", err);
//       res.status(500).json({ error: "An error occurred" });
//       return;
//     }

//     const query =
//       "INSERT INTO account  (name, email, phone, account, password) VALUES (?, ?, ?, ?, ?)";
//     connection.query(
//       query,
//       [name, mail, phone, account, hashedPassword], // 使用哈希後的密碼
//       (error, results) => {
//         if (error) {
//           console.error("Error inserting data into MySQL database:", error);
//           res.status(500).json({ error: "An error occurred" });
//         } else {
//           // 生成JWT
//           const token = jwt.sign({ account }, "kobelebron1415", {
//             expiresIn: "1h",
//           });
//           res.status(200).json({ token });
//           console.log("register success");
//         }
//       }
//     );
//   });
// });
// app.post("/signup", (req, res) => {
//   const { name, mail, phone, account, password } = req.body;

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

app.listen(3502, () => {
  console.log("port 3502 receiving request.");
});
