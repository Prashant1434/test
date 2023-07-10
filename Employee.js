const express=require('express');
const mysql=require('mysql');
const appforemp=express.Router();
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'manager',
    database:'mydb'
})

appforemp.get("/:e_name",(request,response)=>{
    const query=`select * from Employee_Tb where e_name='${request.params.e_name}';`

    connection.query(query,(error,result)=>{
        if(error==null)
        {
            response.send(JSON.stringify(result));
        }
        else
        {
            response.send(JSON.stringify(error));
        }
    })
})

appforemp.post("/",(request,response)=>{
    const query=`insert into Employee_Tb(e_name,email,dname,doj) values('${request.body.e_name}','${request.body.email}','${request.body.dname}','${request.body.doj}');`

    connection.query(query,(error,result)=>{
        if(error==null)
        {
            response.send(JSON.stringify(result));
        }
        else
        {
            response.send(JSON.stringify(error));
        }
    })
})

appforemp.delete("/:doj",(request,response)=>{
    const query=`delete from Employee_Tb where doj='${request.params.doj}';`

    connection.query(query,(error,result)=>{
        if(error==null)
        {
            response.send(JSON.stringify(result));
        }
        else
        {
            response.send(JSON.stringify(error));
        }
    })
})

appforemp.put("/:id",(request,response)=>{
    const query=`update Employee_Tb set dname='${request.body.dname}', doj='${request.body.doj}' where id=${request.params.id};`

    connection.query(query,(error,result)=>{
        if(error==null)
        {
            response.send(JSON.stringify(result));
        }
        else
        {
            response.send(JSON.stringify(error));
        }
    })
})



module.exports=appforemp;


