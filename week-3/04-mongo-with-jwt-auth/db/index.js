const mongoose = require('mongoose');
const path = require("path")
require("dotenv").config({
    path : path.resolve(__dirname, "../.env")
})

const dbUrl = process.env.DBUrl;
// Connect to MongoDB
mongoose.connect(dbUrl);

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course',
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    description : String,
    price : Number,
    image : String,
    published: Boolean
});

const Admin = mongoose.model('Admin', AdminSchema, "admin");
const User = mongoose.model('User', UserSchema, "user");
const Course = mongoose.model('Course', CourseSchema, "course");

module.exports = {
    Admin,
    User,
    Course
}
