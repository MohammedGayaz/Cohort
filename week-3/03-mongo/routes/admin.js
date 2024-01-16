const zod = require('zod')
const { Router } = require("express");
const {Admin, Course} = require("../db")
const adminMiddleware = require("../middleware/admin");
const router = Router();

// defining zod schema
const adminSchema = zod.object({
    username : zod.string(),
    password : zod.string()
})

const courseSchema = zod.object({
    title : zod.string(),
    description : zod.string(),
    price : zod.number(),
    image : zod.string(),
    // published : zod.boolean()
})

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    try{
        const adminInput = req.body
        if (!adminSchema.safeParse(adminInput).success)
            throw new Error("invalid Input")
        
        await Admin.create({
            username: adminInput.username,
            password: adminInput.password
        });
        res.status(200).json({
            msg : "Admin added"
        })
    }
    catch(err){
        res.status(411).json({
            msg : err.message || "An error has occured"
        })
    }
});

// 
router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const courseInput = req.body
    console.log(courseSchema.safeParse(courseInput))
    try{
        if(!courseSchema.safeParse(courseInput).success){
            throw new Error("invalid Inputs");
        }

        await Course.create({
            title : courseInput.title,
            description : courseInput.description,
            price : courseInput.price,
            image : courseInput.image,
            published : true
        })
        res.status(200).json({
            msg : "new course added"
        })
    }
    catch(err){
        res.status(411).json({
            msg: err.message || "An error has occured"
        })
    }
});


router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    let data = await Course.find().exec()
    res.status(200).json({
        data,
    })
});

module.exports = router;