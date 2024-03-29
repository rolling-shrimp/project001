import { Strategy, ExtractJwt } from "passport-jwt";

export const thePassport = (passport) => {
  const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: process.env.SECRET,
  };

  passport.use(
    new Strategy(jwtOptions, (jwtPayload, done) => {
      // 在这里验证 JWT 中的用户信息
      // 示例中假设已经验证通过，并将用户信息作为 jwtPayload 返回
      const userID = jwtPayload.id;
    })
  );
};
