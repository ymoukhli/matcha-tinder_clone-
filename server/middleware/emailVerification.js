const nodemailer = require('nodemailer');

const sendEmailValidation = async (req, res, next) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "tmatcha88@gmail.com", // generated ethereal user
        pass: "Matcha.88", // generated ethereal password
      },
    });

    let info = transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "ymoukhli.1337@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      }, (err, info) => {console.log("message attempt", err, info)});
      next();
}

module.exports = sendEmailValidation