const route = require("express").Router();
const {
  userSignupController,
  userSigninController,
} = require("../controllers/userAuthControllers");
const {
  signupValidation,
  isAuthValidated,
  signinValidation,
} = require("../validators/authValidator");

route.post("/signup", signupValidation, isAuthValidated, userSignupController);
route.post("/signin", signinValidation, isAuthValidated, userSigninController);

module.exports = route;
