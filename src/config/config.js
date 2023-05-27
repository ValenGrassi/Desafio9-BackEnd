import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT
export const COOKIE_SECRET = process.env.COOKIE_SECRET
export const MONGODB_CNX_STR = process.env.MONGODB_CNX_STR
export const JWT_SECRET = process.env.JWT_SECRET
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL 
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD
export const CREDENCIALES_EMAIL = {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
}
export const NODE_ENV = process.env.NODE_ENV || "development"
