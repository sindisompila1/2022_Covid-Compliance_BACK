
//declaring variables

const express =require('express');
const bodyparser=require('body-parser');
const cors = require('cors');
const app=express();
const mysql=require('mysql2');

const router = express.Router();
const viewall = require('./routes/viewall');
const delete_user =  require('./routes/delete');
const add=require('./routes/add_user');
const view_user=require('./routes/view_user');
const update=require('./routes/update');
const login=require('./routes/login');

//instantiating 
app.use(cors());
app.use(bodyparser.json());


//creating database connection

const db=mysql.createConnection({host:'localhost',user:'root',password:'',database:'covid_compliance',port:'3306'});

//check the database  connection

db.connect(err=>{
    if(err) {
        console.log(err,'dberr');}
        else{
            console.log('database connected.....');
        }
    

});
app.use('/viewall',viewall);
app.use('/delete',delete_user);
app.use('/view_user',view_user);
app.use('/add_user',add);
app.use('/update',update);
app.use('/login',login);

/* viewing everything from the user table
app.get('/user',(req,res)=>{
 
    let sql = 'select * from user';
    db.query(sql,(err,result)=>{
        if (err)
        {
            console.log(err,'errs');

        }
        if(result.length>0)
        {
            res.send({
                message:'all user data',
                data:result
            });
        }
    });
});
*/

 //delete a record from the user table
/*app.delete('/user/:User_id',(req,res)=>{
     let qID =req.params.User_id;
      
     let qr = `delete from user where User_id = '${qID}'`;
     db.query(qr,(err,result)=>{

        if(err) {console.log(err);}
    
           res.send(
               {
                   message:'data deleted '
               }
           )

     });



});
*/






//server




app.listen(3000,()=>{console.log('server running')})