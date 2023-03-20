import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
NODE_ENV:,
  DATABASE_URL: z.string(),
  port: z.number().default(3333),
})
export const env = envSchema.parse(process.env)
