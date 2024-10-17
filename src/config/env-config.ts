import { config } from 'dotenv'
config()

export const PORT: string = process.env.PORT as string
export const MONGO_URL: string = process.env.MONGO_URL as string
