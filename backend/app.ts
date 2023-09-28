// Dada ki Jay Ho

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import blogRoutes from "./routes/blog";

const app = express();

app.use(express.json());
app.use("/blog", blogRoutes);

const MONGO_DB_URI = process.env.MONGO_DB_URI;
console.log("Mongo DB URI: ", MONGO_DB_URI);

mongoose.connect(MONGO_DB_URI!).then(() => {
    console.log("Mongo DB Connected Successfully");

    const PORT = Number(process.env.PORT || 3000);
    app.listen(PORT, "0.0.0.0", () => {
        console.log("Server is listening on port ... " + PORT);
    });
});
