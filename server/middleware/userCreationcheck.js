const User = require('../models/user.js');

const check = (req, res, next) => {
    // if (!(req.body.userName && req.body.email && req.body.firstName && req.body.lastName && req.body.password))
    //     return res.status(422).send('send something good please')
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email))
    {
        console.log("verified");
    }
    next();
}

module.exports = check;