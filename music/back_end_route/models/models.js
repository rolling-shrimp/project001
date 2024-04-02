import mongoose from "mongoose";
import bcrypt from "bcrypt";
const { Schema } = mongoose;

//the UserModel
const UserModel = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  mail: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 100,
  },
  account: { type: String, required: true, minLength: 6, maxLength: 20 },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 1024,
  },

  role: {
    type: String,
    enum: ["student", "instructor"],
    required: true,
  },
});

UserModel.methods.isStudent = function () {
  return this.role == "student";
};

UserModel.methods.isIntructor = function () {
  return this.role == "instructor";
};

// mongoose User schema middleare
// while executive UserModel saving data process, hashing password through bcrypt will be executed first
UserModel.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  } else {
    return next();
  }
});

UserModel.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return cb(err, isMatch);
    }
    cb(null, isMatch);
  });
};

export const Users = mongoose.model("User", UserModel);

// the CourseModel
const CourseModel = new Schema({
  id: { type: String },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: { type: Date, required: true },
  place: {
    type: String,
    default: "700台南市中西區神農街2巷29號 (民族路大苑子飲料店對面的巷子)",
  },
  students: {
    type: [String],
    default: [],
  },
});
export const Course = mongoose.model("Course", CourseModel);
