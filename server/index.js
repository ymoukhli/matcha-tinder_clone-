const express = require("express");
const app = express("app");
const db = require("./db/index.js");
const port = "3030";
const cors = require("cors");
const controller = require("./controller/user.js");
const auth = require("./middleware/auth.js");
const verif = require("./middleware/emailVerification.js");

db.on("error", (e) => console.log(`error in data base: ${e.message}`));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
// app.use('/', (req, res, next)=> {
//     console.log('getting');
//     res.send(req.method)
// })

app.get("/", (req, res, next) => {
  console.log("getting");
});
app.post("/creatUser", controller.createUser);
app.post("/login", controller.longIn);
app.post("/hi", auth, (req, res) => {
  res.status(200).send("Welcome");
});

app.listen(port, () => {
  console.log(`app listening on prot ${port}`);
});
