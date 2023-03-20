import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import z from 'zod'
import { randomUUID } from 'node:crypto'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async (request, reply) => {
    const CreateTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })
    const body = CreateTransactionBodySchema.parse(request.body)
  })
}
