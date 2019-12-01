var express = require("express");
var mysql = require("mysql");

var db = require("../db");
var categoryRouter = express();

var connection = db.connect();
categoryRouter.use(express.json());

categoryRouter.get("/",(request,response)=>{
    var querytext = `select * from category`;
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

categoryRouter.delete("/:id",(request,response)=>{
    var id = request.params.id;
    var querytext = `delete from category where id =${id}`;
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

categoryRouter.put("/:id",(request,response)=>{
    var id = request.params.id;
    var {title,description} = request.body;
    var querytext = `update category set title='${title}',description='${description}' where id=${id}`;
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

categoryRouter.post("/",(request,response)=>{
    var {title,description,price} = request.body;
    var querytext = `insert into category (title ,description) values ('${title}','${description}')`;
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

module.exports = categoryRouter;