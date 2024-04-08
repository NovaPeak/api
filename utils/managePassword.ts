import bcrypt from 'bcryptjs'


export function hashPassword(password: string) {
    return bcrypt.hash(password, 12);
}

export function comparePassword(originalPassword: string, typedPassword: string) {
    return bcrypt.compare(typedPassword, originalPassword)
}

