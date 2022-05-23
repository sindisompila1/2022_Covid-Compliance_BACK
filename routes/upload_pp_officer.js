const express =require('express');
const bodyparser=require('body-parser');
const cors = require('cors');
const mysql=require('mysql2');
const router = express.Router();
const app=express();
module.exports = router;

app.use(cors());
app.use(bodyparser.json());

const database=require('./database');
const multer = require('multer'); //npm install multer
const path =require('path');  // npm install path

var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/pp/')     // './public/images/' directory name where save the file and create those to folders
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
 var upload = multer({
    storage: storage
});
 

router.put("/upload_pp",upload.single('pic_path'), (req, res) => {

    //jslet image_id=req.body.image_id;
    //let pictureName=req.body.pictureName;
    let pictureName="haloo";
    let pic_path=req.imgsrc;
    let Officer_id=req.body.Officer_id;

    if (!req.file) {
        console.log("No file upload");
    } else {
        console.log(req.file.filename)
        var imgsrc = req.file.filename
        console.log(imgsrc);
        var insertData = `UPDATE officer SET profile_pic ='${imgsrc}' WHERE Officer_id='${Officer_id}'`
        database.query(insertData, [imgsrc], (err, result) => {
            if (err) throw err
    
            console.log("file uploaded")
        })
    }
});