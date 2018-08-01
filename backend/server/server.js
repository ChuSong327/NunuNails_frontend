const createError = require("http-errors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
import mongoose from "mongoose";

const express = require("express");
const app = express();

//Use middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
})); 
app.use(cookieParser());
app.use(bodyParser.json());

//db connection
mongoose.connect("mongodb://localhost/nununails");

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB database connection established successfully!");
})

//catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

//error handler
app.use((err, req, res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err: {};
    res.status(err.status || 500);
    res.render("error");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("App is listening on port: " + port);
})
