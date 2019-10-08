const express = require('express');
const bodyParser = require('body-parser');  //trả về một function hoạt động như một middleware
const mongoose = require('mongoose');
require("dotenv").config();

var cors = require("cors");
cors = require("cors");

//connect DB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

const taskRoute = require("./api/routes/tasks.route");

const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.options("*", cors());


app.get("/", (req, res, next) => {
  res.send('Test');
});

app.use("/task", taskRoute);

app.listen(port, function () {
  console.log('server : ' + port);
});


// request là yêu cầu từ client lên server & response là server trả kết quả về cho client