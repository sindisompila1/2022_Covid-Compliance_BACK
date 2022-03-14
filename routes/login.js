
const express =require('express');
const bodyparser=require('body-parser');
const cors = require('cors');
const mysql=require('mysql2');
const router = express.Router();
const app=express();
module.exports = router;

app.use(cors());
app.use(bodyparser.json());

const database=require('./database');


router.get('/user',(req,res)=>{

    
   
    console.log(req.body,'createdata');

    //instatiating user variables


    let userId =req.body.userId;
    let password=req.body.password;
   

//sending the variables to the database



let qr=`select * from user where User_id ='${userId}' and Password='${password}' limit 1 `;

database.query(qr,(err,result)=>{

    if(err){console.log(err);}
   console.log(result,'result')
   if(result.length>0)
   {
    res.send({
        message:'user found',
        data:result
        
    });
   }
   else 
   {
        res.send({
         message:'no user'
    })
  }

});

const render = res.render;
    const send = res.send;
    res.render = function renderWrapper(...args) {
        Error.captureStackTrace(this);
        return render.apply(this, args);

    };

    res.send = function sendWrapper(...args) {
        try {
            send.apply(this, args);
        } catch (err) {
            console.error(`Error in res.send | ${err.code} | ${err.message} | ${res.stack}`);
        }
    };
    

});
