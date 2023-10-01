const Joi = require("joi");
const register = (data) => {
  const Schema = Joi.object({
    name: Joi.string()
      .pattern(/^[A-Za-z\s]+$/)

      .min(2)
      .max(50)
      .required(),
    mail: Joi.string().min(6).max(50).email().required(),
    phone: Joi.string()
      .pattern(/^\d{10}$/) // 使用正則表達式驗證電話號碼，這裡假設電話號碼是 10 位數字
      .required(),
    account: Joi.string().min(5).max(50).required(),
    password: Joi.string().min(6).max(255).required(),
  });
  return Schema.validate(data);
};
const login = (data) => {
  const Schema = Joi.object({
    account: Joi.string().min(5).max(10).required(),
    password: Joi.string().min(6).max(255).required(),
  });
  return Schema.validate(data);
};
module.exports.register = register;
module.exports.login = login;
