const User = require("../models/User");

exports.userSignupController = (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({
    username,
    email,
    password,
  });
  user
    .save()
    .then((data) => {
      return res.status(201).json({
        data,
      });
    })
    .catch((e) => {
      return res.status(400).json({
        error: e.message,
      });
    });
};

exports.userSigninController = (req,res,next)=>{
    const {email,password} = req.body
    User.findOne({email:email})
    .then(user=>{
        if(user.password == password){
            return res.status(200).json({
                user:"login successfully"
            })
        }
        else{
            return res.status(400).json({
                error:"wrong password"
            })
        }
    })
    .catch(e=>{
        return res.status(400).json({
            error:"user not found"
        })
    })
}