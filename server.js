import app from './app.js'

if(process.env.MONGO_URI !== "production"){
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`);
});
}

export default app;