
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


router.post('/user',(req,res)=>{

    
   
    console.log(req.body,'createdata');

    //instatiating user variables


    let userId =req.body.userId;
    let lastName=req.body.lastName;
    let campId=req.body.campId;
    let gender=req.body.gender;
    let type=req.body.type;
    let cellphone=req.body.cellphone;
    let email=req.body.email;
    let password=req.body.password;
    let firstNames=req.body.firstNames;

//sending the variables to the database



let qr=`insert into user(User_id,Camp_id,First_name,Last_name,Gender,Type,Cellphone_number,Email,Password) values('${userId}','${campId}','${firstNames}','${lastName}','${gender}','${type}','${cellphone}','${ email}','${password}')`;

database.query(qr,(err,result)=>{

    if(err){console.log(err);}
   console.log(result,'result')

        res.send({
            message:'data inserted'
        });

        res.send({message:'data not inserted'});

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
    //next();

});
