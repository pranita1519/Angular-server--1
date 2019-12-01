var express = require("express");
var app = express();
var mysql = require("mysql");
var productRouter = require("./route/product");
var categoryRouter = require("./route/category");
var userRouter = require("./route/user");


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Method", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use("/product",productRouter);
app.use("/category",categoryRouter);
app.use("/user",userRouter);

app.listen(9898,()=>{
    console.log("Server started on port 9898");
})
