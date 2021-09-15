const User = require('../models/user.js');
const jwt = require('jsonwebtoken');

createUser = async(req, res, next) => {
    
    try {
        console.log('//////////////////////////////////////////')
        const {firstName, lastName, email, password, userName } = req.body;

        if (!(email && password && firstName && lastName && userName))
        {
            res.status(400).send("all input is required");
        }
        let oldUser = await 
        User.findOne({
            $and: [
                {email},
                {userName}
            ]
        })
        if (oldUser) {
            return res.status(409).send("email already exist");
        }
        
        const user = await User.create({
            firstName, lastName, email, password, userName
        });
        
        const token = jwt.sign({ user_id: user._id, email }, 'soso', { expiresIn: "2h"});
        user.token = token;
        console.log(token)
        console.log(user.token)
        res.status(200).json(user);
    }
    catch (err){

        console.log(err);
        res.status(500)
    }
    
    
}

longIn = async( req, res ) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        const user = await User.findOne( { email });

        if (user && password === user.password )
        {
            const token = jwt.sign({user_id: user._id, email}, 'soso', { expiresIn: "2h"})

            user.token = token;
            
            return res.status(200).json(user);
        }
        return res.status(400).send("invalid credentials");
    }
    catch (e) {
        console.log(e)
    }
};

/*
User.findOne({
    $and: [
        {email},
        {userName}
    ]
})
*/

module.exports = { createUser , longIn}