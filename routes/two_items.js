const express =require('express');
const router = express.Router();
const app=express();
module.exports = router;

const database=require('./database');

// get single data

router.get('/record/:User_id',(req,res)=>{
    let gID = req.params.User_id;
    let date = new Date();
    
    let qr = `select Form_check from record where Form_check='Yes' and  Date ='${date.toDateString()}' and  User_id = '${gID }' `;
    
    
    database.query(qr,(err,result)=>{
    
      if(err){console.log(err);
        console.log(result,'result')
        res.send({message:'Unsuccessful'});
        } 
        else{
            if(result.length>0)
            {
            res.send({
                message:'Successful',
                data:result
            });
          }
          else{

            res.send({
                message:'Unsuccessful',
                data:result
            });
          }
        }

            
    }); 
       
      
 

  });
