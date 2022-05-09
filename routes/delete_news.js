const express =require('express');
const router = express.Router();
const app=express();
module.exports = router;

const database=require('./database');



router.delete('/delete_news_feed',(req,res)=>{
    
     let sql = 'DELETE  from feedback';

    database.query(sql,(err,result)=>{
         if (err){
            console.log(err,'sorry no data was deleted');

         }
         if(result.length>0){
             res.send({
             message: 'all news Feed Deleted..!!',
             data:result
             })
             
         }
     });

  
    

    
});