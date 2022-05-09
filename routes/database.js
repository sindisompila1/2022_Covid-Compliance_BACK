const mysql=require('mysql2');
const db=mysql.createConnection({host:'localhost',user:'root',password:'',database:'covid_compliance',port:'3306'})

//check the database  connection

db.connect(err=>{
    if(err) {
        console.log(err,'dberr');
    } else console.log('database connected.....');
});

module.exports=db;
