import { NextFunction, Request, Response } from "express"
import { errorResponse } from "../utils/response"
import jwt from "jsonwebtoken"
// import prisma from "../db"

export const authorize = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization

        if (!token) {
            return errorResponse(203, "Bad Authorization Header", new Error("Bad Authorization Header"), res)
        }

        const decoded = await jwt.verify(token, process.env.JWT_SECRET!)
        console.log(decoded)
        next();

    } catch (e) {
        return errorResponse(500, "Something Went Wrong", e as Error, res)
    }
}