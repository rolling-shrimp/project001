import bcrypt from "bcrypt";

// generate the hash password
export const hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

// comparring the hash password
export const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};
