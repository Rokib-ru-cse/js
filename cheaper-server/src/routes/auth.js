const express = require("express");

const route = express.Router();
const { signin, signup } = require("../controllers/auth");
const {validateSignupRequest, isRequestValidated, validateSigninRequest} = require('../validators/auth')
const { requireSignin } = require("../middleware/index");

route.post("/signin",validateSigninRequest,isRequestValidated, signin);
route.post("/signup",validateSignupRequest,isRequestValidated, signup);

route.get("/p", requireSignin, (req, res) => {
  res.send("signin");
});
 
module.exports = route;
     