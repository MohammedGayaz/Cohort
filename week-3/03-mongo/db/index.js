const mongoose = require('mongoose');
const path = require('path')

require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
})

const dBurl = process.env.DBUrl;

// Connect to MongoDB
mongoose.connect(dBurl);

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
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    image: String,
    published : Boolean,
});

// the explicitly specify the collection name to be "user", "admin" and "course"
const Admin = mongoose.model('Admin', AdminSchema, "admin");
const User = mongoose.model('User', UserSchema, "user");
const Course = mongoose.model('Course', CourseSchema, "course");

// dummy data
/*
const admin = new Admin({
    username : "Mohammed",
    password : "123456"
})

admin.save()

const user = new User({
    username : "yaseen",
    password : "234561"
})

user.save()

const course = new Course({
    title : "new book",
    description : "This is new book",
    price : 105,
    image : "book image"
});

course.save()
*/

module.exports = {
    Admin,
    User,
    Course
}