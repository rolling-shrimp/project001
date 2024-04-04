import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import passport from "passport";
import { thePassport } from "./middlewear/passport.js";
thePassport(passport);
import { auth } from "./middlewear/auth.js";
import { loginauth } from "./middlewear/loginauth.js";
import { Course } from "./models/models.js";
import cors from "cors";
// import { json } from "body-parser";

const app = express();
dotenv.config();

mongoose
  .connect(process.env.DB_Connect, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect to mongodb atlas.");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use("/api/account", auth);
app.use(
  "/api/member",
  passport.authenticate("jwt", { session: false }),
  loginauth
);
app.get("/courses", (req, res) => {
  Course.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      console.error(e);
    });
});

app.listen(3502, () => {
  console.log("port 3502 receiving request.");
});
