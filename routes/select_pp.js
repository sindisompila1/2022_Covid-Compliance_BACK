const express =require('express');
const router = express.Router();
const app=express();
module.exports = router;

const database=require('./database');


router.get('/view/:pic_id',(req,res)=>{
  let gID = req.params.pic_id;
  res.download('./public/images/'+gID);
})
