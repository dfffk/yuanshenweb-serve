var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

//连接数据库
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const dbURI = "mongodb://121.4.73.99:37258/yuanshen"; //yuanshen为连接的数据库名称
//尝试连接数据库，连接成功之后才会触发connection事件
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", function () {
  console.log("Mongoose connected to " + dbURI);
});

//引入users.js路由文件
let figureRouter = require("./routes/figureRoute.js");

//创建一个项目服务器对象
let app = express();

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

//对项目的日志、cookie的一些默认配置
app.use(logger("dev")); //采用日志模式为开发模式
app.use(express.json()); //自动对前端传来的数据进行json处理
app.use(express.urlencoded({ extended: false })); //对url进行解码
app.use(cookieParser()); //解析cookie
app.use(express.static(path.join(__dirname, "public"))); //配置Express项目的前端资源文件夹，配置了之后就可以通过服务器的地址来访问public文件夹下的前端资源
app.use(express.static(path.join(__dirname, "dist"))); //配置Express项目的前端资源文件夹，配置了之后就可以通过服务器的地址来访问public文件夹下的前端资源
app.use("/figures", figureRouter);
app.use(cors());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(3333, () => {
  console.log("服务器已启动,3333");
});
