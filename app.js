import express from "express";
// var path = require("path");
import path from "path";
// var cookieParser = require("cookie-parser");
import cookieParser from "cookie-parser";
// var logger = require("morgan");
import logger from "morgan";

// var indexRouter = require("./routes/index");
import indexRouter from "./routes/index.js";

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// I don't need to use this for now because no front end. 
// app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// module.exports = app;
export default app;
