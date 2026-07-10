import express from "express";
import {config} from "dotenv"; 
import { connectDB, disconnectDB } from "./config/db.js";

import movieRoutes from "./routes/movieRoutes.js";
config();
connectDB();


const app = express();
app.use("/movies", movieRoutes)

const port = 5001
app.listen(port, () => {
    console.log(`your server is live!! on ${port}`);
});


///handling database disconnections

//handle rejection
process.on("unhandledRejection", (err) => {
    console.error("unhandled Rejection:", err);
    server.close(async() => {
        await disconnectDB();
        process.exit(1);
    });
});

//handle uncaught execption
process.on("uncaughtException", async(err) => {
    console.error("uncaught exception", err);
    await disconnectDB;
    process.exit(1);
});

//Graceful shutdown
process.on("SIGTERM", async () => {
    console.log("SIGTERM received, shutting down properly");
    server.close(async () => {
        await disconnectDB();
        process.exit(1);
    });
});
