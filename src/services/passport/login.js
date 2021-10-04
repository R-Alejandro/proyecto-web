import passport from "passport";
import {Strategy} from "passport-local";
import User from "../../api/users/model.js";

//serializer -> save user in browser
passport.serializeUser((user, done) => {
    done(null, user.email);
});

passport.deserializeUser(async (email, done) => {
    const user = await User.findUser(email);
    done(null, user);
});

passport.use(new Strategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done)=>{
    //here the user model
    const userToValidate = await User.findUser(email);

    if (!userToValidate){
        return done(null, false);
    }
    if (!userToValidate.comparePassword(password)) {
        return done(null, false);
    }
    //true
    done(null, userToValidate);
}));

export default{
    passport
}