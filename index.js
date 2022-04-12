
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
const create = require('./routes/create_officer');
const update_officer = require('./routes/update_officer');
const view_officer = require('./routes/retrieve_all_officers');
const entered_student = require('./routes/retrieve_entered_student');
const upload_image = require('./routes/upload_image');
//instantiating 
app.use(cors());
app.use(bodyparser.json());


//creating database connection

const db=mysql.createConnection({host:'localhost',user:'root',password:'',database:'bus2',port:'3306'});

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
app.use('/create_officer',create);
app.use('/update_officer',update_officer);
app.use('/retrieve_all_officers',view_officer);
app.use('/retrieve_entered_student',entered_student);
app.use('/upload_image',upload_image);





//server




app.listen(3000,()=>{console.log('server running')})