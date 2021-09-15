const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/matcha')
    .then(res => console.log('mongodb connected', res))
    .catch(e => console.log(`couldn't connect to database`, e))

const db = mongoose.connection;

module.exports =  db;