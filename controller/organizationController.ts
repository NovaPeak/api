import { NextFunction, Request, Response } from "express";
import prisma from "../db";
import { errorResponse, successResponse } from "../utils/response";

export async function createOrganization(req: Request, res: Response, next: NextFunction) {
    try {
        const { name, }
    } catch (e) {
        console.log(e)
        return errorResponse(500, "Something Went Wrong", e as Error, res)
    }
}

export async function getOrganization(req: Request, res: Response, next: NextFunction) {
    try {

    } catch (e) {
        console.log(e)
        return errorResponse(500, "Something Went Wrong", e as Error, res)
    }
}
