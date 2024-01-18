const { Admin } = require("../db");
const path = require("path")
const jwt = require("jsonwebtoken")
require("dotenv").config({
    path : path.resolve(__dirname,"../.env")
})

const jwtPassword = process.env.jwtPassword

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.header("Authorization")
    try{
        const decode = jwt.verify(token, jwtPassword)
        if(decode.username)
            next();
        else{
            res.status(403).json({
                msg : "unauthorized"
            })
        }
    }
    catch(err){
        res.json({
            msg : err.message || "An error has occured."
        })
    }
    
}

module.exports = adminMiddleware;