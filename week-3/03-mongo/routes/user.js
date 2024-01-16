const zod = require('zod')
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");


// user validation Schema zod
const userSchema = zod.object({
    username : zod.string(),
    password : zod.string()
})




// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const {username, password} = req.body;
    try {
        if(!userSchema.safeParse({username, password}).success)
            throw new Error("Invalid Inputs")
        const newUser = await User.create({
            username: username,
            password : password,
        })

        res.status(200).json({
            msg : "new user created"
        })
    }
    catch(err){
        res.status(411).json({
            msg : err.message || "a error has occured"
        })
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    try{
        let data = await Course.find().exec()
        res.status(200).json({
            data,
        })
    }
    catch(err){
        res.status(411).status({
            msg: err.message || "an error has occured"
        })
    }
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username : req.header("username")
    })
    console.log(user.purchasedCourses)

    const courses = await Course.find({
        _id: {
            "$in" : user.purchasedCourses
        }
    })
    res.json({
        courses: courses
    })
});

module.exports = router