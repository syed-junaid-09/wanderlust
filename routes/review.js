const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("C:\\Users\\SYED JUNAID\\Desktop\\Apna_College\\MAJORPROJECT\\models\\review.js");
const Listing = require("C:\\Users\\SYED JUNAID\\Desktop\\Apna_College\\MAJORPROJECT\\models\\listing.js");
const {validateReview, isLoggedIn,isReviewAuthor}=require("../middleware.js");



const reviewController=require("../controllers/reviews.js")


//Reviews---->Post Review Route

router.post("/",validateReview,isLoggedIn, wrapAsync(reviewController.createReview));


//Delete Review Route
router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview));

module.exports=router;