import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { dbConnection } from './Databases/dbConnection.js';
import router from './Routes/EcommerceRoute.js';
import { createOrder,getOrders } from './Controller/Orders.js';

const app = express()
dotenv.config({path:"./config/config.env"});

app.use(cors({
    origin:[process.env.FRONTEND_URL,"https://e-commerce-frontend-q3cm.vercel.app/"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use('/api/users',router)

router.post("/create", createOrder);

router.get("/all-orders", getOrders);


dbConnection();

export default app