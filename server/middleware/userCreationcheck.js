const User = require('../models/user.js');

const check = (req, res, next) => {
    // if (!(req.body.userName && req.body.email && req.body.firstName && req.body.lastName && req.body.password))
    //     return res.status(422).send('send something good please')
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email))
    {
        console.log("verified");
    }
    console.log(req.body.email)
    let oldUser = User.findOne({email: req.body.email})
    if (oldUser)
    {
        return res.status(409).json({ message : 'email'})
    }
    oldUser = User.findOne({userName: req.body.userName})
    if (oldUser)
    {
        return res.status(409).json({ message : 'userName'})
    }
    next();
}

module.exports = check;