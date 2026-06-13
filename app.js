import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { dbConnection } from "./Databases/dbConnection.js";
import router from "./Routes/EcommerceRoute.js";

const app = express();

dotenv.config({
  path: "./config/config.env",
});

// Database Connection
dbConnection();

// Middleware
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      "https://e-commerce-frontend-q3cm.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", router);

export default app;