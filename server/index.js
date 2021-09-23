const express = require("express");
const app = express("app");
const db = require("./db/index.js");
const port = "3030";
const cors = require("cors");
const user = require("./controller/user.js");
const fillInfo = require("./controller/FillInfo.js");
const auth = require("./middleware/auth.js");
const check = require("./middleware/userCreationcheck.js");
const multer = require("multer");

const upload = multer({dest: './'})
db.on("error", (e) => console.log(`error in data base: ${e.message}`));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get("/", (req, res, next) => {
  console.log("getting");
});
app.post("/creatUser", check,user.createUser);
app.post("/login", user.longIn);
app.post("/FillInfo", fillInfo);
app.post("/hi", auth, (req, res) => {
  res.status(200).send("Welcome");
});
app.post("/uploadFile", upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log("trigered")
  res.send(req.file)
});

app.listen(port, () => {
  console.log(`app listening on prot ${port}`);
});
