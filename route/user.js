var express = require("express");
var mysql = require("mysql");
var db = require("../db");
var userRouter = express();

var connection = db.connect();

userRouter.use(express.json());

userRouter.get("/",(request,response)=>{
    var querytext = `select * from user`;
    connection.query(querytext,(err,result)=>{
        if(err == null)
        {
            response.send(JSON.stringify(result));
        }
        else
        {
            response.send(JSON.stringify(err));
        }
    })
});

userRouter.delete("/:id",(request,response)=>{
    var id = request.params.id;
    var querytext = `delete from user where id =${id}`;
    connection.query(querytext,(err,result)=>{
        if(err == null)
        {
            response.send(JSON.stringify(result));
        }
        else
        {
            response.send(JSON.stringify(err));
        }
    })
});

userRouter.put("/:id",(request,response)=>{
    var id = request.params.id;
    var {name,phone} = request.body;
    var querytext = `update user set name='${name}',phone='${phone}'where id=${id}`;
    connection.query(querytext,(err,result)=>{
        if(err == null)
        {
            response.send(JSON.stringify(result));
        }
        else
        {
            response.send(JSON.stringify(err));
        }
    })
});

userRouter.post("/",(request,response)=>{
    var {name,phone} = request.body;
    var querytext = `insert into user (name,phone) values ('${name}','${phone}')`;
    connection.query(querytext,(err,result)=>{
        if(err == null)
        {
            response.send(JSON.stringify(result));
        }
        else
        {
            response.send(JSON.stringify(err));
        }
    })
});

module.exports = userRouter;