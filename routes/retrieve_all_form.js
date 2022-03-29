const express =require('express');
const router = express.Router();
const app=express();
module.exports = router;

const database=require('./database');



//onst database=require('./database');
// retrieve entered student 

router.get('/record',(req,res)=>{

    
    let qr = `select * from record where Form_check='Yes' and isAllowedEntrence= 'null'`;
    
    database.query(qr,(err,result)=>{
    
    if(err){console.log(err);}
    
    if(result.length>0)
       {
        res.send({
            message:'get records data',
            data:result
            
        });
       }
       else 
       {
            res.send({
             message:'data not found'
        })
      }
    
    });
       
});