const express =require('express');
const router = express.Router();
const app=express();
module.exports = router;

const database=require('./database');

router.put('/officer/:Officer_id',(req,res)=>{ 
    console.log(req.body,'updatedata');

    let id=req.body.Officer_id;
    let Campus_id=req.body.Campus_id;
    let First_name=req.body.First_name;
    let Last_name=req.body.Last_name;
    let Gender=req.body.Gender;
    let Cellphone_number=req.body.Cellphone_number;
    let Email=req.body.Email;
    let Password=req.body.Password;

    let qr = `update officer set Campus_id='${Campus_id}',First_name='${First_name}',Last_name='${Last_name}',Gender='${Gender}',Cellphone_number='${Cellphone_number}',Email='${Email}',Password='${Password}' WHERE Officer_id ='${id}'`;

    database.query(qr,(err,result)=>{
        if(err){console.log(err);}

        res.send({
            message:'date updated'
        });
    });
   })
 