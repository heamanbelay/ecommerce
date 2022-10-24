const express = require("express");
const app = express();
const bcrypt = require('bcrypt-nodejs');
const ErrorHandler = require ("./middleware/error")
// const path = require("path");
const cookieParser = require("cookie-parser");


app.use(express.json());
app.use(cookieParser());

//route imports
const product = require("./routes/productRoute");
const user = require("./routes/UserRoute");
const order = require("./routes/orderRoutes");


app.use("/api/v2",product);

app.use("/api/v2",user);

app.use("/api/v2",order);

app.use(ErrorHandler);

module.exports = app


