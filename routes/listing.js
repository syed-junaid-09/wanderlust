const express=require("express");
const router=express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("C:\\Users\\SYED JUNAID\\Desktop\\Apna_College\\MAJORPROJECT\\models\\listing.js");
const{isLoggedIn,isOwner,validateListing}=require("C:\\Users\\SYED JUNAID\\Desktop\\Apna_College\\MAJORPROJECT\\middleware.js");
const listingController=require("../controllers/listings.js");
const multer  = require('multer');
const {storage}= require("../cloudconfig.js")
const upload = multer({ storage })


//index, create route

router.route("/")
.get( wrapAsync(listingController.index))
.post(isLoggedIn, 
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing));



//New create route 
router.get("/new", isLoggedIn,listingController.renderNewForm);


//show,update,delete route
router.route("/:id")
.get( wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,upload.single("listing[image]"),
validateListing, wrapAsync(listingController.updateListing))
.delete( isLoggedIn,isOwner,wrapAsync(listingController.destroyListing))




//Edit route
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm));





module.exports=router;