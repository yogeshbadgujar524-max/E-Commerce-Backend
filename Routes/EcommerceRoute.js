import express from 'express'
import { sendRegister } from '../Controller/Register.js';
import { getUsers, sendLogin } from '../Controller/Login.js';
import {createOrder, getOrders, updateOrderStatus, deleteOrder } 
from '../Controller/Orders.js';

const router = express.Router();

router.post('/register', sendRegister)

router.post('/login', sendLogin)

router.get("/all-users", getUsers)

router.post("/create", createOrder);

router.get("/all-orders", getOrders);

router.put("/update-order/:id", updateOrderStatus);

router.delete("/delete-order/:id", deleteOrder);

export default router;