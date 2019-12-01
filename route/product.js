var express = require("express");
var mysql = require("mysql");
var db = require("../db");
var productRouter = express();

var connection = db.connect();

productRouter.use(express.json());

productRouter.get("/",(request,response)=>{
    var querytext = `select * from product`;
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

productRouter.delete("/:id",(request,response)=>{
    var id = request.params.id;
    var querytext = `delete from product where id =${id}`;
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

productRouter.put("/:id",(request,response)=>{
    var id = request.params.id;
    var {title,description,price} = request.body;
    var querytext = `update product set title='${title}',description='${description}',price=${price} where id=${id}`;
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

productRouter.post("/",(request,response)=>{
    var {title,description,price} = request.body;
    var querytext = `insert into product (title ,description,price) values ('${title}','${description}',${price})`;
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

module.exports = productRouter;