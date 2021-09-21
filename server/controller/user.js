const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const { default: userEvent } = require("@testing-library/user-event");

createUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, userName } = req.body;
   
    if (!(email && password && firstName && lastName && userName)) {
      res.status(400).send("all input is required");
    }
    let oldUser = await User.findOne({email,userName});
    
  if (oldUser && oldUser.email === email) 
    return res.status(409).json({ email : 'email', userName : 'userName'})
    oldUser = await User.findOne({
      $or: [
          {email},
          {userName}
      ]
  })
  if (oldUser && oldUser.email === email) 
        return res.status(409).json({ email : 'email'})
  if (oldUser && oldUser.userName === userName) 
        return res.status(409).send({ userName : 'userName'})
    
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      userName,
    });

    const token = jwt.sign({ user_id: user._id, email }, "soso", {
      expiresIn: "2h",
    });
    user.token = token;
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

longIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(400).send("All input are required");
    }
    let user = await User.findOne({ email });
    if (user === null) user = await User.findOne({userName: email })
    if (user && password === user.password) {
      const token = jwt.sign({ user_id: user._id, email: user.email }, "soso", {
        expiresIn: "2h",
      });
      user.token = token;
      return res.status(200).json(user);
    }
    
    if (user && password !== user.password) 
      return res.status(409).json({ password : 'password'})
    return res.status(409).json({ email : 'email'});
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createUser, longIn };
