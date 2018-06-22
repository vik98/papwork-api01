const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
const Form = mongoose.model("forms");
const User = mongoose.model("users");

router.get("/google", passport.authenticate('google', 
{scope: ['profile', 'email']})
);

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/dashboard');
  });

router.get("/verify", function(req, res){
    if(req.user){
        res.send(req.user)
    }else{
        res.send("error");
    }
});

router.get("/add", function(req, res){
    const form = {
        userID: req.user.id,
        formName: "papwork",
        pages:[{
            typedQuestion: "what is your name"
        }]
    }
    
    new Form(form)
    .save()
    .then(story=>{
        res.redirect("/")
    });

    
})

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
})

module.exports = router;