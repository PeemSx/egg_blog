const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/PostSchemas')
const app = express();

app.use(express.json());
const Port = 3221;


app.get("/",(req,res) => {

    res.send("Hello API");

})

app.get("/blogs", (req,res) => {
    res.json({'users' : ["userone","UserTwo"]});
})

app.post("/blogs", async (req,res) => {
    try {
        const blog = await Blog.create(req.body);
        res.status(200).json(blog)
    }catch (error){
        console.log(error.message);
        res.status(500).json({message : error.message})
    }
})

app.listen(Port, () => {console.log(`Server is running on port ${Port}`)})

mongoose.connect('mongodb+srv://blogwebDB:rQvvSqqttb9YTmw0@blogweb.zuundad.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log("Database Connected");
}).catch((error) => {
    console.log(error);
})