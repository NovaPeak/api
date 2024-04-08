import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import router from "./router";

import prisma from "./db";

dotenv.config()

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json())


app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});


app.use("/api/v1", router)
const server = app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

process.on('unhandledRejection', (err: Error
) => {
    prisma.$disconnect();
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message, err.stack);
    server.close(() => {
        process.exit(1);
    });
})