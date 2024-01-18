const jwt = require("jsonwebtoken")
const path = require("path")
require("dotenv").config({
    path : path.resolve(__dirname,"../.env")
})
const jwtPassword = process.env.jwtPassword

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.header("Authorization")
    try{
        const decode = jwt.verify(token, jwtPassword)
        if(decode.username){
            next();
        }
        else{
            res.status(411).json({
                msg : "unauthorized"
            })
        }
    } catch(err){
        res.status(411).json({
            msg : err.message || "An error has occured"
        })
    }
}

module.exports = userMiddleware;