import { NextFunction, Request, Response } from "express";
import prisma from "../db";
import { errorResponse, successResponse } from "../utils/response";
export async function me(req: Request, res: Response, next: NextFunction) {
    try {
        console.log(req.user)
        return successResponse<typeof req.user>(200, "User Information Fetched Successfully", req.user, res)
    } catch (e) {
        console.log(e)
        return errorResponse(500, "Something Went Wrong", e as Error, res)
    }
}