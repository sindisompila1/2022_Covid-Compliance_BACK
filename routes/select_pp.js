const express =require('express');
const router = express.Router();
const app=express();
module.exports = router;

const database=require('./database');


router.get('/view/:pic_name',(req,res)=>{
  let pic_name = req.params.pic_name;
  res.download('./public/pp/'+pic_name);
})
