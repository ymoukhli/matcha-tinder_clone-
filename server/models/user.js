const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    userName: { type : String , required: true , max: 30},
    lastName: { type : String , required: true , max: 30},
    firstName: { type : String, required: true , max: 30},
    email: { type : String, required: true , max: 30},
    password: { type : String, required: true , max: 30},
    emailVerified: {type: Boolean, default:false},
    token: { type : String },
    config: { type : Schema.Types.ObjectId, ref : "UserConfig" },
    passions: String,
    userGender: String,
    genderPreference: String,
    biography: String,
})

module.exports = mongoose.model('User', user);