
//declaring variables

const express =require('express');
const bodyparser=require('body-parser');
const cors = require('cors');
const app=express();
const mysql=require('mysql2');
const multer = require('multer');
const path =require('path');





//instantiating 
app.use(cors());
app.use(bodyparser.json());


//creating database connection

const db=mysql.createConnection({host:'localhost',user:'root',password:'',database:'bus2',port:'3306'})

//check the database  connection

db.connect(err=>{
    if(err) {
        console.log(err,'dberr');}
        else{
            console.log('database connected.....');
        }
    

});



//image ///////////////////////////////////////////////////////////////////////////////////////////////

var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/images/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
 
var upload = multer({
    storage: storage
});
 
app.use('/pic_path',express.static('public/images'))
app.post("/image",upload.single('pic_path'), (req, res) => {

    let image_id=req.body.image_id;
    let pictureName=req.body.pictureName;
    let pic_path=req.imgsrc;
    

    if (!req.file) {
        console.log("No file upload");
    } else {
        console.log(req.file.filename)
        
        var imgsrc =`http://localhost:3000/pic_path/`+req.file.filename
        var insertData = `INSERT INTO image(image_id,pictureName,pic_path )VALUES('NULL','${pictureName}','${imgsrc}')`
        db.query(insertData, [imgsrc], (err, result) => {
            if (err) throw err
    
            console.log("file uploaded")
        })
    }


        res.json({
            success:1,
            profile_url:`http://localhost:3000/pic_path/${req.file.filename}`

        })

});

app.listen(3000,()=>{console.log('server running')})

