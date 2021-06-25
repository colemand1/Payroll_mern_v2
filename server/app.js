var createError = require("http-errors")
var express = require("express")
var path = require("path")
var bodyParser = require('body-parser')
var cookieParser = require("cookie-parser")
var logger = require("morgan")
var mongoose = require("mongoose")
var cors = require("cors")


//Routers
var indexRouter = require("./routes/index")
var usersRouter = require("./routes/users")
var employeeRouter = require("./routes/employees")
var textRouter = require('./routes/texts')
var addressRouter = require("./routes/address")

var app = express()
console.log("Port: ", app.PORT)
const uri = "mongodb+srv://dcoleman_3:kqPE5ikl3MTMqCDm@e428staffing.rq972.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connectionParams={
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true 
}

var timestamp = new Date()

mongoose.connect(uri,connectionParams)
  .then( () => {
      console.log('Connected to database ')
      console.log("Current Timestap: ", timestamp)
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. \n${err}`);
  })
// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")


app.use(logger("dev"))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.json())
app.use(cors())
app.use("/", indexRouter)
app.use("/users", usersRouter)
app.use("/employees", employeeRouter)
app.use("/text", textRouter)
app.use("/address", addressRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});



// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

