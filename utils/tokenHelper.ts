import jwt from 'jsonwebtoken'

export function signToken(id: number) {
    return jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: process.env.JWT_EXPIRES_IN! })
}