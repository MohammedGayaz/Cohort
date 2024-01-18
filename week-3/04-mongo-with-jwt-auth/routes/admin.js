const zod = require("zod")
const jwt = require("jsonwebtoken")
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");

const path = require("path");
require("dotenv").config({
    path : path.resolve(__dirname, "../.env")
})

const router = Router();
const jwtPassword = process.env.jwtPassword

// Admin validation schema
const adminSchema= zod.object({
    username : zod.string(),
    password : zod.string()
})

// Courses validation schema
const courseSchema = zod.object({
    title : zod.string(),
    description : zod.string(),
    price : zod.number(),
    image : zod.string(),
})


// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic=
    const {username, password} = req.body
    try{
        if(!adminSchema.safeParse({username, password}).success)
            throw new Error("Invalid Inputs")
        Admin.create({ username, password })
        res.status(200).json({ msg : "Admin created successfully" })
    }
    catch(err){
        res.status(401).json({
            msg : err.message || "An error has occured"
        })
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const {username, password} = req.body
    try{
        if(!adminSchema.safeParse({username, password}).success)
            throw new Error('Invalid Inputs')
        else{
            const result = await Admin.findOne({
                username : username,
                password : password,
            }).exec();

            if(!result){
                throw new Error("Username or Password is incorrect")
            }
            const token = jwt.sign({ username: username }, jwtPassword)
            res.status(200).json({
                jwtToken : token
            })
        }
    }
    catch(err){
        res.status(401).json({
            msg : err.message || "An error has occured"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;
    try{
        if(!courseSchema.safeParse({title, description, price, image,}).success)
            throw new Error("Invalid Inputs")
        await Course.create({
            title: title,
            description : description,
            price : price,
            image : image,
            published : true
        })
        res.status(200).json({
            msg : "course created successfully"
        })
    }
    catch(err){
        res.status(401).json({
            msg : err.message || "An error has occured"
        })
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try{
        let data = await Course.find({}).exec()
        res.status(200).json({
            courses : data
        })
    }
    catch(err){
        res.status(411).json({
            msg : err.message || "An error has occured"
        })
    }
});

module.exports = router;