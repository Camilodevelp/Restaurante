import express from "express";
import cors from "cors"
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js"

const app = express();

app.use(morgan("node"));
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });


app.use("/category" ,authRoutes);

export default app;
