import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../utils/response";

export const createRecord = async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (e) {
        console.error("Authorization Error:", e);
        errorResponse(500, "Internal Server Error", e as Error, res);
    }
}

export const getRecords = async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (e) {
        console.error("Authorization Error", e)
        errorResponse(500, "Internal Server Error", e as Error, res);
    }
}

export const getRecord = async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (e) {
        console.error("Authorization Error", e)
        errorResponse(500, "Internal Server Error", e as Error, res)
    }
}

export const updateRecord = async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (e) {
        console.error("Authorization Error", e)
        errorResponse(500, "Internal Server Error", e as Error, res);
    }
}

export const deleteRecord = async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (e) {
        console.error("Authorization Error", e)
        errorResponse(500, "Intenal Server Error", e as Error, res);
    }
}