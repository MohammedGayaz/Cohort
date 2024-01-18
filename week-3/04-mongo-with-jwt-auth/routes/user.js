const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const zod = require("zod");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken")
const path = require("path")
require("dotenv").config({
    path : path.resolve(__dirname, "../.env")
})

const jwtPassword = process.env.jwtPassword

// zod validation schemas for user
const userSchema = zod.object({
    username : zod.string(),
    password : zod.string()
})


// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const {username, password} = req.body;
    try{
        if(!userSchema.safeParse({username, password}).success)
            throw new Error("Invalid Inputs");

        await User.create({
            username : username,
            password : password
        })
        res.status(200).json({
            msg : "User created successfully"
        })
    }catch(err){
        res.status(401).json({
            msg : err.message || "An error has occured"
        })
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const {username, password} = req.body;
    try{
        if(!userSchema.safeParse({username, password}).success)
            throw new Error("Invalid Inputs")
        else{
            let responce = await User.findOne({
                username : username,
                password : password
            })
            if(!responce){
                throw new Error("Username or Password is incorrect")
            }
            const token = jwt.sign({
                username: username
            }, jwtPassword)
            res.status(200).json({
                jwtToken : token
            })
        }
    }catch(err){
        res.status(401).json({
            msg : err.message || "An error has occured"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try{
        let courses = await Course.find({}).exec()
        res.status(200).json({
            courses : courses
        })
    }catch(err){
        res.status(401).json({
            msg : err.message || "An error has occured"
        })
    }
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.body.username;
    try{
        const updateUser = await User.findOneAndUpdate(
            {username: username},
            {
                $push: {
                    purchasedCourses: courseId
                }
            },
            {
                new: true
            }
        );
        res.status(200).json({
            msg : "Course Purchased Successfully"
        })
    }catch(err){
        res.status(401).json({
            msg : err.message || "An error has occured"
        })
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username : req.body.username
    })
    const courses = await Course.find({
        _id :{
            "$in" : user.purchasedCourses
        }
    }).exec()
    res.status(200).json({
        courses: courses
    })
});

module.exports = router
