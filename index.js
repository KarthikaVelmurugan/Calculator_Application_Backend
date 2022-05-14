const express = require("express");
const  calculator  = require("./services/Calculator.service");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/test", (req, res) => {
  res.send("Server is still running..");
});

//Call the caculator API

app.post("/", calculator.calculator);

app.listen(3002, () => {
  console.log("Server is started in the port 3002");
});
