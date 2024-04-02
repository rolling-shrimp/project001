import { Router } from "express";
const router = Router();
import { Course } from "../models/models.js";

router.use((req, res, next) => {
  console.log("receiving request after authentication");
  next();
});

// find the course which teacher has add
router.get("/instructor/:instructor_id", (req, res) => {
  let { instructor_id } = req.params;
  Course.find({ instructor: instructor_id })
    .populate("instructor", ["username", "email"])
    .then((data) => {
      res.send(data);
    })
    .catch(() => {
      res.status(500).send("Cannot get course data.");
    });
});

// teacher create the course
router.post("/", async (req, res) => {
  console.log("WE are herere....");
  // validate the inputs before making a new course
  // const { error } = courseValidation(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  let { title, description, price, date } = req.body;

  let newCourse = new Course({
    title,
    description,
    price,
    date,
  });

  try {
    await newCourse.save();
    res.status(200).send("New course has been saved.");
  } catch (err) {
    res.status(400).send("Cannot save course.");
  }
});

//student enroll course
router.post("/enroll/:_id", async (req, res) => {
  let { _id } = req.params;
  let { user_id } = req.body;
  try {
    let course = await Course.findOne({ _id });
    course.students.push(user_id);
    await course.save();
    res.send("報名成功，請於當天準時出席");
  } catch (err) {
    res.send(err);
  }
});

router.get("/musicCourr/:id", (req, res) => {
  const id = req.params.id;
  const query = `SELECT account.id, the_courses_forsell.course_name, the_courses_forsell.price
FROM account
INNER JOIN member_buy_course ON member_buy_course.user_id = account.id
INNER JOIN the_courses_forsell ON member_buy_course.name LIKE CONCAT('%', the_courses_forsell.course_name, '%')
WHERE account.id = ?`;
  connection.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});
router.post("/memberbuying", (req, res) => {});

router.post("/memberbuycourse", (req, res) => {
  const { id, selectedCourse } = req.body;

  if (selectedCourse.length > 0) {
    const selectedBeatsQuery =
      "INSERT INTO member_buy_course (user_id, name) VALUES ?";
    const selectedBeatsValues = selectedCourse.map((course) => [
      id,
      course.checkboxName,
    ]);
    connection.query(selectedBeatsQuery, [selectedBeatsValues], (err) => {
      if (err) {
        console.error("儲存選取的 beat 時發生錯誤:", err);
        return res.status(500).json({ error: "儲存選取的 beat 時發生錯誤" });
      }

      console.log("選取的 beat 已成功存入 MySQL 資料庫");
      // res.json({ success: true });
      res.json({ id: id, beats: selectedCourse });
    });
  } else {
    // res.json({ success: true });
    res.json({ id: id, beats: selectedCourse });
  }
});

export const loginauth = router;
