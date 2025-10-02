const express=require("express");
const router=express.Router();


//posts
//Index - posts
router.get("/",(req,res)=>{
    res.send("GET for post");
});

//Show - users
router.get("/:id",(req,res)=>{
    res.send("GET for post id");
});


//POST - users
router.post("/",(req,res)=>{
    res.send("POST for post");
});


//DELETE - users
router.delete("/:id",(req,res)=>{
    res.send("DELETE for post id");
});

module.exports=router;
