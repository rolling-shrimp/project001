import { Strategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";

dotenv.config();
import { Users } from "../models/models.js";
export const thePassport = (passport) => {
  const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: process.env.SECRET,
  };

  passport.use(
    new Strategy(jwtOptions, async (jwtPayload, done) => {
      // authenticate the information of jwt
      // if authenticated, the user's infromation will be sent as jwtPayload

      try {
        const userID = jwtPayload.id;
        const user = await Users.findOne({ _id: userID });

        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (err) {
        done(err, false);
      }
    })
  );
};
