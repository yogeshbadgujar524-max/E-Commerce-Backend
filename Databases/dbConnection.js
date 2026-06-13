import mongoose from "mongoose";


export const dbConnection = async ()=>{
    let IsConnected = false;
    await mongoose.connect(process.env.MONGO_URI,{
        dbName:"Ecommerce"
    }).then(()=>{
        console.log("Database is connected...");
    }).catch((err)=>{
        console.log("Somer error in database");
    })
}