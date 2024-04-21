import { NextFunction, Request, Response } from "express"
import { errorResponse } from "../utils/response"
import jwt from "jsonwebtoken"
import prisma from "../db"

interface DecodedJWT {
    id: number
    iat: number
    exp: number
}

declare global {
    namespace Express {
        interface Request {
            query: {
                user: string;
            };
            user: any;
        }
    }
}

export const authorize = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            errorResponse(401, "Unauthorized", new Error("No Authorization Token provided"), res);
            return;
        }

        const splitedPart = token.split(" ")[1];
        if (!splitedPart) {
            errorResponse(401, "Unauthorized", new Error("Bad Authorization Token"), res);
            return;
        }

        const decoded = await jwt.verify(splitedPart, process.env.JWT_SECRET!) as DecodedJWT;
        req.query.user = decoded.id.toString();

        const userObj = await prisma.user.findUnique({
            where: {
                id: decoded.id
            },
            select: {
                id: true,
                email: true,
                name: true,
                isEmailVerified: true,
                role: true,
                createdAt: true,
                updatedAt: true,
                active: true
            }
        });

        if (!userObj) {
            errorResponse(401, "Unauthorized", new Error("User not found"), res);
            return;
        }
        req.user = userObj;
        next();
    } catch (e) {
        console.error("Authorization Error:", e); // Log the error for debugging
        errorResponse(500, "Internal Server Error", e as Error, res); // Return a generic error response
    }
};

export async function organizationAuthorize(req: Request, res: Response, next: NextFunction) {
    try {

    } catch (e) {
        console.error("Organization Authorization Error:", e)
        errorResponse(500, "Internal Server Error", e as Error, res)
    }
}