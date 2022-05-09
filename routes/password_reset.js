const express =require('express');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const database=require('./database');

const router = express.Router();

router.post('/forgot', (req, res) =>{
    console.log(req.body)
    let Email = req.body.Email ;
    
    // Serches for user
    let sql = `SELECT Email FROM user WHERE Email = '${Email}' `;

    database.query(sql,(err,result) =>{
        if (err) {
            console.log("SQL error");
            res.send(err);
        }
        
        if(result.length >0)
        {
            console.log("User found", result);
            res.send({mesage: "User found", data: result});

            // Send email

            let transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user: 'tshwanevirtualhackathon@gmail.com',
                pass: 'Tvh@0152'
            },
            secureConnection: 'false',
            tls: {
                ciphers: 'SSLv3',
                rejectUnauthorized: false
            }
            }); 

            const token = jwt.sign({Email: result, iat: Date.now(), exp: Date.now() + 3000},'ScreteKey');
                                 
            message ={
                from:'tshwanevirtualhackathon@gmail.com',
                to: Email,
                subject:'No reply :TVH Application',
                text: `Here is the the link to reset your password --->  localhost:3000/password_reset/reset/${token}`
            }

            //  Save the token to the user table
            sql = `UPDATE user  SET resetToken = '${token}' WHERE Email == ${email}`;
         
            database.query(sql, (err, result) => {
                if (err) {
                    res.send("There was an error");
                }
                if(result.length > 0)
                // Then send the token to the user's email
                transporter.sendMail(message,function(err, info) {
                    if (err) {
                        console.log(err)
                    } else {
                        res.send("Check your email for the link to reset your password");
                    }   
                });
            });
         } else {
            console.log("User not found ");
            res.send("User not found ");
        }

    });

});

router.get("/reset/:token", (req, res) => {
    // Verifies the token
    const token = req.params.token.split(" ")[1];
    jwt.verify(token, 'ScreteKey', (err, decoded) => {
        if (err) {
            res.send('Your password reset token is ivalid!');
            // Redirect to forgot password
        } else {
            let sql = `SELECT Email, resetToken FROM user WHERE Email = '${decoded.Email}' `;
            db.query(sql, (err, result) => {
                if (err) {
                    console.log(err);
                    res.send("There was an error");
                    // Redirect to email forgot form
                }
                if(result.length > 0) {
                    // Check if the token that is recieved is the one that was sent
                    if (result.resetToken == req.params.token) {
                        res.send("You are ready to reset your email");
                        // Redirect to password reset form
                    } else {
                        res.send('Your password reset token is ivalid or has expired!');
                    }
                }

            });

        }
    });
});

router.put("/reset/:token", (req, res) => {

    const token = req.params.token.split(" ")[1];
    jwt.verify(token, 'ScreteKey', (err, decoded) => {
        if (err) {
            res.send('Your password reset token is ivalid!');
        } else {
            let sql = `SELECT Email FROM user WHERE Email == ${decoded.Email}`;

            database.query(sql, (err,result) =>{
                if (err) {
                    console.log(err);
                    res.send({error: err});
                }
                
                if(result.length > 0) {
                    console.log("User found");
                    sql = `UPDATE user  SET password = ${password} WHERE Email == ${email}`;
        
                    database.query(sql, (err, result) => {
                        if (err) {
                            console.log(err);
                            res.send("There was an error");
                        }
                        if(result.length > 0)
                            res.send("Your password was successfully updated");
                    });
                } else {
                    console.log("User not found ");
                    res.send("User not found ");
                }
            });

        }
    });


    let email, password = req.body.email ;
    
});

module.exports = router;
