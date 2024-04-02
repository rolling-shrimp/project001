import { Strategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";

dotenv.config();

export const thePassport = (passport) => {
  const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: process.env.SECRET,
  };

  passport.use(
    new Strategy(jwtOptions, (jwtPayload, done) => {
      // authenticate the information of jwt
      // if authenticated, the user's infromation will be sent as jwtPayload
      const userID = jwtPayload.id;
      User.findOne({ _id: userID }, (err, user) => {
        if (err) {
          return done(err, false);
        }
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      });
    })
  );
};
