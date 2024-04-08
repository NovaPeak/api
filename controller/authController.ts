import { NextFunction, Request, Response } from "express";
import prisma from "../db";
import { errorResponse, successResponse } from "../utils/response";
import { comparePassword, hashPassword } from "../utils/managePassword";
import { signToken } from "../utils/tokenHelper";


export const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, name, password } = req.body

        const userObj = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (userObj) {
            return errorResponse(203, "User already exists with these email", new Error("User already exists with these email"), res);
        }

        let hashedPassword = await hashPassword(password as string)

        const createUserObj = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword
            }
        })
        const token = signToken(createUserObj.id)
        const doc = {
            ...createUserObj,
            token
        }

        return successResponse<typeof doc>(201, "User Signup Successfully", doc, res)

    } catch (e) {
        console.log(e)
        return errorResponse(500, "Something Went Wrong", e as Error, res)
    }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        const userObj = await prisma.user.findUnique({
            where: { email }
        })

        if (!userObj) {
            return errorResponse(200, "User not exists with these email", new Error("User not already exists with these email"), res);
        }

        let isPasswordCorrect = await comparePassword(userObj.password, password)
        if (!isPasswordCorrect) {
            return errorResponse(200, "You entered the wrong password", new Error("You have entered the wrong password"), res);
        }

        const token = signToken(userObj.id)
        const doc = {
            ...userObj,
            token
        }

        return successResponse<typeof userObj>(200, "User Logged in Successfully", userObj, res);
    } catch (e) {
        return errorResponse(500, "Something Went Wrong", e as Error, res)
    }
}