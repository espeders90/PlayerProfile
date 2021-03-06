//config/passport.js

//load everyhting from passport
var LocalStrategy = require('passport-local').Strategy;

//Load up our SCOUTER model has to be USER for PASSPORT
var User = require('../app/models/user');

module.exports = function(passport) {
    //pasport session setup
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    //LOCAL SIGN UP
    passport.use('local-signup', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true //allows us to pass back the entire request to the callback

        },

        function(req, email, password, done) {
           
            //Scouter.find wont fire unless data is sent back
            process.nextTick(function() {

                User.findOne({ 'local.email': email }, function(err, user) {
                    if (err)
                        return done(err);

                    //check to see if theres already a scout with that email
                    if (user) {
                        return done(null, false, req.flash('signupMessage', "That email is already taken"));
                    }
                    else {
                        //if theres no user w/ tht email create new one

                        var newUser = new User();

                        //set credentials for user
                        newUser.local.email = email;
                        newUser.local.password = newUser.generateHash(password);
                        newUser.info.contact = req.body.contact;
                        newUser.info.firstName = req.body.firstName;
                        newUser.info.lastName = req.body.lastName;
                        newUser.info.areaCovered = req.body.areaCovered;
                        //save the user
                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                });
            });
        }));
        



    //LOCAL SIGN IN
    passport.use('local-login', new LocalStrategy({

            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, email, password, done) { //gettin email and password from the form

            User.findOne({ 'local.email': email }, function(err, User) {
                if (err)
                    return done(err);
                //if no User
                if (!User)
                    return done(null, false, req.flash('loginMessage', 'No Scout found.'));
                //if password is not valid
                if (!User.validPassword(password))
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
                //correct info
                return done(null, User);
            });
        }
    ));
};
