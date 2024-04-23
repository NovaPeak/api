import { NextFunction, Request, Response } from "express";
import prisma from "../db";
import { errorResponse, successResponse } from "../utils/response";
import { slugify } from "../utils/slugification";
import { signToken } from "../utils/tokenHelper";

interface Organization {
    id: number;
    name: string;
    userId: number | null;
    slug: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    businessTypeId: number;
}

export async function createOrganization(req: Request, res: Response, next: NextFunction) {
    try {
        const { name, organizationType, description } = req.body
        let currentId = 0;
        const lastAddedElement = await prisma.organization.findFirst({
            orderBy: {
                id: 'desc'
            },
            select: {
                id: true
            }
        });
        if (lastAddedElement) {
            currentId = lastAddedElement.id
        }

        const afterSluggifiedName = slugify(name, currentId + 1);

        const organization = await prisma.organization.create({
            data: {
                name,
                userId: parseInt(req.query.user as string),
                description,
                slug: afterSluggifiedName,
                businessTypeId: organizationType
            }
        })

        await prisma.organizationAccess.create({
            data: {
                userId: parseInt(req.query.user as string),
                organizationId: organization.id,
                role: 'Admin'
            }
        })

        return successResponse<Organization>(200, "Organization Created Successfully", organization, res)
    } catch (e) {
        console.log(e)
        return errorResponse(500, "Something Went Wrong", e as Error, res)
    }
}

export async function getOrganization(req: Request, res: Response, next: NextFunction) {
    try {
        const { user } = req.query;
        const organizationList = await prisma.organizationAccess.findMany({
            where: {
                userId: parseInt(user as string)
            },
            include: {
                organization: true
            }
        })

        return successResponse<typeof organizationList>(200, "Organization list fetched successfully", organizationList, res)
    } catch (e) {
        console.log(e)
        return errorResponse(500, "Something Went Wrong", e as Error, res)
    }
}

export async function loginOrganization(req: Request, res: Response, next: NextFunction) {
    try {
        const { user } = req.query;

        const { organizationId } = req.params

        const organizationObj = await prisma.organization.findUnique({
            where: {
                userId: parseInt(user as string),
                id: parseInt(organizationId)
            }
        })

        if (!organizationObj) {
            return errorResponse(500, "Organization not found", new Error("Organization not found"), res)
        }

        const token = signToken(organizationObj.id)

        return successResponse<string>(200, "Logged in organization successfully", token, res)
    } catch (e) {
        return errorResponse(500, "Something Went Wrong", e as Error, res)
    }
}
