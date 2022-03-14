const express =require('express');
const router = express.Router();
const app=express();
module.exports = router;

const database=require('./database');

// update   
router.put('/user/:User_id',(req,res)=>{ 
    console.log(req.body,'updatedata');

    let Id=req.params.User_id;
    let First_name=req.body.First_name;
    let Last_name=req.body.Last_name;
    let Gender=req.body.Gender;
    let Type=req.body.Type;
    let Cellphone_number=req.body.Cellphone_number;
    let Email=req.body.Email;
    let Password=req.body.Password;

    let qr = `update user set First_name ='${First_name}',Last_name='${Last_name}',Gender='&{Gender}',Type='${Type}',Cellphone_number='${Cellphone_number}',Email='${Email}',Password='${Password}' WHERE User_id ='${Id}'`;

    database.query(qr,(err,result)=>{
        if(err){console.log(err);}

        res.send({
            message:'data updated'
        });
    });
   })