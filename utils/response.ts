import { Response } from "express";

export function successResponse<T>(statusCode: number, message: string, data: T, res: Response) {
    return res.status(statusCode).json({
        status: true,
        message,
        data: data,
        error: {}
    })
}

export function errorResponse(statusCode: number, message: string, error: Error, res: Response,) {
    return res.status(statusCode).json({
        status: false,
        message,
        error,
        data: {}
    })
}