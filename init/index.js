const mongoose=require("mongoose");
const initData =require("../init/data.js");
const Listing=require("C:\\Users\\SYED JUNAID\\Desktop\\Apna_College\\MAJORPROJECT\\models\\listing.js");

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust"

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB=async ()=>{
   await Listing.deleteMany({});
   initData.data=initData.data.map((obj)=>({
     ...obj,
     owner:"6894aed6ee96571cabcd93d7"}))
   await Listing.insertMany(initData.data);
   console.log("data was initialized");
};

initDB();