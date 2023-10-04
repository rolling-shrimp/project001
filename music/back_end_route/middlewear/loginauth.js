const router = require("express").Router();
const connection = require("../mysqlDB");
router.use((req, res, next) => {
  console.log("receiving request after authentication");
  next();
});
router.get("/music", (req, res) => {
  res.send("hi welcome");
});
router.get("/coursesMe/:id", (req, res) => {
  const id = req.params.id;
});
router.get("/music/:id", (req, res) => {
  const id = req.params.id;
  const query = `SELECT account.id, account.name, account.phone, account.email, beatforsell.product_name, beatforsell.price
FROM account
INNER JOIN memeber_buy_beat ON memeber_buy_beat.user_id = account.id
INNER JOIN beatforsell ON memeber_buy_beat.beat_option LIKE CONCAT('%', beatforsell.product_name, '%')
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
router.post("/memberbuying", (req, res) => {
  const { id, selectedBeats } = req.body;

  console.log(req.body);
  console.log(id);
  console.log(selectedBeats);

  if (selectedBeats.length > 0) {
    const selectedBeatsQuery =
      "INSERT INTO memeber_buy_beat (user_id, beat_option) VALUES ?";
    const selectedBeatsValues = selectedBeats.map((beat) => [
      id,
      beat.checkboxName,
    ]);
    connection.query(selectedBeatsQuery, [selectedBeatsValues], (err) => {
      if (err) {
        console.error("儲存選取的 beat 時發生錯誤:", err);
        return res.status(500).json({ error: "儲存選取的 beat 時發生錯誤" });
      }

      console.log("選取的 beat 已成功存入 MySQL 資料庫");
      // res.json({ success: true });
      res.json({ id: id, beats: selectedBeats });
    });
  } else {
    // res.json({ success: true });
    res.json({ id: id, beats: selectedBeats });
  }
});

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

module.exports = router;
