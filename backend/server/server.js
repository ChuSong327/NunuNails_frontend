const createError = require("http-errors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const express = require("express");
const app = express();

//import routers
const productsRouter = require("./routes/products");
const usersRouter = require("./routes/users");

//Use middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
})); 
app.use(cookieParser());
app.use(bodyParser.json());

//db connection
mongoose.connect("mongodb://localhost:27017/nununails", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB database connection established successfully!");
})

//routes
app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);

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
