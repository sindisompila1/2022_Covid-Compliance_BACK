const express =require('express');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const database=require('./database');

const router = express.Router();

router.post('/forgot', (req, res) =>{  // The user requests password reset
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
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'thatothato1818@gmail.com',
                    pass: '13Moleya.r'
                }
            }); 

            const token = jwt.sign({Email: result[0].Email, iat: Date.now(), exp: Date.now() + 3000},'ScreteKey');
            console.log("The data inside the token", {Email: result[0].Email, iat: Date.now(), exp: Date.now() + 3000});
            message = {
                from:'tshwanevirtualhackathon@gmail.com',
                to: Email,
                subject:'No reply :TVH Application',
                text: `Here is the the link to reset your password --->  localhost:3000/password_reset/reset/${token}`
            }

            //  Save the token to the user table
            sql = `UPDATE user  SET resetToken = '${token}' WHERE Email = '${Email}' `;
            
            database.query(sql, (err, result) => {
                if (err) {
                    res.send("There was an error");
                }
                // Then send the token to the user's email
                console.log("TOKEN: ", token);
                transporter.sendMail(message, function(err, info) {
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
    jwt.verify(req.params.token, 'ScreteKey', (err, decoded) => {
        if (err) {
            res.send('Your password reset token is invalid!');
            // Redirect to forgot password
        } else {
            console.log("Decoded Token: ", decoded);
            let sql = `SELECT Email, resetToken FROM user WHERE Email = '${decoded.Email}' `;
            database.query(sql, (err, result) => {
                if (err) {
                    console.log(err);
                    res.send("There was an error");
                    // Redirect to email forgot form
                }
                if(result.length > 0) {
                    // Check if the token that is recieved is the one that was sent
                    if (result[0].resetToken == req.params.token) {
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
    // Only one password is sent to the backend assuming
    const Password = req.body.Password;

    jwt.verify(req.params.token, 'ScreteKey', (err, decoded) => {
        if (err) {
            res.send('Your password reset token is ivalid!');
        } else {
            let sql = `UPDATE user SET password = '${Password}' WHERE Email = '${decoded.Email}'`;

            database.query(sql, (err, result) => {
                if (err) {
                    console.log(err);
                    res.send("There was an error");
                }
                console.log(sql)
                res.send("Your password was successfully updated");
            });
        }
    });
});

module.exports = router;
